import { BsThreeDotsVertical } from "react-icons/bs";
import Navbar from "./Navbar";
import { useState } from "preact/hooks";
import { BiDownload, BiPlay, BiShuffle } from "react-icons/bi";

interface Channel {
  name: string;
  id: string;
  profileUrl: string;
}

interface Video {
  id: number;
  title: string;
  channel: Channel;
  views: number;
  description: string;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

const WatchLater = ({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) => {
  const [videoData, setVideoData] = useState<Video[]>([
    {
      id: 1,
      title: "New way to create variables",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 257136,
      postedAt: new Date("2024-09-21"),
      description: "Easy to understand JavaScript with our channel.",
      duration: 732,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      id: 2,
      title: "Another way to create variables",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 300000,
      postedAt: new Date("2024-09-22"),
      description: "More JavaScript tips and tricks.",
      duration: 745,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    
    {
      id: 3,
      title: "Another way to create variables",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 300000,
      postedAt: new Date("2024-09-22"),
      description: "More JavaScript tips and tricks.",
      duration: 745,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      title: "Another way to create variables",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 300000,
      postedAt: new Date("2024-09-22"),
      description: "More JavaScript tips and tricks.",
      duration: 745,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 5,
      title: "Another way to create variables",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 300000,
      postedAt: new Date("2024-09-22"),
      description: "More JavaScript tips and tricks.",
      duration: 745,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ]);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen} />
      <div className='text-white gap-20 lg:p-20 w-full  flex flex-col md:flex-col lg:flex-row xl:flex-row lg:ml-52 md:p-0 md:mt-16 lg:mt-2 p-0 mt-16'>
        <div className='xl:w-[27%] lg:w-[28%] w-screen sticky  '>
          <div className='h-[600px] bg-gradient-to-t from-[#0f0f0f] to-[#aba9a9]'>
            <img src={'https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg'} alt="" className='p-4'/>
            <h1 className='font-semibold text-3xl ml-4'><b>Watch later</b></h1>
            <h2 className='ml-4 text-lg mt-2 font-bold'>Dwayne jhonson</h2>
            <div className='flex gap-4 ml-4'>
              <h3>2 videos</h3>
              <h3>No views</h3>
              <h3>Updated today</h3>
            </div>
            <div className='flex  ml-4 gap-6 rounded mt-2'>
              <span className='p-2 bg-[#8f8c8c] rounded-full cursor-pointer'><BiDownload/></span>
              <span className='p-2 bg-[#8f8c8c] rounded-full cursor-pointer'><BsThreeDotsVertical/></span>
            </div>
            <div className='ml-4 gap-6 flex'>
             <div className='bg-[#ffffff] p-1 rounded-2xl text-black flex mt-4 items-center cursor-pointer w-32 justify-center'><span><BiPlay/></span>
             <span> <button>Play all</button></span></div>
             <div className='bg-[#ffffff] p-1 rounded-2xl text-black flex mt-4 items-center cursor-pointer w-32 justify-center'><span><BiShuffle/></span>
             <span><button>Shuffle</button></span>
             </div>
            </div>
          </div>
         
        </div>
        <div className='flex flex-col xl:w-[60%] lg:w-[65%] w-screen overflow-y-auto h-screen '>
          <div className='gap-10 flex sticky'>
            <button className='bg-gray-300 text-black rounded cursor-pointer w-10 p-0.5'>All</button>
            <button className='bg-gray-300 text-black rounded cursor-pointer w-14 p-0.5'>Videos</button>
            <button className='bg-gray-300 text-black rounded cursor-pointer w-14 p-0.5'>Shorts</button>
          </div>
          <div className='flex flex-col  mt-5 '>
            {videoData.map((like) => (
              <div key={like.id} className='flex  mt-10 '>
                <img src={like.thumbnailUrl} alt={like.title} className='xl:w-48 h-28 lg:w-44 lg:h-24' />
                <div className='pl-4 lg:pl-1'>
                  <h1 className='font-bold text-xl '>{like.title}</h1>
                  <div className='flex xl:gap-2 lg:gap-1 lg:text-sm xl:text-lg '>
                    <h3>{like.channel.name}</h3><span className=''>•</span>
                    <h3>{like.views} views</h3><span className=''>•</span>
                    <h3>{like.postedAt.toDateString()}</h3> 
                  </div>
                </div>
                <div className='cursor-pointer'>
                  <BsThreeDotsVertical />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchLater;
