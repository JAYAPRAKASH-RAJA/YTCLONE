import { Link } from "preact-router";
import { HomePageVideos } from "../Type";

export default function SearchCard({ data }: { data: HomePageVideos }) {
  return (
<div className="flex flex-col lg:flex-row 2xl:flex-row gap-3 p-2 rounded-lg shadow-sm   bg-[#0F0F0F] text-white">
  <div className="relative w-full  lg:w-1/3 2xl:w-1/3">
    <span className="absolute bottom-3 right-3 text-sm   px-2 py-0.5 rounded z-10">
      {data.videoDuration}
    </span>
    <Link href={`/watch/${data.videoId}`}>
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <img
          src={data.videoThumbnail}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
          alt="thumbnail"
        />
      </div>
    </Link>
  </div>
  <div className="flex flex-col gap-2 w-full lg:w-2/3 2xl:w-2/3">
    <h3 className="text-md font-semibold truncate md:text-lg lg:text-lg 2xl:text-lg">
      <a href="#" className="line-clamp-2">
        {data.videoTitle}
      </a>
    </h3>
    <div className="text-sm text-gray-400 flex flex-row gap-1 items-center">
      <span className="after:content-['•'] after:mx-1">
        {data.videoViews} views
      </span>
      <span>{data.videoAge}</span>
    </div>
    <div className="flex items-center gap-2 text-md text-gray-400 my-2">
      <a href="#" className="flex items-center gap-2">
        <img
          src={data.channelInfo.image}
          alt="channel"
          className="h-8 w-8 md:h-9 md:w-9 rounded-full"
        />
        <span>{data.channelInfo.name}</span>
      </a>
    </div>
    <div className="text-sm text-gray-400 line-clamp-2">
      <p>{data.videoDescription}</p>
    </div>
  </div>
</div>
  )};
