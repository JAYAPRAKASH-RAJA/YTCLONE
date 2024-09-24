// // import Content from "./Content"
// import {
//   FaChartBar,
//   FaClosedCaptioning,
//   FaComments,
//   FaCopyright,
//   FaDollarSign,
//   FaMusic,
//   FaRegPlayCircle,
//   FaTh,
//   FaTools,
// } from "react-icons/fa";
// import usericon from "../assets/usericon.png";
// import { MdOutlineFeedback, MdSettings } from "react-icons/md";

// const Sidebar2 = () => {
//   return (
//     <>
//       <div className="bg-[#0F0F0F] flex flex-col  ">
//         <div className='mb-1'>
//           <div className="flex flex-col  pl-6">
//             <img src={usericon} alt="" className="w-32 h-28 cursor-pointer" />
//             <div className='flex flex-col ml-3'>
//             <h1><b>Your channel</b></h1>
//             <h2 className='text-gray-300'>DwayneJhon</h2>
//             </div>
//           </div>
//         </div>
//         <div className='pl-6 '>
//             <div className='' >
//           <div className='bg-scroll overflow-y-scr text-white cursor-pointer '>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-zinc-700 hover:rounded-xl   ">
//               <FaTh />
//               <span>Dashboard</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl  ">
//               <FaRegPlayCircle />
//               <span>Content</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaChartBar  />
//               <span>Analytics</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaComments  />
//               <span>Comments</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaClosedCaptioning  />
//               <span>Subtitles</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaCopyright />
//               <span>Copyright</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaDollarSign/>
//               <span>Earn</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaTools  />
//               <span>Customization</span>
//             </div>
//             <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//               <FaMusic  />
//               <span>Audio library</span>
//             </div>
//           </div>
//         </div>
//         <div className='cursor-pointer'>
//           <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//             <MdSettings  />
//             <span>Settings</span>
//           </div>
//           <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl ">
//             <MdOutlineFeedback  />
//             <span>Send feedback</span>
//           </div>
//         </div>
//         </div>
//       </div>
//       {/* <div className="text-white w-2/3  h-full pt-14">
//           <h1 ></h1>
//           <Content />
//         </div> */}
//     </>
//   );
// };

// export default Sidebar2;
// import Content from "./Content"
import {
  FaChartBar,
  FaClosedCaptioning,
  FaComments,
  FaCopyright,
  FaDollarSign,
  FaMusic,
  FaRegPlayCircle,
  FaTh,
  FaTools,
} from "react-icons/fa";
import usericon from "../assets/usericon.png";
import { MdOutlineFeedback, MdSettings } from "react-icons/md";


const Sidebar2 = () => {
  return (
    <>
      <div className="bg-[#0F0F0F] flex flex-col h-full">
        <div className="mb-1">
          <div className="flex flex-col pl-20">
            <img
              src={usericon}
              alt=""
              className="w-24 h-24 ml-2 cursor-pointer"
            />
            <div className="flex flex-col ml-3">
              <h1>Your channel</h1>
              <h2 className="text-gray-300">DwayneJhon</h2>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-900 " />
        <div className="pl-6 flex-1">
          <div className="overflow-y-scroll h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black">
            <div className="text-white cursor-pointer">
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-zinc-700 hover:rounded-xl">
                <FaTh />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaRegPlayCircle />
                <span>Content</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaChartBar />
                <span>Analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaComments />
                <span>Comments</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaClosedCaptioning />
                <span>Subtitles</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaCopyright />
                <span>Copyright</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaDollarSign />
                <span>Earn</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaTools />
                <span>Customization</span>
              </div>
              <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
                <FaMusic />
                <span>Audio library</span>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-900 " />
          <div className="cursor-pointer">
            <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
              <MdSettings />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-2 text-lg p-2 hover:bg-gray-700 hover:rounded-xl">
              <MdOutlineFeedback />
              <span>Send feedback</span>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Sidebar2;
