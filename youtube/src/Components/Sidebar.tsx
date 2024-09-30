import { ComponentType } from "preact";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { BiBulb, BiNews } from "react-icons/bi";
import { route } from "preact-router";
import FeedbackForm from "../Pages/FeedbackForm";
import { useState } from "preact/hooks";

type IconProps = JSX.IntrinsicElements["svg"];

const IconWithClassName = (
  Icon: ComponentType<IconProps>,
  className: string
) => {
  return <Icon className={className} />;
};

export const Sidebar = ({isSidebarOpen,toggleSidebar}: {isSidebarOpen: boolean; toggleSidebar:boolean, setShowFeedback: (value: boolean) => void;}) => {

const [isfeedback,setIsFeedback]=useState<boolean>(false);


const handleFeedbackClick = () => {
  setIsFeedback(true);
  console.log("Feedback button clicked"); // Log a simple message
};
   


  const mainLinks = [
    {
      icon: IconWithClassName(MdHomeFilled, "text-xl"),
      onClick: () => route("/"),
      name: "Home",
    },
    {
      icon: IconWithClassName(MdOutlineSlowMotionVideo, "text-xl"),
      onClick: () => route("/shorts"),
      name: "Shorts",
    },
    {
      icon: IconWithClassName(MdOutlineVideoLibrary, "text-xl"),
      onClick: () => route("/trending"),
      name: "Trending",
    },
  ];

  const secondaryLinks = [
    {
      icon: IconWithClassName(MdSubscriptions, "text-xl"),
      onClick: () => route("/subscription"),
      name: "Subscriptions",
    },
    {
      icon: IconWithClassName(MdHistory, "text-xl"),
      onClick: () => route("/watch"),
      name: "History",
    },
    {
      icon: IconWithClassName(MdOutlineSmartDisplay, "text-xl"),
      onClick: () => route("/studio"),
      name: "Your Videos",
    },
    {
      icon: IconWithClassName(MdOutlineWatchLater, "text-xl"),
      onClick: () => route("/watchlater"),
      name: "Watch Later",
    },
    {
      icon: IconWithClassName(MdThumbUpOffAlt, "text-xl"),
      onClick: () => route("/like"),
      name: "Liked Videos",
    },
  ];
  const subscriptionLinks = [
    {
      icon: IconWithClassName(TbMusic, "text-xl"),
      onClick: () => route("/music"),
      name: "Music",
    },
    {
      icon: IconWithClassName(BiNews, "text-xl"),
      onClick: () => route("/news"),
      name: "News",
    },
    {
      icon: IconWithClassName(MdOutlineSportsVolleyball, "text-xl"),
      onClick: () => route("/sports"),
      name: "Sport",
    },
    {
      icon: IconWithClassName(TbDeviceGamepad2, "text-xl"),
      onClick: () => route("/game"),
      name: "Gaming",
    },
    {
      icon: IconWithClassName(BiBulb, "text-xl"),
      onClick: () => route("/course"),
      name: "Course",
    },
  ];

  const helpLinks = [
    {
      icon: IconWithClassName(MdSettings, "text-xl"),
      onClick: () => route("/settings"),
      name: "Settings",
    },
    {
      icon: IconWithClassName(MdOutlinedFlag, "text-xl"),
      onClick: () => route("/reporthistory"),
      name: "Report history",
    },
    // {
    //   icon: IconWithClassName(MdOutlineHelpOutline, "text-xl"),
    //   onClick: () => route("/help"),
    //   name: "Help",
    // },
    {
      icon: IconWithClassName(MdOutlineFeedback, "text-xl"),
      onClick: handleFeedbackClick,
      name: "Send feedback",
    },
  ];

  const textLinks = [
    [
      "About",
      "Press",
      "Copyright",
      "Contact us",
      "Creator",
      "Advertise",
      "Developers",
    ],
    [
      "Terms",
      "Privacy",
      "Policy & Safety",
      "How YouTube works",
      "Test new features",
    ],
  ];

  return (
    <>
    <FeedbackForm isfeedback={isfeedback} setIsFeedback={setIsFeedback} />
      {isSidebarOpen && (
        <div
          className={`left-0 h-full top-14 w-60  bg-[#0F0F0F] text-white  pr-5 overflow-y-auto pb-8 fixed z-10  xl:block 2xl:block `}
        >
          <ul className=" flex flex-col border-b-2 border-gray-700">
            {mainLinks.map(({ icon, name, onClick }) => (
              <li
                onClick={onClick}
                key={name}
                className={`pl-6 py-3   hover:bg-zinc-600
                  
                `}
              >
                <a href="" className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col border-b-2 border-gray-700">
            {secondaryLinks.map(({ icon, name, onClick }) => (
              <li
                onClick={onClick}
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600`}
              >
                <a href="" className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col border-b-2 border-gray-700">
            {subscriptionLinks.map(({ icon, name, onClick }) => (
              <li
                onClick={onClick}
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600`}
              >
                <a href="" className="flex items-center gap-5">
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col border-b-2 border-gray-700">
            {helpLinks.map(({ icon, name, onClick }) => (
              <li
                onClick={onClick}
                key={name}
                className={`pl-6 py-3 hover:bg-zinc-600 cursor-pointer`} 
              >
                <div className="flex items-center gap-5">
                  {" "}
                  {icon}
                  <span className="text-sm tracking-wider">{name}</span>
                </div>
              </li>
            ))}
          </ul>

          <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
            {textLinks[0].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
            {textLinks[1].map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <span className="p-4 text-sm text-zinc-400">& 2024 Google LLC</span>
        </div>
      )}
    </>
  );
};
