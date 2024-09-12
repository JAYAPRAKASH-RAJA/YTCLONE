import { ComponentType } from "preact";
import { AiOutlineSearch, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { BsYoutube, BsCameraVideo, BsBell, BsArrowLeft } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "preact-router/match";
import { route } from "preact-router";
import { useAppDispatch, useAppSelector } from "../Store/Hooks";
import { clearSearchTerm, clearVideos, changeSearchTerm } from "../Store/Index";
import getSearchPageVideos from "../Store/Reducers/getSearchPageVideos";
import { useState } from "preact/hooks";
import { Sidebar } from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Index";

// Type for icon props
interface IconProps {
  className?: string;
  
}

// Wrapper component for icons to accept `className` prop
// const IconWrapper = (Icon: ComponentType<IconProps>, className: string) => {
//   return <Icon className={className} />;
// };
const IconWrapper = <T extends ComponentType<IconProps>>(Icon: T, className: string) => {
  return <Icon className={className} />;
};

export default function Navbar({setShowSignin,setShowUpload,}: {setShowSignin: (value: boolean) => void;setShowUpload: (value: boolean) => void;}) {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const [burgerMenu, setBurgerMenu] = useState(true);
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  const handleSearch = () => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/search") {
      route("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  const handleClick = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 h-14 bg-[#0F0F0F] opacity-100 fixed top-0 w-full z-20">
        {/* Left Side: Burger Menu and Logo */}
        <div
          className={`flex gap-3 items-center text-2xl ${
            showFullWidthSearch ? "hidden md:flex" : "flex"
          }`}
        >
          <div>
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

        {/* Search Bar Section */}
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
            <div className="flex bg-[#121212] border border-gray-700  items-center h-10 px-4 rounded-full flex-grow">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#121212] focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value) )}
              />
              {IconWrapper(AiOutlineClose, `text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`)}
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
              {IconWrapper(AiOutlineSearch, "text-xl text-white cursor-pointer md:hidden")}
              {IconWrapper(BsCameraVideo, "visible text-white md:block")}
              <div className="hidden md:block relative">
                {IconWrapper(BsBell, "text-white")}
                <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                  {/* 7+ */}
                </span>
              </div>
              <div className="flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6">
                {user ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={user.picture || ""}
                      alt="User Icon"
                      className="w-9 h-9 rounded-full"
                    />
                    <span className="text-white">{user.name}</span>
                  </div>
                ) : (
                  {IconWrapper(AiOutlineUser, "text-white w-8 h-8 rounded-full object-cover")}  )}
              </div>
            </>
          )}
        </div>
      </div>
      <Sidebar isOpen={burgerMenu} />
    </>
  );
}
