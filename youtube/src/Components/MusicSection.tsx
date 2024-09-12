import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusicVideos, selectAllMusicVideos } from '../Store/MusicSlice';
import { RootState } from '../Store/Index';
import Navbar from './Navbar';

const MusicSection: React.FC = () => {
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
      <Navbar />
      <div className="music-section p-4">
        <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {musicVideos.map((video) => (
            <div
              key={video.id}
              className="music-item shadow-md rounded-lg overflow-hidden relative"
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
                    <h3 className="text-lg font-semibold text-white">{video.channelName}</h3>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MusicSection;
