import { useFetchShorts } from "../Pages/useFetchSorts";
import {
  AiFillHeart,
  AiOutlineDislike,
  AiOutlineShareAlt,
  AiOutlineComment,
  AiOutlineMore,
} from "react-icons/ai";
import Navbar from "./Navbar";

const ShortsList: React.FC = ({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) => {
  const { videos, status, error } = useFetchShorts();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const handleThumbnailClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const videoContainer = e.currentTarget.closest(".video-container");
    const iframeElement = videoContainer?.querySelector(
      "iframe"
    ) as HTMLIFrameElement;

    if (iframeElement) {
      iframeElement.style.display = "block";
      iframeElement.style.position = "absolute";
      iframeElement.style.top = "0";
      iframeElement.style.left = "0";
      iframeElement.style.width = "100%";
      iframeElement.style.height = "100%";
      iframeElement.style.zIndex = "10";
      e.currentTarget.style.display = "none"; 
    } else {
      console.error("Iframe element not found");
    }
  };

  return (
    <>
    <Navbar  toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen}/>
    <div className="flex justify-center items-center min-h-screen p-4  bg-[#0F0F0F]">
      <div className="grid grid-cols-1 gap-36 min-w-80  md:min-w-96  lg:max-w-80 xl:max-w-96">
        {videos.map((video) => (
          <div
            key={video.videoId}
            className="relative bottom-20 md:top-[-111px] lg:top-[-111px] xl:top-[-140px] rounded-2xl lg:w-custom-400 xl:w-custom-500 h-screen mb-8 video-container"
          >
            <div className="xl:w-custom-600 rounded-2xl overflow-hidden">
              <img
                src={video.videoThumbnail}
                alt={video.videoTitle}
                className="absolute rounded-2xl h-custom-800 md:h-custom-850 w-custom-500 lg:h-custom-850 xl:h-custom-1100 pb-20 object-cover cursor-pointer"
                onClick={handleThumbnailClick}
              />

               <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1`}
                 className="w-[100%] h-[100%] object-cover "
                style={{ display: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>  
             
            </div>

            <div className="absolute bottom-0 left-0 p-4 w-full rounded-lg">
              <div className="flex items-center mb-2">
                <img
                  src={video.channelInfo.image || "placeholder-image-url"} 
                  alt={video.channelInfo.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <h2 className="text-white font-semibold">
                  {video.channelInfo.name}
                </h2>
              </div>
              <h2 className="text-white text-md font-normal line-clamp-2">
                {video.videoTitle}
              </h2>
            </div>

            {/* Interaction icons */}
            <div className="absolute left-[280px] md:left-[390px] bottom-20 space-y-8 lg:left-[410px] xl:left-[510px] lg:bottom-16 xl:bottom-20 flex flex-col items-center lg:space-y-8 xl:space-y-12 text-black">
              <AiFillHeart className="text-4xl cursor-pointer  bg-slate-200 rounded-3xl p-1" />
              <AiOutlineDislike className="text-4xl cursor-pointer bg-slate-200 rounded-3xl p-1" />
              <AiOutlineComment className="text-4xl cursor-pointer bg-slate-200 rounded-3xl p-1" />
              <AiOutlineShareAlt className="text-4xl cursor-pointer bg-slate-200 rounded-3xl p-1" />
              <AiOutlineMore className="text-4xl cursor-pointer bg-slate-200 rounded-3xl p-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ShortsList;
