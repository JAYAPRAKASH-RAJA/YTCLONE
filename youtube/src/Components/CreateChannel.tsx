import  { useState } from 'preact/hooks';
import Navbar from "./Navbar";
import createchannel from '../assets/create channel.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { route } from 'preact-router';

const CreateChannel = ({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean; toggleSidebar: boolean }) => {
  const [channelName, setChannelName] = useState("");

  const handleCreate = () => {
    if (channelName.trim()) {
      toast.success('Channel created successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setChannelName("");
    } else {
      toast.error('Channel name cannot be empty.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md mt-20 md:mt-20 lg:max-w-xl xl:max-w-xl bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-4">
            <img src={createchannel} alt="Create Channel" className="w-96 h-40 object-contain" />          
          </div>
          <hr className="bg-gray-400 h-0 w-full mx-auto my-1" />
          <h1 className="text-2xl font-bold text-center mb-4">Create Your Channel Name</h1>
          <p className="text-center text-gray-600 mb-2">
            You can use your brand's name or another name. A good channel name represents you and your content. You can change your channel name at any time.
            <span className="text-blue-500 cursor-pointer"> Learn more</span>
          </p>
          <div className="mt-4">
            <textarea
              name="channelName"
              id="channelName"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="Channel name"
              rows={2}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-start mt-4">
            <input type="checkbox" id="agreement" className="mr-2 mt-2" />
            <label htmlFor="agreement" className="text-gray-600">
              I understand that I am creating a new Google Account with its own settings, including YouTube search and watch history.
              <span className="text-blue-500 cursor-pointer"> Learn more</span>
            </label>
          </div>
          <div className="flex items-center justify-center gap-10 mt-6">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg" onClick={()=>route('/settings')}>
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
          <div className="text-center mt-4 text-gray-600">
            <p>
              You can view and change your Google Account settings anytime at <span className="text-blue-500 cursor-pointer">myaccount.google.com</span>. Your channel name will be linked to a Brand Account managed by <span className="text-gray-800">test@gmail.com</span>. Learn more about
              <span className="text-blue-500 cursor-pointer"> channels</span> and <span className="text-blue-500 cursor-pointer">Brand Accounts</span>. By selecting "Create", you agree to YouTube's <span className="text-blue-500 cursor-pointer">Terms of Service</span>.
            </p>
          </div>
          <div className="text-center text-gray-500 mt-4">
            <span>© 2024 Google</span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateChannel;
