import { useEffect } from 'preact/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingVideos } from '../Store/Trend';
import { RootState } from '../Store/Index';
import '../app.css'
import Navbar from './Navbar';

const TrendingVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state: RootState) => state.videos.videos);
  const videoStatus = useSelector((state: RootState) => state.videos.status);

  useEffect(() => {
    if (videoStatus === 'idle') {
      dispatch(fetchTrendingVideos());
    }
  }, [videoStatus, dispatch]);

  return (
    <>
    <Navbar/>
  <div className="grid grid-cols-1 mt-20 gap-4">
      {videos.map((video, index) => (
        <div key={video.id} className="flex flex-col md:flex-row">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:w-2/5 md:h-44 xl:h-80 lg:h-72 lg:w-custom-500 lg:object-fill "
          ></iframe>
          <div className="p-4 md:w-3/5">
            <h2 className="text-lg font-normal text-white">{video.snippet.title}</h2>
            <div className="flex items-center mb-2">
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.channelTitle}
                className="w-10 h-10  rounded-full mr-2"
              />
              <p className="text-white">{video.snippet.channelTitle}</p>
            </div>
            <p className="text-white line-clamp-1 lg:line-clamp-2 xl:line-clamp-2 ">{video.snippet.description}</p>
            <span className="text-white">{`Trending ${index + 1}`}</span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TrendingVideos;