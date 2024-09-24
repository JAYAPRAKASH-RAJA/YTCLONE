import { FaFilter, FaGlobeAmericas, FaLock } from "react-icons/fa";
import { useState } from "preact/hooks";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("Videos");

  const tabs = [
    "Videos",
    "Shorts",
    "Live",
    "Posts",
    "Playlists",
    "Podcasts",
    "Promotions",
  ];

  return (
    <>
      <div className="text-white p-6 mt-10">
        <div>
          <h1 className="text-2xl font-bold mb-4">Channel content</h1>
          <div className="mb-4">
            <div className="mb-4">
              <div className="flex space-x-12 text-sm">
                {tabs.map((tab) => (
                  <ul
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`cursor-pointer ${
                      selectedTab === tab
                        ? "underline underline-offset-8 text-gray-50"
                        : ""
                    }`}
                  >
                    {tab}
                  </ul>
                ))}
              </div>
            </div>
            <hr className="my-4 border-gray-700" />
            <div className="flex items-center space-x-2">
              <FaFilter />
              <h3 className="text-lg font-semibold">Filter</h3>
            </div>
          </div>
          <hr className="my-4 border-gray-700" />

         {/* <div className='md:overflow-x-scroll'> */}
          <div className="grid grid-cols-7 gap-20 mb-4 text-sm">
            <span>Video</span>
            <span>Visibility</span>
            <span>Restrictions</span>
            <span>Date</span>
            <span>Views</span>
            <span>Comments</span>
            <span>Likes (vs. dislikes)</span>
          </div>
          <hr className="my-4 border-gray-700" />

          
          <div className="max-h-96 overflow-y-scroll">
            <div className="flex flex-col space-y-4 text-xs">
             
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 1</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaGlobeAmericas /> Public
                </span>
                <span>Copyright</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>2k views</span>
                <span>2 comments</span>
                <span>100% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />

              
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaLock /> Private
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/M3mGY0pgFk0/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaLock /> Private
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaLock /> Private
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaGlobeAmericas /> Public
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaGlobeAmericas /> Public
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaGlobeAmericas /> Public
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
              <div className="grid grid-cols-7 gap-20 items-center">
                <div className="flex gap-2 ">
                  <input type="checkbox" />
                  <img
                    src="https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg"
                    alt="Video Thumbnail"
                    className="w-20 h-12"
                  />
                  <span className='text-white'>Video Title 2</span>
                </div>
                <span className="flex items-center gap-2">
                  <FaGlobeAmericas /> Public
                </span>
                <span>None</span>
                <div>
                  <span>Aug 21, 2024</span>
                  <h4>Published</h4>
                </div>
                <span>7k views</span>
                <span>4 comments</span>
                <span>80% likes</span>
              </div>
              <hr className="my-4 border-gray-700" />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Content;
