import { route } from 'preact-router';
import { useState } from 'preact/hooks';
import Navbar from './Navbar';

const DebitCardPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    cardholderName: '',
    streetAddress: '',
    city: '',
    pincode: '',
    state: '',
    country: 'India(IN)',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    // console.log('Form Data:', formData);
  };

  const goBack = () => {
    route('/proversionbuy'); // Adjust this route based on where you want to navigate
  };

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-black bg-opacity-80 text-white flex flex-col items-center justify-center p-4">
        <div className="bg-gradient-to-t from-[#090909] to-[#383838] mt-20 p-6 rounded-lg w-full max-w-lg">
          <div className="relative flex items-center justify-between">
    {/* Back Icon aligned to the left */}
    <h2 onClick={goBack} className="cursor-pointer absolute left-0 ml-4">
      ⬅️
    </h2>
    
    {/* Centered title */}
    <h2 className="text-xl font-bold mx-auto">Add credit or debit card</h2>
  </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="number"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-500 rounded-md "
                required
              />
            </div>

            <div className="flex gap-4">
              <input
                type="number,text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleInputChange}
                className="w-1/2 p-2 bg-gray-500 rounded-md"
                required
              />
              <input
                type="number"
                name="cvc"
                placeholder="CVC"
                value={formData.cvc}
                onChange={handleInputChange}
                className="w-1/2 p-2 bg-gray-500 rounded-md"
                required
              />
            </div>

            <div>
              <h4 className="mb-2">Cardholder name</h4>
              <input
                type="text"
                name="cardholderName"
                placeholder="Cardholder Name"
                value={formData.cardholderName}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-500 rounded-md"
                required
              />
            </div>

            <hr className="my-4" />

            <div>
              <h4 className="mb-2">Street address</h4>
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-500 rounded-md"
                required
              />
            </div>

            <hr className="my-4" />

            <div className="flex gap-4">
              <div className="w-1/2">
                <h4 className="mb-2">City</h4>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-500 rounded-md"
                  required
                />
              </div>

              <div className="w-1/2">
                <h4 className="mb-2">Pincode</h4>
                <input
                  type="number"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-500 rounded-md"
                  required
                />
              </div>
            </div>

            <hr className="my-4" />

            <div>
              <h4 className="mb-2">State</h4>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-500 rounded-md"
                required
              />
            </div>

            <hr className="my-4" />

            <div>
              <h4 className="mb-2">Country/Region</h4>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-500 rounded-md "
                required
              >
                <option value="India(IN)">India(IN)</option>
                <option value="Australia(AU)">Australia(AU)</option>
                <option value="America(USA)">America(USA)</option>
              </select>
            </div>
            <p>By continuing, you agree to the Google Payments <span className='text-blue-400'>Terms of Service.</span> The Privacy Notice describes how your data is handled.</p>
            <button type="submit" className="w-full bg-blue-500 p-2 rounded-md text-white font-semibold mt-6">
              Save Card
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DebitCardPage;

