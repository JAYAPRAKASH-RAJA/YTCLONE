import { Link } from "preact-router";
import { HomePageVideos } from "../Type";

export default function Card({ data }: { data: HomePageVideos }) {
  return (
    <div className={` flex flex-col bg-[#0F0F0F] text-white  `}>
      <div className="relative ">
        <span className="absolute  bottom-1 right-1 text-sm  px-2 py-0.5 z-10 ">
          {data.videoDuration}
        </span>
        <Link href={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="  md:flex w-full lg:h-50    truncate "
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-fit">
          <a href="#">
            <img
              src={data.channelInfo.image}
              className="h-9 w-9 rounded-full"
              alt="channel"
            />
          </a>
        </div>
        <div className="flex-1">
          <h3>
            <a href="#" className=" line-clamp-1">
              {data.videoTitle}
            </a>
          </h3>
          <div className="text-sm text-gray-400">
            <div>
              <a href="#" className="hover:text-white">
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
