// import { ComponentType } from "preact";
// import { AiOutlineSearch, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
// import { BsYoutube, BsCameraVideo, BsArrowLeft } from "react-icons/bs";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "preact-router/match";
// import { route } from "preact-router";
// import { useAppDispatch, useAppSelector } from "../Store/Hooks";
// import { clearVideos, changeSearchTerm } from "../Store/Index";
// import getSearchPageVideos from "../Store/Reducers/getSearchPageVideos";
// import { useState } from "preact/hooks";
// import Sidebar2 from "./Sidebar2";
// import { useSelector } from "react-redux";
// import { RootState } from "../Store/Index";
// import Content from "./Content";

// // Type for icon props
// interface IconProps {
//   className?: string;
// }

// // Wrapper component for icons to accept `className` prop
// const IconWrapper = <T extends ComponentType<IconProps>>(
//   Icon: T,
//   className: string
// ) => {
//   return <Icon className={className} />;
// };
// export default function Navbar2() {
//   const user = useSelector((state: RootState) => state.auth.user);
//   const dispatch = useAppDispatch();
//   const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
//   const [burgerMenu, setBurgerMenu] = useState(true);
//   const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

//   const handleSearch = () => {
//     const currentPath = window.location.pathname;
//     if (currentPath !== "/search") {
//       route("/search");
//     } else {
//       dispatch(clearVideos());
//       dispatch(getSearchPageVideos(false));
//     }
//   };

//   const handleClick = () => {
//     setBurgerMenu(!burgerMenu);
//   };
  
// // useEffect(()=>{

// // },[])

//   return (
//     <>
//       <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 h-14 bg-[#0F0F0F] opacity-100 fixed top-0 w-full z-20">
//         {/* Left Side: Burger Menu and Logo */}
//         <div className={`flex gap-3 items-center text-2xl ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
//           <div onClick={handleClick}>
//             {IconWrapper(GiHamburgerMenu, "cursor-pointer text-white")}
//           </div>
//           <Link href="/">
//             <div className="flex gap-1 items-center justify-center rounded-full">
//               {IconWrapper(BsYoutube, "text-3xl text-red-600")}
//               <span className="text-xl text-white font-normal lg:font-medium">Studio</span>
//             </div>
//           </Link>
//         </div>
  
//         {/* Search Bar Section */}
//         <div className={`${showFullWidthSearch ? "flex flex-grow justify-center items-center" : "hidden md:flex flex-grow justify-center items-center"}`}>
//           <form className="flex w-full max-w-xl" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
//             {showFullWidthSearch && (
//               <button onClick={() => setShowFullWidthSearch(false)} type="button" className="text-md p-3 bg-[#212121] rounded-full md:hidden">
//                 {IconWrapper(BsArrowLeft, "")}
//               </button>
//             )}
//             <div className="flex bg-[#121212] border border-gray-700 items-center h-10 px-4 hover:border hover:border-gray-400 rounded-full flex-grow md:flex-grow-0.5 md:ml-[75px] lg:flex-grow">
//               <input
//                 type="text"
//                 placeholder="Search across your channel"
//                 className="w-full bg-[#121212] focus:outline-none border-none"
//                 value={searchTerm}
//                 onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
//               />
//               {IconWrapper(AiOutlineClose, `text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`)}
//             </div>
//             <button type="submit" className="p-3 bg-zinc-900 rounded-full">
//               {IconWrapper(AiOutlineSearch, "text-xl text-white")}
//             </button>
//           </form>
//         </div>
  
//         <div className={`flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6 ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
//           {!showFullWidthSearch && (
//             <>
//               <div onClick={() => setShowFullWidthSearch(true)} className="md:hidden">
//                 {IconWrapper(AiOutlineSearch, "text-xl text-white cursor-pointer")}
//               </div>
//               <div className="flex md:ml-[5px]">
//                 <p className="text-white bg-zinc-800 rounded-full flex items-center justify-center hover:border p-2 text-sm w-8 h-8">?</p>
//               </div>
//               <div className="text-white flex gap-2 bg-zinc-900 p-1.5 border font-bold text-sm border-gray-500 rounded-3xl">
//                 {IconWrapper(BsCameraVideo, "visible text-white mt-1 md:block")}
//                 <h2 className="">Create</h2>
//               </div>
//               <div className="flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6">
//                 {!user ? (
//                   IconWrapper(AiOutlineUser, "text-white w-8 h-8 rounded-full object-cover")
//                 ) : (
//                   <div className="flex items-center gap-2">
//                     <img src={user.picture || "alt"} alt="User Icon" className="w-9 h-9 rounded-full" />
//                     <span className="text-white">{user.name}</span>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
          
//         </div>
//       </div>
//         <div className="text-white w-[20%] h-screen pt-14 border border-black     ">
//           <Sidebar2 />
//         </div>
//         <div className="text-white w-[80%] h-screen      ">
//           <Content />
//         </div>
//     </>
//   );
// }
import { ComponentType } from "preact";
import { AiOutlineSearch, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { BsYoutube, BsCameraVideo, BsArrowLeft } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "preact-router/match";
import { route } from "preact-router";
import { useAppDispatch, useAppSelector } from "../Store/Hooks";
import { clearVideos, changeSearchTerm } from "../Store/Index";
import getSearchPageVideos from "../Store/Reducers/getSearchPageVideos";
import { useState } from "preact/hooks";
import Sidebar2 from "./Sidebar2";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Index";
import Content from "./Content";

// Type for icon props
interface IconProps {
  className?: string;
}

// Wrapper component for icons to accept `className` prop
const IconWrapper = <T extends ComponentType<IconProps>>(
  Icon: T,
  className: string
) => {
  return <Icon className={className} />;
};

export default function Navbar2() {
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
        <div className={`flex gap-3 items-center text-2xl ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
          <div onClick={handleClick}>
            {IconWrapper(GiHamburgerMenu, "cursor-pointer text-white")}
          </div>
          <Link href="/">
            <div className="flex gap-1 items-center justify-center rounded-full">
              {IconWrapper(BsYoutube, "text-3xl text-red-600")}
              <span className="text-xl text-white font-normal lg:font-medium">Studio</span>
            </div>
          </Link>
        </div>
  
        {/* Search Bar Section */}
        <div className={`${showFullWidthSearch ? "flex flex-grow justify-center items-center" : "hidden md:flex flex-grow justify-center items-center"}`}>
          <form className="flex w-full max-w-xl" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            {showFullWidthSearch && (
              <button onClick={() => setShowFullWidthSearch(false)} type="button" className="text-md p-3 bg-[#212121] rounded-full md:hidden">
                {IconWrapper(BsArrowLeft, "")}
              </button>
            )}
            <div className="flex bg-[#121212] border border-gray-700 items-center h-10 px-4 hover:border hover:border-gray-400 rounded-full flex-grow md:flex-grow-0.5 md:ml-[75px] lg:flex-grow">
              <input
                type="text"
                placeholder="Search across your channel"
                className="w-full bg-[#121212] focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />
              {IconWrapper(AiOutlineClose, `text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`)}
            </div>
            <button type="submit" className="p-3 bg-zinc-900 rounded-full">
              {IconWrapper(AiOutlineSearch, "text-xl text-white")}
            </button>
          </form>
        </div>
  
        <div className={`flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6 ${showFullWidthSearch ? "hidden md:flex" : "flex"}`}>
          {!showFullWidthSearch && (
            <>
              <div onClick={() => setShowFullWidthSearch(true)} className="md:hidden">
                {IconWrapper(AiOutlineSearch, "text-xl text-white cursor-pointer")}
              </div>
              <div className="flex md:ml-[5px]">
                <p className="text-white bg-zinc-800 rounded-full flex items-center justify-center hover:border p-2 text-sm w-8 h-8">?</p>
              </div>
              <div className="text-white flex gap-2 bg-zinc-900 p-1.5 border font-bold text-sm border-gray-500 rounded-3xl">
                {IconWrapper(BsCameraVideo, "visible text-white mt-1 md:block")}
                <h2 className="">Create</h2>
              </div>
              <div className="flex gap-3 items-center text-xl sm:gap-5 md:gap-7 lg:gap-7 xl:gap-6">
                {!user ? (
                  IconWrapper(AiOutlineUser, "text-white w-8 h-8 rounded-full object-cover")
                ) : (
                  <div className="flex items-center gap-2">
                    <img src={user.picture || "alt"} alt="User Icon" className="w-9 h-9 rounded-full" />
                    <span className="text-white">{user.name}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex h-screen ">
        <div className="text-white w-[20%] h-full border-r border-black pt-14">
          <Sidebar2 />
        </div>
        <div className="text-white w-[80%] h-full ">
          <Content />
        </div>
      </div>
    </>
  );
}
