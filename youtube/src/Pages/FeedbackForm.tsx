import { route } from "preact-router";
import { useState } from "preact/hooks";

const FeedbackForm = () => {
  const [store, setStore] = useState({
    comments: '',
  });

  // Function to handle form submission
  const handlestore = (e: any) => {
    e.preventDefault();

    if (store.comments.trim() === "") {
      alert("Please enter your feedback before sending.");
      return;
    }

    // You can perform any action you need here, like sending the feedback to a server.
    console.log("Feedback Submitted:", store.comments);

    // Optionally clear the comments after submission
    setStore({ comments: "" });

    // Navigate back to home after submission
    route("/");
  };

  // Function to handle input change in textarea
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setStore((prevStore) => ({
      ...prevStore,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen w-80 lg:w-96 xl:w-96 bg-black text-white">
      <div className="flex flex-col xl:w-96 p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl">Send feedback to YouTube</h1>
          <button className="text-xl" onClick={() => route('/')}>×</button>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg">Describe Your Feedback</h2>
          <textarea
            name="comments"
            value={store.comments} // Bind the textarea value to the state
            onChange={handleInputChange} // Handle input changes
            className="border border-gray-300 bg-black p-2 w-full rounded text-white"
            placeholder="Tell us what prompted this feedback..."
            rows={5}
          />
          <p>Please don’t include any sensitive information.</p>
          <div className="text-sm">
            <p>
              Some <span className="text-blue-400">account and system information</span> may be sent to Google. We will use it to fix problems and improve our services, subject to our <span className="text-blue-400">Privacy Policy</span> and <span className="text-blue-400">Terms of Service.</span> We may email you for more information or updates. Go to <span className="text-blue-400">Legal Help</span> to ask for content changes for legal reasons.
            </p>
          </div>
          <div className="flex justify-end">
            <button onClick={handlestore} className="bg-slate-600 p-2 w-24 rounded-xl">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
