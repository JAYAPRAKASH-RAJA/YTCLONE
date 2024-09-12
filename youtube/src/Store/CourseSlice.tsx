import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './Index';

interface CourseVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
}

export interface CourseState {
  courseVideos: CourseVideo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CourseState = {
  courseVideos: [],
  status: 'idle',
  error: null,
};
interface YouTubeThumbnail {
    url: string;
  }
  
  interface YouTubeSnippet {
    title: string;
    description: string; // Added description
    thumbnails: {
      high: YouTubeThumbnail;
      default: YouTubeThumbnail;
    };
    channelTitle: string;
    channelId: string; // Added channelId
  }
  
  interface YouTubeContentDetails {
    duration: string;
  }
  
  interface YouTubeVideoItem {
    id: {
      videoId: string;
    };
    snippet: YouTubeSnippet;
    contentDetails: YouTubeContentDetails;
  }
  
  interface YouTubeResponse {
    items: YouTubeVideoItem[];
  }

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const fetchCourseVideos = createAsyncThunk('courses/fetchCourseVideos', async () => {
  const response = await axios.get<YouTubeResponse>(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&order=date&q=courses&maxResults=100`
  );
  return response.data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channelImage: item.snippet.thumbnails.default.url,
    channelName: item.snippet.channelTitle,
  }));
});

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourseVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courseVideos = action.payload;
      })
      .addCase(fetchCourseVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch course videos';
      });
  },
});

export const selectAllCourseVideos = (state: RootState) => state.courses.courseVideos;

export default courseSlice.reducer;
