import { useEffect } from "preact/hooks";
import Navbar from "../Components/Navbar.tsx";
import { useAppDispatch, useAppSelector } from "../Store/Hooks.tsx";
import { HomePageVideos } from "../Type.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { clearVideos } from "../Store/Index.tsx";
import { route } from "preact-router";
import getSearchPageVideos from "../Store/Reducers/getSearchPageVideos.tsx";
import SearchCard from "../Components/SearchCard.tsx";

export default function Search({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        dispatch(clearVideos());
        if (searchTerm === "") route("/");
        else {
          await dispatch(getSearchPageVideos(false));
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [dispatch, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden    bg-[#0F0F0F] text-white ">
      <div className="h-[7.5vh]">
        <Navbar  toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="flex   bg-[#0F0F0F] text-white  h-[92.5vh] flex-col lg:flex-row">
        {videos.length ? (
          <div className={`py-4 px-4  bg-[#0F0F0F] text-white md:py-8 md:px-8 flex ${!isSidebarOpen ?'flex-col':'flex-col ml-[230px]'} gap-5 w-full `}>
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              height={600}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5  bg-[#0F0F0F] text-white">
                    <SearchCard data={item} key={item.videoId} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          ''
        )}
      </div>
      
    </div>
  );
}
