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
// import CategoryBar from "./CategoryBar.tsx"; 
// import {gapi} from 'gapi-script'
// import GoogleLogin from "../Components/GL.tsx";

export default function Home() {
  const [showSignin, setShowSignin] = useState<boolean>(false);
  const [showUpload, setShowUpload] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const windowWidth = useWindowWidth();
  const clientId='1063278230644-l8r621g3ln6hb7mq5uctoiauhhn41np6.apps.googleusercontent.com';

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

 

  const leftClass =
    windowWidth < 640
      ? "left-5 "
      : windowWidth < 768
      ? "left-10"
      : windowWidth <= 1330
      ? "left-10"
      : "left-10";

  return (
    <>
      {showSignin ? <Signin setShowSignin={setShowSignin} /> : <></>}
      {showUpload ? <UploadVideo setShowUpload={setShowUpload} /> : <></>}
      {/* <GoogleLogin/> */}
      <div className="max-h-screen  overflow-hidden bg-[#0F0F0F] text-white">
        <div style={{ height: "7.5vh" }}>
          <Navbar setShowSignin={setShowSignin} setShowUpload={setShowUpload} />
        </div>
        
        {/* <CategoryBar /> */}
        
        <div className="flex" style={{ height: "100vh"}}>
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length <= 500}
            >
              <div
                className={`grid grid-cols-1 gap-y-5   p-8 bg-[#0F0F0F] text-white  fixed  w-[130vw] h-full lg:w-[85vw]
                   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 ${leftClass}`}
                style={{
                  padding: "50px",
                  position: "absolute",
                  left:
                    windowWidth <= 640
                      ? "-15px "
                      : windowWidth <= 768
                      ? "5px"
                      : windowWidth <= 1023
                      ? "120px"
                      : windowWidth >= 1024
                      ? "190px"
                      : windowWidth >= 1331
                      ? "220px"
                      : "0",
                }}
              >
                {videos.map((item: HomePageVideos, index: number) => {
                  return <Card data={item} key={`${item.videoId}-${index}`} />;
                })}
              </div>
            </InfiniteScroll>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
