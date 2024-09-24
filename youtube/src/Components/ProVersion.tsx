// ProVersion.tsx
import { useState } from 'preact/hooks';
import Navbar from './Navbar';
import { route } from 'preact-router';

const ProVersion = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  const handleSubscribe = () => {
    const amount = selectedPlan === 'monthly' ? 20.00 : 240.00;
    route(`/proversionbuy?amount=${amount}&plan=${selectedPlan}`);
  };
  

  return (
    <>
      <Navbar/>
      
      <div className="mt-10 min-h-screen flex items-center justify-center bg-[#0F0F0F] p-4">
      
        <div className="bg-gradient-to-b from-[#5f3985] to-[#050009] rounded-lg shadow-lg p-6 w-full max-w-xl  h-auto sm:h-auto md:h-[80vh]">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-2xl font-bold text-white text-center">Pro Version</h1>
            <p className="text-white text-center">Unlock the most Pro support</p>
            <p className="text-white text-center">from our team</p>
          </div>
          <div className="relative ">
            <button className="text-white absolute bottom-20 right-0">Restore</button>
          </div>
          

          <div className="pb-12 text-white">
            <h2>☑️ Pro Support from our team</h2>
            <h2>☑️ Pro Support from our team</h2>
            <h2>☑️ Pro Support from our team</h2>
            <h2>☑️ Pro Support from our team</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <div
              className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === 'monthly' ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <h2 className="text-xl font-semibold text-white">Monthly</h2>
              <p className="text-white">$20.00 billed monthly</p>
            </div>
            <div
              className={`p-4 border rounded-lg cursor-pointer ${selectedPlan === 'yearly' ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => setSelectedPlan('yearly')}
            >
              <h2 className="text-xl font-semibold text-white">Yearly</h2>
              <p className="text-white">$240.00 billed yearly</p>
              <p className="text-green-500">Save $240.00</p>
              <p className="text-white">1 week free trial</p>
            </div>
          </div>

          <div className="mt-6">
            <button  onClick={handleSubscribe} className="w-full bg-blue-500 text-white py-2 rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProVersion;
