import { useState } from "react";
import { AiFillHeart, AiOutlineDislike, AiOutlineShareAlt, AiOutlineComment } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Navbar from "./Navbar";

interface Video {
  id: string;
  title: string;
  channel: string;
  views: number;
  likes: number;
  dislikes: number;
  comments: number;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const ShortsList: React.FC<{ isSidebarOpen: boolean; toggleSidebar: boolean }> = ({ isSidebarOpen, toggleSidebar }) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const gameShorts: Video[] = [
    {
      id: "short1",
      title: "Epic Gaming Moments!",
      channel: "Gaming Daily",
      views: 1200,
      likes: 300,
      dislikes: 50,
      comments: 45,
      duration: "15s",
      thumbnailUrl: "https://www.youtube.com/embed/Db39_uhy_2w",
      videoUrl: "https://www.youtube.com/embed/Db39_uhy_2w",
    },
    {
      id: "short2",
      title: "Top 5 Tips for Winning in Fortnite",
      channel: "Fortnite Master",
      views: 2500,
      likes: 500,
      dislikes: 30,
      comments: 120,
      duration: "30s",
      thumbnailUrl: "https://www.youtube.com/embed/Db39_uhy_2w",
      videoUrl: "https://www.youtube.com/embed/Db39_uhy_2w",
    },
    {
      id: "short3",
      title: "Funny Fails in Among Us",
      channel: "Among Us Fun",
      views: 1800,
      likes: 400,
      dislikes: 20,
      comments: 70,
      duration: "20s",
      thumbnailUrl: "https://www.youtube.com/embed/Db39_uhy_2w",
      videoUrl: "https://www.youtube.com/embed/Db39_uhy_2w",
    },
  ];

  const handleThumbnailClick = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  return (
    <>
  <div className='hidden md:block'>
  <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
  </div>

      <div className="flex justify-center items-center w-screen mt-5 md:p-16 md:mt-0   min-h-screen bg-[#0F0F0F]">
        <div className="grid grid-cols-1 gap-8">
          {gameShorts.map((video) => (
            <div key={video.id} className="relative md:w-full w-[100vw]  max-w-[450px] md:max-w-[350px] mx-auto">
              {playingVideoId === video.id ? (
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  width="350"
                  height="600"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl w-full h-[600px] object-cover"
                ></iframe>
              ) : (
                <div onClick={() => handleThumbnailClick(video.id)} className="cursor-pointer relative">
                  <iframe
                    src={video.thumbnailUrl}
                    title={video.title}
                    width="350"
                    height="600"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-2xl w-full h-[600px] object-cover"
                  ></iframe>
                </div>
              )}

              {/* Channel and title */}
              <div className="absolute bottom-8 left-4 text-white">
                <div className="flex items-center mb-2">
                  <img
                    src={"https://via.placeholder.com/40"} 
                    alt={video.channel}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <h2 className="text-sm font-semibold">{video.channel}</h2>
                </div>
                <h2 className="text-sm font-normal line-clamp-2">{video.title}</h2>
              </div>

              {/* Icons and counts */}
              <div className="absolute top-1/4 right-0 flex flex-col space-y-4 text-white md:right-[-40px]">
                <div className="text-3xl cursor-pointer  p-1 rounded-full flex flex-col items-center">
                  <AiFillHeart />
                  <span className="text-sm mt-1">{video.likes}</span>
                </div>
                <div className="text-3xl cursor-pointer p-1 rounded-full flex flex-col items-center">
                  <AiOutlineDislike />
                  <span className="text-sm mt-1">{video.dislikes}</span>
                </div>
                <div className="text-3xl cursor-pointer  p-1 rounded-full flex flex-col items-center">
                  <AiOutlineComment />
                  <span className="text-sm mt-1">{video.comments}</span>
                </div>
                <div className="text-3xl cursor-pointer  p-1 rounded-full flex flex-col items-center">
                  <AiOutlineShareAlt />
                </div>
                <div className="text-3xl cursor-pointer  p-1 rounded-full flex flex-col items-center">
                  <BsThreeDotsVertical />
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShortsList;
