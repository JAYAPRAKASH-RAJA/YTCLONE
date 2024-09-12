import { useEffect, useState } from 'preact/hooks';
import { useAppDispatch, useAppSelector } from '../Store/Hooks';
import { fetchNews } from '../Store/NewsSlice';
import Navbar from './Navbar';
// import { HomePageVideos } from '../Type';

const NewsList = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news.news);
  const newsStatus = useAppSelector((state) => state.news.status);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [newsStatus, dispatch]);

  const handleMouseEnter = (videoId: string) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <>
      <Navbar />
      <div className="p-4">
        {newsStatus === 'loading' && <p>Loading...</p>}
        {newsStatus === 'succeeded' && (
          <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item) => (
              <div
                key={item.id.videoId}
                className="mb-4 p-4 rounded-lg shadow-lg relative overflow-hidden"
                onMouseEnter={() => handleMouseEnter(item.id.videoId)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                  className="w-full h-64 object-cover mb-2 cursor-pointer"
                />
                {hoveredVideo === item.id.videoId && (
                  <iframe
                    src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`}
                    title={item.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full top-4 h-[262px]"
                  ></iframe>
                )}
                <h2 className="text-lg font-semibold line-clamp-1 text-white">{item.snippet.title}</h2>
                <div className="flex items-center mb-2">
                  <img
                    src={item.snippet.thumbnails.default.url}
                    alt={item.snippet.channelTitle}
                    className="w-10 h-10 rounded-full mr-2 text-white"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.snippet.channelTitle}</h3>
                  </div>
                </div>
                <p className="text-sm line-clamp-2 text-white">{item.snippet.description}</p>
              </div>
            ))}
          </div>
        )}
        {newsStatus === 'failed' && <p>Error loading news.</p>}
      </div>
    </>
  );
};

export default NewsList;