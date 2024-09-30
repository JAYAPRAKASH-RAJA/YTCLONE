import { ComponentType } from "preact";
import { AiOutlineSearch, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { BsYoutube, BsCameraVideo, BsBell, BsArrowLeft } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "preact-router/match";
import { route } from "preact-router";
import { useAppDispatch, useAppSelector } from "../Store/Hooks";
import { clearVideos, changeSearchTerm } from "../Store/Index";
import getSearchPageVideos from "../Store/Reducers/getSearchPageVideos";
import { useState } from 'preact/hooks'
import { Sidebar } from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Index";
import Notificationpopup from "./Notificationpopup";

interface IconProps {
  className?: string;
}

const IconWrapper = <T extends ComponentType<IconProps>>(
  Icon: T,
  className: string
) => {
  return <Icon className={className} />;
};
 
export default function Navbar({toggleSidebar, isSidebarOpen}: {isSidebarOpen:boolean;toggleSidebar:boolean; setShowSignin: (value: boolean) => void;setShowUpload: (value: boolean) => void;}) 
{
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  // const [burgerMenu, setBurgerMenu] = useState(true);
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleSearch = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/search") {
      route("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 h-14 bg-[#0F0F0F] opacity-100 fixed  w-full z-20">        
        <div
          className={`flex gap-3 items-center text-2xl ${
            showFullWidthSearch ? "hidden md:flex" : "flex"
          }`}
        >
          <div onClick={toggleSidebar}>
            {IconWrapper(GiHamburgerMenu, "cursor-pointer text-white")}
          </div>
          <Link href="/">
            <div className="flex gap-1 items-center justify-center rounded-full">
              {IconWrapper(BsYoutube, "text-3xl text-red-600")}
              <span className="text-xl text-white font-normal lg:font-medium">
                YouTube
              </span>
            </div>
          </Link>
        </div>     
        <div
          className={`${
            showFullWidthSearch
              ? "flex flex-grow justify-center items-center"
              : "hidden md:flex flex-grow justify-center items-center"
          }`}
        >
          <form
            className="flex w-full max-w-xl"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            {showFullWidthSearch && (
              <button
                onClick={() => setShowFullWidthSearch(false)}
                type="button"
                className="text-md p-3 bg-[#212121] rounded-full md:hidden"
              >
                {IconWrapper(BsArrowLeft, "")}
              </button>
            )}
            <div className="flex bg-[#121212] border border-gray-700 hover:border hover:border-gray-400 items-center h-10 px-4 rounded-full flex-grow md:flex-grow-0.5 md:ml-[75px] lg:flex-grow">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#121212] focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              {IconWrapper(
                AiOutlineClose,
                `text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`
              )}
            </div>
            <button type="submit" className="p-3 bg-zinc-900 rounded-full">
              {IconWrapper(AiOutlineSearch, "text-xl text-white")}
            </button>
          </form>
        </div>
        {/* Right Side: Icons */}
        <div
          className={`flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6 ${
            showFullWidthSearch ? "hidden md:flex" : "flex"
          }`}
        >
          {!showFullWidthSearch && (
            <>
              {/* Mobile Search Icon */}
              <div
                onClick={() => setShowFullWidthSearch(true)}
                className="md:hidden"
              >
                {IconWrapper(
                  AiOutlineSearch,
                  "text-xl text-white cursor-pointer"
                )}
              </div>
              {IconWrapper(BsCameraVideo, "visible text-white md:block")}
              <div
                onClick={() => setIsOpened((prev) => !prev)}
                className="hidden md:block relative text-white"
              >
                {<BsBell />}
              </div>
              <Notificationpopup
                isOpened={isOpened}
                setIsOpened={setIsOpened}
              />
              <div className="flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6">
                {!user ? (
                  IconWrapper(
                    AiOutlineUser,
                    "text-white w-8 h-8 rounded-full object-cover"
                  )
                ) : (
                  <div className="flex items-center gap-2">
                    <img
                      src={user.picture || ""}
                      alt="User Icon"
                      className="w-9 h-9 rounded-full"/>
                    <span className="text-white">{user.name}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>      
    </>
  );
}
