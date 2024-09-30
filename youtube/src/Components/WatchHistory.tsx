import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Navbar from "./Navbar";
import { formatDistanceToNow, format } from "date-fns";
import { BiPause, BiSearch } from "react-icons/bi";
import { MdDelete, MdSettings } from "react-icons/md";

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

const WatchHistory = ({isSidebarOpen,toggleSidebar}:{isSidebarOpen:boolean;toggleSidebar:boolean}) => {
  const [videoData, setVideoData] = useState<Video[]>([
    {
      id: 1,
      title: "New way create variable",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 257136,
      postedAt: new Date("2024-09-21"),
      description:
        "easy to understand JavaScript with our channel.",
      duration: 732,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      channel: {
        name: "Tech Explained",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 105001,
      postedAt: new Date("2024-09-23"),
      description:
        "Master JavaScript fundamentals with real-world examples and projects.",
      duration: 600,
      thumbnailUrl: "https://i.ytimg.com/vi/a6W2ZMpsxhg/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      channel: {
        name: "Tech Explained",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 105001,
      postedAt: new Date("2024-09-23"),
      description:
        "Master JavaScript fundamentals with real-world examples and projects.",
      duration: 600,
      thumbnailUrl: "https://i.ytimg.com/vi/a6W2ZMpsxhg/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      title: "JavaScript Fundamentals",
      channel: {
        name: "Tech Explained",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 105001,
      postedAt: new Date("2024-09-20"),
      description:
        "Master JavaScript fundamentals with real-world examples and projects.",
      duration: 600,
      thumbnailUrl: "https://i.ytimg.com/vi/a6W2ZMpsxhg/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
  ]);

  const getDayLabel = (date: Date) => {
    const now = new Date();
    const differenceInDays = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );

    if (differenceInDays === 0) return "Today";
    if (differenceInDays === 1) return "Yesterday";
    if (differenceInDays === 2) return "Day Before Day";
    return format(date, "MMMM dd, yyyy"); 
  };


  const handleRemoveVideo = (id: number) => {
    const updatedVideos = videoData.filter((video) => video.id !== id);
    setVideoData(updatedVideos);
  };

  return (
    <>
      <Navbar  toggleSidebar={toggleSidebar}  isSidebarOpen={isSidebarOpen}/>
      <div className=" flex  h-screen ">
      <div className="flex  flex-col   text-white p-5 lg:mt-10 xl:mt-10 xl:w-[50%] lg:w-[60%] sm:w-full sm:mt-80 h-full overflow-y-auto ml-80 xl:ml-80 lg:ml-auto md:ml-28 ">
          <h1 className="text-3xl mb-10">
            <b>Watch History</b>
          </h1>
          {["Today", "Yesterday", "Day Before Day"].map((day) => (
            <div key={day} className="mb-10">
              <h3 className="text-lg mt-10 font-bold">{day}</h3>
              {videoData
                .filter((video) => getDayLabel(video.postedAt) === day)
                .map((watch) => (
                  <div key={watch.id} className="flex items-center text-white mt-5 space-x-4">
                    <div className="relative">
                      <video
                        src={watch.videoUrl}
                        className="w-48 h-40"
                        muted
                        loop
                        playsInline
                        onMouseOver={(e) => e.currentTarget.play()}
                        onMouseOut={(e) => e.currentTarget.pause()}
                        poster={watch.thumbnailUrl} 
                      />
                    </div>
                    <div>
                      <div className="flex">
                        <p className="text-xl font-bold">{watch.title}</p>
                        <span
                          className="ml-32 text-lg cursor-pointer"
                          onClick={() => handleRemoveVideo(watch.id)}>
                          X
                        </span>
                        <span className="text-lg ml-4 mt-1">
                          <BsThreeDotsVertical />
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <span>{watch.channel.name}</span>
                        <span>•</span>
                        <span>{watch.views.toLocaleString()} views</span>
                        <span>•</span>
                        <span>
                          {formatDistanceToNow(new Date(watch.postedAt))} ago
                        </span>
                      </div>
                      <p className="text-gray-400 mt-2 line-clamp-2">
                        {watch.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
          <div className="">
            <h3 className="text-lg mt-10 font-bold ">Older</h3>
            {videoData
              .filter(
                (video) =>
                  !["Today", "Yesterday", "Day Before Day"].includes(
                    getDayLabel(video.postedAt)
                  )
              )
              .map((watch) => (
                <div
                  key={watch.id}
                  className="flex items-center text-white  mt-5 space-x-4">
                  <div className="relative">
                    <video
                      src={watch.videoUrl}
                      className="w-48 h-40"
                      muted
                      loop
                      playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => e.currentTarget.pause()}
                      poster={watch.thumbnailUrl}
                    />
                  </div>
                  <div>
                  <div className="flex">
                        <p className="text-xl font-bold">{watch.title}</p>
                        <span
                          className="ml-32 text-lg cursor-pointer"
                          onClick={() => handleRemoveVideo(watch.id)}
                        >X</span>
                        <span className="text-lg ml-4 mt-1">
                          <BsThreeDotsVertical />
                        </span>
                      </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <span>{watch.channel.name}</span>
                      <span>•</span>
                      <span>{watch.views.toLocaleString()} views</span>
                      <span>•</span>
                      <span>
                        {formatDistanceToNow(new Date(watch.postedAt))} ago
                      </span>
                    </div>
                    <p className="text-gray-400 mt-2  line-clamp-1">
                      {watch.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* //rightsidecontent */}
        <div className="text-white mt-52 xl:mr-20 lg:mr-20 sticky top-0 lg:w-72 xl:w-80 sm:absolute sm:overflow-y-auto sm:top-[-100px] sm:ml-56 lg:sticky xl:sticky">
          <div className="flex">
            <span className="mt-1">
              <BiSearch />
            </span>
            <span>
              <input
                type="search"
                className="bg-[#0f0f0f] underline underline-offset-2"
                placeholder="Search watch history"
              />
            </span>
          </div>
          <div className="mt-1">
            <span className="flex mt-2">
              <div className="mt-1 cursor-pointer">
                <MdDelete />
              </div>
              <span> Clear all watch history</span>
            </span>
            <span className="flex mt-2 cursor-pointer">
              <div className="mt-1">
                <BiPause />
              </div>
              <span> Pause watch history</span>
            </span>
            <span className="flex mt-2 cursor-pointer">
              <div className="mt-1">
                <MdSettings />
              </div>
              <span> Manage all history</span>
            </span>
          </div>
          <div className="mt-5 ml-5 cursor-pointer">
            <ul className="mt-2">Comments</ul>
            <ul className="mt-2">Posts</ul>
            <ul className="mt-2">Live chat</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchHistory;
