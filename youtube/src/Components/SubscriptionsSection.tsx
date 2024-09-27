import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusicVideos, selectAllMusicVideos } from '../Store/MusicSlice';
import { RootState } from '../Store/Index';
import Navbar from './Navbar';

const SubscriptionSection: React.FC = ({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) => {
  const dispatch = useDispatch();
  const musicVideos = useSelector(selectAllMusicVideos);
  const musicStatus = useSelector((state: RootState) => state.music.status);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  useEffect(() => {
    if (musicStatus === 'idle') {
      dispatch(fetchMusicVideos());
    }
  }, [musicStatus, dispatch]);

  const handleMouseEnter = (videoId: string) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen}/>
     
      <div className="p-4 ">
        <h1 className={`font-bold text-2xl text-white mt-12 ${isSidebarOpen?'ml-[240px]':'ml-[10px]'}`}>Subscriptions</h1>
        <div className={`grid  mt-5  ${!isSidebarOpen ?'grid-cols-1 lg:grid-cols-3 p-0 md:w-[100vw] md:grid-cols-2 ':'lg:grid-cols-3  w-[100vw] md:ml-[230px] grid-cols-1  md:grid-cols-2 '} gap-4`}>
          {musicVideos.map((video) => (
            <div
              key={video.id}
              className=" shadow-md rounded-lg overflow-hidden relative"
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 mb-2 object-cover"
              />
              {hoveredVideo === video.id && (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-64"
                ></iframe>
              )}
              <div className="p-0">
                <div className="flex items-center mb-2">
                  <img
                    src={video.channelImage}
                    alt={video.channelName}
                    className="w-10 h-10 rounded-full mr-2 text-white"
                  />
                  <div>
                    <h3 className="text-md font-bold text-white">{video.channelName}</h3>
                  </div>
                </div>
                <h3 className="text-md font-bold text-white line-clamp-2">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionSection;
