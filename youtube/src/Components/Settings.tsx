import { useSelector } from "react-redux";
import Navbar from "./Navbar";
// import icon from "../assets/avatar.png";
import { route } from "preact-router";
import { useState } from "preact/hooks";
import icon from '../assets/usericon.png'
interface User {
  _id: string;
  img: string;
  name: string;
}

const Settings = ({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) => {
  const { currentUser } = useSelector(
    (state: { user: { currentUser: User | null } }) =>
      state.user || { currentUser: null }
  );

  const [selectedOption, setSelectedOption] = useState<'account' | 'downloads' | 'notifications'>('account');

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen}/>

      <div className={`flex flex-col w-full min-h-screen lg:flex-row text-white p-12  bg-[#0F0F0F] ${!isSidebarOpen?'flexrow':'lg:ml-[200px]'}`}>
        <div className="w-full lg:w-[20%] xl:w-[15%] p-4 bg-[#0F0F0F] text-white"> 
          <h1 className="text-2xl mb-4">Settings</h1>
          <ul className="cursor-pointer space-y-2">
            <li
              className={`hover:bg-gray-200 hover:text-black rounded-md p-2 ${selectedOption === 'account' ? 'bg-gray-200 text-black' : ''}`}
              onClick={() => setSelectedOption('account')}
            >
              Account
            </li>
            <li
              className={`hover:bg-gray-200 hover:text-black rounded-md p-2 ${selectedOption === 'downloads' ? 'bg-gray-200 text-black' : ''}`}
              onClick={() => setSelectedOption('downloads')}
            >
              Downloads
            </li>
            <li
              className={`hover:bg-gray-200 hover:text-black rounded-md p-2 ${selectedOption === 'notifications' ? 'bg-gray-200 text-black' : ''}`}
              onClick={() => setSelectedOption('notifications')}
            >
              Notifications
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[80%] xl:w-[85%] p-4 bg-[#0F0F0F] text-white">
          {selectedOption === 'account' && (
            <div>
              <h2 className="text-xl mb-2">Account</h2>
              <h1 className="text-lg font-bold mb-2">
                Choose how you appear and what you see on YouTube
              </h1>
              <p className="mb-4">Signed in as test@gmail.com</p>
              <hr className="mb-4" />

              <h1 className="text-lg mb-2 font-bold">Your YouTube channel</h1>
              <p className="mb-4">
                This is your public presence on YouTube. You need a channel to
                upload your own videos, comment on videos, or create playlists.
              </p>
              <div className="mb-4 relative">
                <h2 className="text-lg mb-2">Your channel</h2>
                {currentUser ? (
                  <div className="flex items-center mb-4">
                    <img
                      className="w-12 h-12 rounded-full object-cover mr-2"
                      src={ icon ||currentUser.img }
                      alt="avatar"
                    />
                    <span className="text-xl text-white">{currentUser.name}</span>
                  </div>
                ) : (
                  <div><img src={icon} alt="" className='lg:w-24 lg:h-24 lg:ml-0 md:w-12 md:h-12 md:mt-4 md:ml-0 md:pr-2 w-10 h-12 ml-60 absolute'/> </div>
                )}
                <section className="space-y-2 flex flex-col xl:ml-36 lg:ml-36 md:ml-12 sm:ml-6">
                  <h3 className="text-lg text-blue-400 cursor-pointer">
                    Channel status and features
                  </h3>
                  <h3 className="text-lg text-blue-400 cursor-pointer" onClick={()=>route('/createchannel')}>
                    Create a new channel
                  </h3>
                  <h3 className="text-lg text-blue-400 cursor-pointer">
                    View advanced settings
                  </h3>
                </section>
              </div>

              <hr className="mb-4" />
              <h1 className="text-lg mb-2 font-bold">Your Account</h1>
              <p className="mb-4">
                You sign in to YouTube with your Google Account
              </p>

              {/* Google Account */}
              <div className="mb-4 relative">
                <h1 className="text-lg font-bold">Google Account</h1>
                <aside className="lg:absolute lg:right-[150px] xl:right-[450px] right-0 bottom-[-30px]">
                  <p className="text-blue-400 cursor-pointer">
                    View or change your Google Account settings.
                  </p>
                  <p>You will be redirected to your Google Account page.</p>
                </aside>
              </div>

              {/* Membership */}
              <div className="relative mt-8 xl:mt-20 lg:mt-20">
                <h1 className="text-lg font-bold">Membership</h1>
                <aside className="lg:absolute xl:right-[307px] right-0 bottom-[-25px]">
                  <p>
                    No membership |{" "}
                    <span
                      className="text-blue-400 cursor-pointer"
                      onClick={() => route("/proversion")}
                    >
                      Get YouTube Premium.
                    </span>
                  </p>
                  <p>
                    YouTube Premium offers uninterrupted music, ad-free videos, and
                    more.
                  </p>
                </aside>
              </div>
            </div>
          )}

          {selectedOption === 'downloads' && (
            <div>
              <h2 className="text-xl mb-2">Downloads</h2>
              <h1 className='mb-2'><b>Control Your Download Settings</b></h1>
              <p className='mb-4 text-gray-300'>Downloads settings apply to this browser only</p>
              <hr className='mb-4'/>
              <div className="mb-4">
                <h2 className="text-lg mb-2">Download Quality</h2>
                <div>
                  <label className="block mb-2">
                    <input type="radio" name="quality" value="ask" className="mr-2" />
                    Ask each time
                  </label>
                  <label className="block mb-2">
                    <input type="radio" name="quality" value="standard" className="mr-2" />
                    Standard (480p)
                  </label>
                  <label className="block mb-2">
                    <input type="radio" name="quality" value="standard" className="mr-2" />
                    Low (140p)
                  </label>
                </div>
              </div>
              <div className=" md:mb-4 md:relative ">
                <h2 className="text-lg mb-2">Delete all downloads</h2>
                <p>Deleting downloads will free up space on this device.</p>
                <button className="  bg-[#242424] text-blue-500 py-2 px-4 rounded-full  absolute  xl:right-72  lg:right-7  bottom+1 md:right-3 md:top-4 border border-gray-400">
                  Delete all downloads
                </button>
              </div>
            </div>
          )}

          {selectedOption === 'notifications' && (
            <div>
              <h2 className="text-xl mb-2">Notifications</h2>
              <h1 className="text-lg font-bold mb-2">Notification Settings</h1>
              <div className="mb-4">
                <h2 className="text-lg mb-2">Email Notifications</h2>
                <label className="block mb-2">
                  <input type="radio" className="mr-2" />
                  Receive email notifications
                </label>
                <label className="block mb-2">
                  <input type="radio" className="mr-2" />
                 Recommended Notifications
                </label>
                <label className="block mb-2">
                  <input type="radio" className="mr-2" />
                 Subscriptions
                </label>
              </div>
              </div>
              
             
            
          )}
        </div>
      </div>
    </>
  );
};

export default Settings;
