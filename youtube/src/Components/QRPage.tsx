import qrimage from "../assets/qrimage.jpeg";
import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import Navbar from "./Navbar";

const QRPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const amount = queryParams.get("amount") || "159.00"; // Default amount if not passed
  const plan = queryParams.get("plan") || "monthly";

  const [paymentRequest, setPaymentRequest] = useState(null);
  const [gpayReady, setGpayReady] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);

  useEffect(() => {
    // Load Google Pay API dynamically
    const loadGooglePayScript = () => {
      const script = document.createElement("script");
      script.src = "https://pay.google.com/gp/p/js/pay.js";
      script.async = true;
      script.onload = () => {
        initGooglePay();
      };
      document.body.appendChild(script);
    };

    const initGooglePay = () => {
      const paymentsClient = new google.payments.api.PaymentsClient({
        environment: "TEST",
      });

      const paymentDataRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "BCR2DN4T6PGH7V44",
          merchantName: "Example Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPrice: amount,
          currencyCode: "USD",
          countryCode: "US",
        },
      };

      paymentsClient
        .isReadyToPay({
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: paymentDataRequest.allowedPaymentMethods,
        })
        .then((response: any) => {
          if (response.result) {
            setPaymentRequest(paymentDataRequest);
            setGpayReady(true);
          }
        });
    };

    loadGooglePayScript();
  }, [amount]);

  const handleQRCodeScan = () => {
    setScanSuccess(true);
    route("/congratulations"); // Redirect to a success page after QR scan
  };

  return (
    <>
    <Navbar/>
      <div className="bg-black bg-opacity-80 min-h-screen flex justify-center items-center">
        <div className="bg-white text-black p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="text-center mb-6">
            <div className="relative flex justify-center items-center">
              <h1
                className="cursor-pointer absolute left-0 ml-4"
                onClick={() => route("/proversionbuy")}
              >
                ⬅️
              </h1>
              <h1 className="text-xl font-bold mx-auto">Pay by UPI QR code</h1>
            </div>
            <h1 className="text-xl font-semibold">Pay ₹{amount}</h1>
            <h2 className="text-md">
              {plan === "monthly" ? "Monthly Plan" : "Yearly Plan"}
            </h2>
          </div>

          <div className="text-center mb-4">
            <img src={qrimage} alt="QR Code" className="w-48 h-48 mx-auto" />
            <p>Scan the QR code to proceed with the payment</p>
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
            onClick={handleQRCodeScan}
            disabled={!scanSuccess}
          >
            I’ve scanned the QR code
          </button>
        </div>
      </div>
    </>
  );
};

export default QRPage;
