import { useEffect } from "preact/hooks";
import { useAppDispatch, useAppSelector } from "../Store/Hooks";
import { route } from "preact-router";
import { getVideoDetails } from "../Store/Reducers/getVideoDetails";
import { getRecommendedVideos } from "../Store/Reducers/getRecommendedVideos";
import Navbar from "../Components/Navbar";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiScissors } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import WatchCard from "../Components/WatchCard";
import CommentList from "../Components/CommentList";

interface WatchProps {
  id: string;
  onVideoClick: (id: string) => void;
}

const Watch: React.FC<WatchProps> = ({ id,onVideoClick }) => {
  const dispatch = useAppDispatch();
  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );
  const recommendedVideos = useAppSelector(
    (state) => state.youtubeApp.recommendedVideos
  );

  useEffect(() => {
    const fetchVideoDetails = async () => {
      if (id) {
        try {
          await dispatch(getVideoDetails(id));
        } catch (error) {
          console.error(error);
        }
      } else {
        route("/");
      }
    };
    fetchVideoDetails();
  }, [id, dispatch]);

  useEffect(() => {
    const fetchRecommendedVideos = async () => {
      if (currentPlaying && id) {
        try {
          await dispatch(getRecommendedVideos(id));
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchRecommendedVideos();
  }, [currentPlaying, dispatch, id]);

 

  return (
    <>
      {currentPlaying && currentPlaying.videoId === id && (
        <div className="max-h-screen overflow-auto    bg-[#0F0F0F] text-white ">
          <div className="h-16 lg:h-20">
            <Navbar />
          </div>
          <div
            className="flex  flex-col lg:flex-row lg:px-12"
            style={{ height: "calc(100vh - 6rem)" }}
          >
            <div className="flex  flex-1  lg:pr-6">
              <div className=" w-full md:mt-custom-0 lg:mt-custom-0 sm:w-full   lg:h-full">
                <div className="relative h-full rounded-2xl  sm:h-96 lg:h-full ">
                  <iframe
                    className="absolute object-cover w-full h-full"
                    onClick={() => onVideoClick(id)}
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-5 px-4 lg:px-0">
                  <p className="text-md sm:text-xl line-clamp-2">
                    {currentPlaying.videoTitle}
                  </p>
                  <div className="flex relative flex-row justify-between ">
                    <div className="flex absolute mt-1 items-center text-gray-400 text-[12px] sm:text-sm">
                      <span className="after:content-['•'] after:mx-1">
                        {currentPlaying.videoViews} views
                      </span>
                      <span>{currentPlaying.videoAge} ago</span>
                    </div>
                    <div className="mt-7 flex  items-center gap-4 ">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <BiLike className="text-sm sm:text-xl" />
                        <span className="text-[12px] sm:font-bold">
                          {currentPlaying.videoLikes}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <BiDislike className="text-sm sm:text-xl" />
                        <span className="text-[12px] sm:font-bold">
                          Dislike
                        </span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <FaShare className="text-sm sm:text-xl" />
                        <span className="text-[12px] sm:font-bold">Share</span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <HiScissors className="text-sm sm:text-xl" />
                        <span className="text-[12px] sm:font-bold">Clip</span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <MdOutlinePlaylistAdd className="text-sm sm:text-xl" />
                        <span className="text-[12px] sm:font-bold">Save</span>
                      </div>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <BsThreeDots className="text-sm sm:text-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 border-t border-b border-gray-400 my-5 py-3">
                    <div className="flex items-center gap-5">
                      <img
                        src={currentPlaying.channelInfo.image}
                        alt=""
                        className="rounded-full h-12 w-12"
                      />
                      <div className="flex-1">
                        <h5 className="text-sm font-bold">
                          {currentPlaying.channelInfo.name}
                        </h5>
                        <h6 className="text-gray-400 text-xs">
                          {currentPlaying.channelInfo.subscribers} subscribers
                        </h6>
                      </div>
                      <button className=" bg-black text-white rounded-2xl  p-2 text-[10px] tracking-wider lg:text-[12px] xl:text-[15px]">
                        Subscribe
                      </button>
                    </div>
                
                  </div>
                  <CommentList  />
                </div>
              </div>
               
            </div>
            <div className=" flex flex-col ml-2 mt-custom-350  bg-[#0F0F0F] text-white  lg:ml-0  gap-3 w-full  lg:w-1/3 overflow-y-visible h-full sm:mt-custom-0 lg:mt-0">
              {recommendedVideos.length > 0 &&
                recommendedVideos.map((item) => (
                  <WatchCard data={item} key={item.videoId} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Watch;
