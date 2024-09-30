import { MdSettings } from 'react-icons/md';

// Sample interfaces
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

interface NotificationpopupProps {
  isOpened: boolean;
  setIsOpened: (state: boolean) => void;
}

// Helper function to format date as "X days ago" or "X hours ago"
const timeAgo = (date: Date) => {
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    const hours = Math.floor(difference / (1000 * 60 * 60));
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
};

const Notificationpopup = ({ isOpened, setIsOpened }: NotificationpopupProps) => {
  const videoData: Video[] = [
    {
      id: 1,
      title: "NEW Way To Create Variables In JavaScript",
      channel: {
        name: "Marvel Studios",
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
      title: "NEW Way To Create Variables In JavaScript",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 257136,
      postedAt: new Date("2023-08-20"),
      duration: 732,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    }
    ,
    {
      id: 3,
      title: "NEW Way To Create Variables In JavaScript",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 257136,
      postedAt: new Date("2023-08-20"),
      duration: 732,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    }
    ,
    {
      id: 4,
      title: "NEW Way To Create Variables In JavaScript",
      channel: {
        name: "Marvel Studios",
        id: "Web",
        profileUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      },
      views: 257136,
      postedAt: new Date("2023-08-20"),
      duration: 732,
      thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    }
    ,
    
    
    
  ];

  return (
    <div className="relative">
      {isOpened && (
        <div className="absolute right-0 mt-8 w-96 bg-[#282828] rounded-lg shadow-lg p-4 z-50">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-white font-semibold">Notifications</h2>
            <button className="text-gray-400 hover:text-white">
              <MdSettings size={24} />
            </button>
          </div>

          <hr className="border-gray-600" />

          {/* Scrollable Notifications List */}
          <div className="space-y-4 mt-4 max-h-64 overflow-y-auto">
            {videoData.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-4">
                {/* Channel Profile Image */}
                <img
                  src={notification.channel.profileUrl}
                  alt={notification.channel.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                {/* Notification Content */}
                <div className="flex-1">
                  <h3 className="text-white font-medium">
                    {notification.channel.name}:
                  </h3>
                  <p className="text-gray-400 text-sm">{notification.title}</p>
                  <p className="text-gray-500 text-xs">{timeAgo(notification.postedAt)}</p>
                </div>

                {/* Thumbnail Image */}
                <img
                  src={notification.thumbnailUrl}
                  alt={notification.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notificationpopup;
