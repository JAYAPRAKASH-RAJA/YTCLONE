import { useState } from "preact/hooks";
import { Link } from "preact-router"; // Import Link for navigation
import Navbar from "../Components/Navbar";
import usericon from "../assets/usericon.png";

// Define types for videos, shorts, and playlists
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
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

interface Playlist {
  id: number;
  name: string;
  videoCount: number;
  thumbnail: string;
}

const UserAccount = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Home");
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null); // State for hover video
  const [playingVideo, setPlayingVideo] = useState<string | null>(null); // State for playing video URL

  //   Dummy video data for the "Home" and "Videos" tabs
  const videoData: Video[] = [
    {
      id: 1,
      title: "NEW Way To Create Variables In JavaScript",
      channel: {
        name: "Marvel studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 257136,
      postedAt: new Date("2023-08-22"),
      duration: 732,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
    {
      id: 2,
      title: "I Cannot Believe React Made A Hook For This",
      channel: {
        name: "Marval studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 42345,
      postedAt: new Date("2023-03-02"),
      duration: 1000,
      thumbnailUrl: "https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  {
    id: 3,
    title: "Zig in 100 Seconds",
    channel: {
      name: "Marval studios",
      id: "web",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 20323340,
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  ];

  // Example data for Shorts
  const shortsData: Video[] = [
    {
      id: 1,
      title: "Quick Tips for JavaScript Developers",
      channel: {
        name: "Code with Chris",
        id: "CodeWithChris",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 150000,
      postedAt: new Date("2024-09-01"),
      duration: 60, // duration in seconds
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },

    {
      id: 2,
      title: "Tails OS in 100 Seconds",
      channel: {
        name: "Fireship",
        id: "Fireship",
        profileUrl:
          "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
      },
      views: 10323340,
      postedAt: new Date("2023-08-09"),
      duration: 100,
      thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    },
  {
    id: 3,
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl:
        "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 20323340,
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  ];

  // Example data for Playlists
  const playlistsData: Playlist[] = [
    {
      id: 1,
      name: "Marvel Official Trailers",
      videoCount: 25,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Marvel Interviews",
      videoCount: 15,
      thumbnail: "https://via.placeholder.com/150",
    },
  ];

  // Function to render content based on selected tab
  const renderContent = () => {
    const renderVideos = (videos: Video[]) => (
      <div className=" ml-[-160px] grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  gap-4 md:ml-[-100px] ">
        {videos.map((video) => (
          <div
            key={video.id}
            className="p-4 rounded-lg cursor-pointer relative"
            onMouseEnter={() => setHoveredVideo(video.id)} // Start video on hover
            onMouseLeave={() => setHoveredVideo(null)} // Stop video on hover out
          >
            <Link href={`/watch/${video.id}`}>
              {hoveredVideo === video.id ? (
                <video
                  src={video.videoUrl}
                  autoPlay
                  muted
                  loop
                  className="w-full h-48 object-cover"
                />
              ) : (
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <h3 className="mt-2 text-xl font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-400">{video.channel.name}</p>
              <p className="text-sm text-gray-400">
                {video.views} views • {video.postedAt.toDateString()}
              </p>
            </Link>
          </div>
        ))}
      </div>
    );

    switch (selectedTab) {
      case "Home":
      case "Videos":
        return renderVideos(videoData);
      case "Shorts":
        return renderVideos(shortsData);
      case "Playlists":
        return (
          <div className="ml-[-160px] grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 md:ml-[-100px]">
            {playlistsData.map((playlist) => (
              <div key={playlist.id} className="p-4 rounded-lg">
                <img
                  src={playlist.thumbnail}
                  alt={playlist.name}
                  className="w-full h-48 object-cover"
                />
                <h3 className="mt-2 text-xl font-semibold">{playlist.name}</h3>
                <p className="text-sm text-gray-400">
                  {playlist.videoCount} videos
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex mt-20">
        <div className="flex text-white">
          <img
            src={usericon}
            alt="User Icon"
            className="w-32 h-32 flex ml-12"
          />
          <div className="flex flex-col">
            <div className="flex flex-col ml-20">
              <h1 className="ml-[-25px] text-3xl text-white font-bold md:text-4xl">
                <b>Marvel Entertainment✔️</b>
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row ml-[-25px] gap-2 md:gap-4 mt-2">
                  <span className="flex">@marvel</span>
                  <div className="flex flex-col md:flex-row gap-2">
                    <span className="flex">20.9M subscribers</span>
                    <span className="flex">9.1k videos</span>
                  </div>
                </div>
                <p className="line-clamp-2 lg:line-clamp-1 xl:line-clamp-1 ml-[-200px] mt-6 md:line-clamp-1 md:ml-[-25px] md:mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt quis alias soluta laudantium. Quibusdam quaerat
                  recusandae esse mollitia quia quo blanditiis sed nobis qui,
                  assumenda incidunt est ut nihil odio?
                </p>
              </div>
              <button className=" ml-[-220px] mr-10 text-black bg-[#f2f3f4d1] p-2 rounded-full md:w-40 cursor-pointer mt-6 md:ml-[-25px] ">
                Subscribe
              </button>
            </div>
            <div className=" ml-[-160px] gap-20 flex flex-row md:gap-28 mt-10 text-white md:ml-[-100px]">
              {/* Menu buttons */}

              <ul
                onClick={() => setSelectedTab("Home")}
                className="cursor-pointer text-white"
              >
                Home
              </ul>
              <ul
                onClick={() => setSelectedTab("Videos")}
                className="cursor-pointer"
              >
                Videos
              </ul>
              <ul
                onClick={() => setSelectedTab("Shorts")}
                className="cursor-pointer"
              >
                Shorts
              </ul>
              <ul
                onClick={() => setSelectedTab("Playlists")}
                className="cursor-pointer"
              >
                Playlists
              </ul>
            </div>
            <hr className="ml-[-160px] mt-4 md:ml-[-100px]" />
            {/* Conditional content based on selected tab */}
            <div className="mt-8">{renderContent()}</div>

            {/* Video player */}
            {playingVideo && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 ">
                <div className="relative w-full max-w-2xl ">
                  <video
                    src={playingVideo}
                    controls
                    className="w-full h-auto"
                    autoPlay
                  />
                  <button
                    className="absolute top-2 right-2 text-white text-xl"
                    onClick={() => setPlayingVideo(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
