import { useEffect, useState } from "preact/hooks";
import Navbar from "../Components/Navbar.tsx";
import { useAppDispatch, useAppSelector } from "../Store/Hooks.tsx";
import getHomePageVideos from "../Store/Reducers/getHomePageVideos.tsx";
import { HomePageVideos } from "../Type.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Components/Card.tsx";
import { clearVideos } from "../Store/Index.tsx";
import { useWindowWidth } from "./WindowWidthProvider.tsx";
import Signin from "../Components/Signin.tsx";
import UploadVideo from "../Components/UploadVideo.tsx";
import FeedbackForm from "../Pages/FeedbackForm.tsx"; 
import { Sidebar } from "../Components/Sidebar.tsx";


export default function Home({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) {
  const [showSignin, setShowSignin] = useState<boolean>(false);
  const [showUpload, setShowUpload] = useState<boolean>(false);
  // const [showFeedback, setShowFeedback] = useState<boolean>(false); 
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const windowWidth = useWindowWidth();
  

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        await dispatch(getHomePageVideos(false));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [dispatch]);

  

  return (
    <>
      {showSignin ? <Signin setShowSignin={setShowSignin} /> : null}
      {showUpload ? <UploadVideo setShowUpload={setShowUpload} /> : null}
      
     
      
      <div className="max-h-screen overflow-hidden bg-[#0F0F0F] text-white">
        <div style={{ height: "7.5vh" }}>
          <Navbar
            setShowSignin={setShowSignin}
            setShowUpload={setShowUpload}
            toggleSidebar={toggleSidebar} 
            isSidebarOpen={isSidebarOpen} 
          />
        </div>
        
        <div className="flex" style={{ height: "100vh" }}>
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length <= 500}
            >
              <div
                className={` grid mt-8  ${isSidebarOpen? 'p-0 gap-0 top-0 md:grid-cols-3 md:ml-[220px]':'md:grid-cols-4 lg:w-[95vw]  md:ml-[80px] md:gap-x-10  '} gap-y-5 md:p-8 bg-[#0F0F0F]
                 text-white fixed w-[130vw] h-full lg:w-[85vw] gap-x-4 `}               
              style={{position:'absolute'}}>
                {videos.map((item: HomePageVideos, index: number) => {
                  return <Card data={item} key={`${item.videoId}-${index}`} />;
                })}
              </div>
            </InfiniteScroll>
          ) : null}
        </div>
      </div>
    </>
  );
}
