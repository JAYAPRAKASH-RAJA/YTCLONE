import  { useEffect, useState } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, selectAllSportsVideos } from '../Store/SportsSlice';
import { RootState } from '../Store/Index';
import Navbar from './Navbar';

const SportsSection: React.FC = ({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) => {
  const dispatch = useDispatch();
  const sportsVideos = useSelector(selectAllSportsVideos);
  const videoStatus = useSelector((state: RootState) => state.sports.status);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  useEffect(() => {
    if (videoStatus === 'idle') {
      dispatch(fetchVideos());
    }
  }, [videoStatus, dispatch]);

  const handleMouseEnter = (videoId: string) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen}/>
      
      <div className="sports-section p-4">
        {/* <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"> */}
        <div className={`grid  mt-10 ${!isSidebarOpen ? 'grid-cols-4':'grid-cols-3 lg:w-[80vw] ml-[230px]'} gap-4`}>
          {sportsVideos.map((video) => (
            <div
              key={video.id}
              className="sports-item shadow-md rounded-lg overflow-hidden relative"
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
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={video.channelImage}
                    alt={video.channelName}
                    className="w-10 h-10 rounded-full mr-2 text-white"
                  />
                  <div>
                    <h3 className=" font-semibold text-white">{video.channelName}</h3>
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

export default SportsSection;
