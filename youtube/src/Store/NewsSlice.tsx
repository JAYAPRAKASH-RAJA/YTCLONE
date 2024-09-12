import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface NewsState {
  news: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsState = {
  news: [],
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

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get<YouTubeResponse>(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&order=date&q=India+news+Tamil+English&maxResults=100`
  );
  return response.data.items;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
