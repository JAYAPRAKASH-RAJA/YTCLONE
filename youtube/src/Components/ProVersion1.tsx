import premiumicon from '../assets/premium.png';
import { route } from 'preact-router';
import Navbar from './Navbar';
import { useState } from 'preact/hooks';

const ProVersion1 = () => {
  // Get query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const amount = queryParams.get('amount') || '159.00'; // Default amount
  const plan = queryParams.get('plan') || 'monthly';
  const planDuration = plan === 'monthly' ? '1-Month Plan' : '1-Year Plan';

  const [paymentMethod, setPaymentMethod] = useState(''); // State to store selected payment method

  const handleBuyClick = () => {
    if (paymentMethod === 'upi') {
      // Redirect to QRPage with the amount and plan as query params
      route(`/qrpage?amount=${amount}&plan=${plan}`);
    } else if (paymentMethod === 'credit') {
      // Redirect to DebitCardDetails page with the amount and plan as query params
      route(`/debitcarddetails?amount=${amount}&plan=${plan}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-black bg-opacity-80 min-h-screen flex justify-center items-center">
        <div className="bg-gradient-to-t from-[#090909] to-[#383838] text-white p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md md:mt-20 lg:max-w-lg lg:h-[600px] xl:max-w-xl xl:h-[600px]">
          <div className="text-center mb-6 flex">
            <span onClick={() => route('/proversion')} className="cursor-pointer mr-36 "><b>X</b></span>
            <h1 className="text-xl font-semibold">
              <b>Complete Your Purchase</b>
            </h1>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src={premiumicon} alt="premium icon" className="w-12 h-12 sm:w-16 sm:h-16" />
              <div className="ml-4">
                <span className="block font-medium">YouTube Premium</span>
                <span className="block text-sm">Membership</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold">${amount}</h3>
          </div>

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-lg font-medium">{planDuration}</h1>
              <h4 className="text-sm text-white">Access ends: {plan === 'monthly' ? 'Oct 16, 2024' : 'Oct 16, 2025'}</h4>
            </div>
            <div>
              <h3 className="text-lg font-semibold">${amount}</h3>
            </div>
          </div>

          <hr className="mb-6" />

          <div>
            <h1 className="text-lg font-medium mb-4">Add Payment Method</h1>
            <div className="mb-4">
              <input type="radio" id="credit" name="payment" onChange={() => setPaymentMethod('credit')} />
              <label htmlFor="credit" className="ml-2"><b>Add credit or debit card</b></label>
            </div>
            <div className="mb-6">
              <input type="radio" id="upi" name="payment" onChange={() => setPaymentMethod('upi')} />
              <label htmlFor="upi" className="ml-2"><b>Pay by UPI QR code</b></label>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
              onClick={handleBuyClick}
              disabled={!paymentMethod} // Disable the button if no payment method is selected
            >
              BUY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProVersion1;
