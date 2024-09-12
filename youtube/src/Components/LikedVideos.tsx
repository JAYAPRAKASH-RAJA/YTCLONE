import { useEffect, useState } from 'preact/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Index';
import Navbar from './Navbar';

const LikedVideos = () => {
  const likedVideos = useSelector((state: RootState) => state.auth.likedVideos);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      video.addEventListener("mouseover", () => video.play());
      video.addEventListener("mouseout", () => video.pause());
    });
  }, [likedVideos]);

  const handleMouseEnter = (videoId: string) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  if (!likedVideos || likedVideos.length === 0) {
    return <div>No liked videos found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {likedVideos.map((video) => (
            <div
              key={video.id}
              className="mb-4 p-4 rounded-lg shadow-lg relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-64 object-cover mb-2 cursor-pointer"
              />
              {hoveredVideo === video.id && (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full top-4 h-[262px]"
                ></iframe>
              )}
              <h2 className="text-lg font-semibold line-clamp-1 text-white">{video.snippet.title}</h2>
              <div className="flex items-center mb-2">
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.channelTitle}
                  className="w-10 h-10 rounded-full mr-2 text-white"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{video.snippet.channelTitle}</h3>
                </div>
              </div>
              <p className="text-sm line-clamp-2 text-white">{video.snippet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LikedVideos;
