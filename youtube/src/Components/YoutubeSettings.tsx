import { BsGoogle, BsKeyboard } from 'react-icons/bs'
import icon from '../assets/usericon.png'
import {
  MdOutlineWorkspacePremium,
  MdSecurity,
  MdSettings,
  MdSwitchAccount,
} from 'react-icons/md'
import { FaGlobe, FaSignOutAlt } from 'react-icons/fa'
import { BiDollar } from 'react-icons/bi'
import { TbLanguageHiragana } from 'react-icons/tb'
import { GiRestingVampire } from 'react-icons/gi'

interface YoutubeSettingsProps {
  details: boolean
  setDetails: (details: boolean) => void
}

const YoutubeSettings = ({ details, setDetails }: YoutubeSettingsProps) => {
  return (
    <>
      {details && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 overflow-scroll h-screen"
          onClick={() => setDetails(false)}
        >
          <div
            className="bg-[#333333] text-white rounded-lg w-80 p-4 fixed top-20 right-10 shadow-lg z-20 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Profile Section */}
            <div className="flex items-center space-x-4 mb-4">
              <img src={icon} alt="User Icon" className="w-10 h-10 rounded-full" />
              <div>
                <span className="font-semibold">MARVEL</span>
                <h2 className="text-sm">@UPHMARVEL</h2>
                <h3 className="text-xs text-blue-500">View your channel</h3>
              </div>
            </div>
            <hr className="border-gray-600" />

            {/* Scrollable Options Section */}
            <div className="flex font-light text-lg flex-col space-y-3 mt-4">
              <div className="flex items-center space-x-3">
                <BsGoogle />
                <span>Google Account</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdSwitchAccount />
                <span>Switch Account</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaSignOutAlt />
                <span>Sign out</span>
              </div>
              <hr className="border-gray-600" />
              <div className="flex items-center space-x-3">
                <MdOutlineWorkspacePremium />
                <span>YouTube Studio</span>
              </div>
              <div className="flex items-center space-x-3">
                <BiDollar />
                <span>Purchases and Memberships</span>
              </div>
              <hr className="border-gray-600" />
              <div className="flex items-center space-x-3">
                <MdSecurity />
                <span>Your data in YouTube</span>
              </div>
              <div className="flex items-center space-x-3">
                <TbLanguageHiragana />
                <span>Language: English</span>
              </div>
              <div className="flex items-center space-x-3">
                <GiRestingVampire />
                <span>Restricted Mode: Off</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe />
                <span>Location: India</span>
              </div>
              <div className="flex items-center space-x-3">
                <BsKeyboard />
                <span>Keyboard Shortcuts</span>
              </div>
              <hr className="border-gray-600" />
              <div className="flex items-center space-x-3">
                <MdSettings />
                <span>Settings</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default YoutubeSettings
