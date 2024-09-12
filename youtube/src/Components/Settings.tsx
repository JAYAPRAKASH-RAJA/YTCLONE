import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import icon from '../assets/avatar.png'

interface User {
  _id: string;
  img: string;
  name: string;
}

const Settings = () => {
  const { currentUser } = useSelector(
    (state: { user: { currentUser: User | null } }) =>
      state.user || { currentUser: null }
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen lg:flex-row text-white mt-[40px] bg-[#0F0F0F]">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[15%] xl:w-[15%] p-4 bg-[#0F0F0F] text-white">
          <h1 className="text-2xl mb-4">Settings</h1>
          <ul className="cursor-pointer space-y-2">
            <li className="hover:bg-gray-200 hover:text-black rounded-md p-2">
              Account
            </li>
            <li className="hover:bg-gray-200 hover:text-black rounded-md p-2">
              Downloads
            </li>
            <li className="hover:bg-gray-200 hover:text-black rounded-md p-2">
              Notifications
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[85%] xl:w-[85%] p-4 bg-[#0F0F0F] text-white">
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
          <div className="mb-4">
            <h2 className="text-lg mb-2">Your channel</h2>
            {currentUser ? (
              <div className="flex items-center mb-4">
                <img
                  className="w-8 h-8 rounded-full object-cover mr-2"
                  src={currentUser.img || icon}
                  alt="avatar"
                />
                <span className="text-xl text-white">{currentUser.name}</span>
              </div>
            ) : (
              ""
            )}
            <section className="space-y-2 flex flex-col xl:ml-36 lg:ml-36 md:ml-36 ">
              <h3 className="text-lg text-blue-400 cursor-pointer">
                Channel status and features
              </h3>
              <h3 className="text-lg text-blue-400 cursor-pointer">
                Create a new channel
              </h3>
              <h3 className="text-lg text-blue-400 cursor-pointer">
                View advanced settings
              </h3>
            </section>
          </div>

          <hr className="mb-4" />
          <h1 className="text-lg mb-2 font-bold">Your Account</h1>
          <p className="mb-4">You sign in to YouTube with your Google Account</p>

          {/* Google Account */}
          <div className="mb-4 relative">
            <h1 className="text-lg font-bold">Google Account</h1>
            <aside className="lg:absolute right-0 lg:right-[150px] xl:right-[450px] bottom-[-30px]">
              <p className="text-blue-400 cursor-pointer">
                View or change your Google Account settings.
              </p>
              <p>You will be redirected to your Google Account page.</p>
            </aside>
          </div>

          {/* Membership */}
          <div className="relative xl:mt-20 lg:mt-20 mt-8">
            <h1 className="text-lg font-bold">Membership</h1>
            <aside className="lg:absolute xl:right-[307px] right-0 bottom-[-25px]">
              <p>
                No membership |{" "}
                <span className="text-blue-400 cursor-pointer">
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
      </div>
    </>
  );
};

export default Settings;
