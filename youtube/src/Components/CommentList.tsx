import { useEffect, useState } from "preact/hooks";

interface Comment {
  commentId: string;
  text: string;
  author: string;
}

interface CommentSectionProps {
  id: string;
  onVideoClick: (id: string) => void;
}

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

const CommentList: React.FC<CommentSectionProps> = ({id,onVideoClick}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [videoIds, setVideoIds] = useState<string[]>(["videoId1","videoId2","videoId3",]);
  const [text, setText] = useState("");

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    console.log("Selected video ID:", videoId);
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data); 
        if (data.items) {
          const formattedComments = data.items.map((item: any) => ({
            commentId: item.id,
            text: item.snippet.topLevelComment.snippet.textDisplay,
            author: item.snippet.topLevelComment.snippet.authorDisplayName,
          }));
          setComments(formattedComments);
        } else {
          console.error("No items found in the response");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
  
    fetchComments();
  }, [id]);

  

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment = {
      commentId: `temp-${Date.now()}`, // Temporary ID
      text,
      author: "You", // Assuming the author is the current user
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setText("");

    fetch(`/api/comments/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((savedComment) => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.commentId === newComment.commentId ? savedComment : comment
          )
        );
      });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleComment} className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Comment"
          className="bg-[#212121] w-full border-b-2 border-gray-500 focus:outline-none focus:border-gray-600"
        />
        <div className="flex justify-end gap-2 mt-2">
          <button type="button" className="bg-gray-500 rounded-xl text-white p-2">
            Cancel
          </button>
          <button type="submit" className="bg-gray-500 rounded-xl text-white p-2">
            Comment
          </button>
        </div>
      </form>
      {comments.map((comment) => (
        <div key={comment.commentId} className=" border-b-2 border-gray-500 text-white p-2 mb-2 flex items-start">
          <img
            src="https://via.placeholder.com/40"
            alt="User Icon" 
            className="mr-2 rounded-full"
          />
          <div>
            <p className="flex mt-3">
              <span>{comment.author}</span>: {comment.text}
            </p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
