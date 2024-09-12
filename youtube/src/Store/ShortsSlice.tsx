import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HomePageVideos } from '../Type';

export interface ShortsState {
  videos: HomePageVideos[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ShortsState = {
  videos: [],
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

export const fetchShorts = createAsyncThunk('shorts/fetchShorts', async () => {
  const APIKEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;
  const response = await axios.get<YouTubeResponse>('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'snippet,contentDetails',
      chart: 'mostPopular',
      maxResults: 100,
      videoCategoryId: '0',
      key: APIKEY,
    },
  });

  if (response.status !== 200) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const items = response.data.items;

  return items.map((item) => ({
    videoId: item.id.videoId, // Corrected to videoId
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description, // Ensure this matches the type
    videoThumbnail: item.snippet.thumbnails.high.url,
    videoDuration: item.contentDetails.duration,
    videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`, // Corrected URL format
    videoViews: '1M views',
    videoAge: '1 day ago',
    channelInfo: {
      id: item.snippet.channelId,
      image: '', // Placeholder
      name: item.snippet.channelTitle,
    },
    videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`, // Ensure this matches the type
  }));
});

const shortsSlice = createSlice({
  name: 'shorts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShorts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchShorts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchShorts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch shorts';
      });
  },
});

export default shortsSlice.reducer;
