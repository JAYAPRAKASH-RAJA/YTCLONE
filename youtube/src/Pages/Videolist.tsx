import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import axios from 'axios';
import Navbar from '../Components/Navbar';
// import { FaShare } from 'react-icons/fa';

interface Video {
  description: string;
  _id: string;
  filename: string;
  path: string;
  size: number;
}

const VideoList: FunctionalComponent = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8010/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);



  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8 bg-[#0F0F0F] text-white">
        <h2 className="col-span-full text-2xl mb-4">Uploaded Videos</h2>
        {videos.map((video) => (
          <div key={video._id} className="p-4 rounded-xl">
            <video className="w-full h-72 object-cover rounded-md" controls>
              <source src={`http://localhost:8010/uploads/${video.filename}`} type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
            <p className="mb-2">{video.filename}</p>
            <p className="mb-2">{video.description}</p>
           
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoList;
