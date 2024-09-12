import { useState } from 'preact/hooks';
import { FunctionalComponent, JSX } from 'preact';
import axios from 'axios';
import Auth from './Auth';

interface UploadVideoProps {
  setShowUpload: (show: boolean) => void;
}

const UploadVideo: FunctionalComponent<UploadVideoProps> = ({ setShowUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [alert, setAlert] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const target = event.currentTarget;
    if (target.files) {
      setFile(target.files[0]);
    }
  };

  const handleUpload = async (event: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    event.preventDefault(); // Prevent form submission

    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);
    formData.append('name', name);
    formData.append('description', description);

    try {
      const response = await axios.post('http://localhost:8010/api/videos/upload', formData, {
        // Remove the Content-Type header
        timeout: 800000, // 10 minutes timeout
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            console.log(`${percentCompleted}% complete`);
            setProgress(percentCompleted);
            setAlert('video updated') // Update the progress state
          }
        },
      }
    );
      console.log('Upload successful:', response.data);
      setAlert('Video uploaded successfully!');
      setShowUpload(false);
    } catch (error) {
      console.error('Upload failed:', error);
      setAlert('Failed to upload video.');
    }
  };
  return (
    <> 
      <Auth/>
      <div className='fixed inset-0 z-50 bg-[#212121] bg-opacity-60 grid'>
        <form onSubmit={handleUpload} className='place-self-center w-[max(23vw,330px)] bg-cyan-50 p-6 rounded-lg flex flex-col gap-6 text-gray-500 text-sm animate-fadeIn'>
          <div className="flex justify-between items-center text-black">
            <h2 className='font-medium ml-28'>Upload Video</h2>
            <img 
              onClick={() => setShowUpload(false)} 
              src="https://img.icons8.com/?size=100&id=45&format=png&color=000000" 
              className="w-4 cursor-pointer" 
              alt="Close"
            />
          </div>
          <div className="flex flex-col gap-5">
            <input
              name='name'
              onChange={(e) => setName((e.target as HTMLInputElement).value)}
              value={name}
              type="text"
              placeholder='Video Name'
              required
              className='outline-none border border-gray-300 p-2 rounded-md'
            />
            <textarea
              name='description'
              onChange={(e) => setDescription((e.target as HTMLTextAreaElement).value)}
              value={description}
              placeholder='Description'
              required
              className='outline-none border border-gray-300 p-2 rounded-md'
            />
            <input
              name='file'
              type="file"
              onChange={handleFileChange}
              required
              className='outline-none border border-gray-300 p-2 rounded-md'
            />
          </div>
          <button className='bg-slate-300 w-full rounded' type='submit'>Submit</button>
        </form> 
       
      </div>
    </>
  );
};

export default UploadVideo;

