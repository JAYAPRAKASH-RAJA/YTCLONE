import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './Index';

interface SportsVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
}

export interface SportsState {
  sportsVideos: SportsVideo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: SportsState = {
  sportsVideos: [],
  status: 'idle',
  error: null,
};

interface YouTubeThumbnail {
    url: string;
  }
  
  interface YouTubeSnippet {
    title: string;
    thumbnails: {
      high: YouTubeThumbnail;
      default: YouTubeThumbnail;
    };
    channelTitle: string;
  }
  
  interface YouTubeVideoItem {
    id: {
      videoId: string;
    };
    snippet: YouTubeSnippet;
  }
  
  interface YouTubeResponse {
    items: YouTubeVideoItem[];
  }



const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const fetchVideos = createAsyncThunk<SportsVideo[]>('sports/fetchVideos', async () => {
  const response = await axios.get<YouTubeResponse>(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&order=date&q=sports&maxResults=100`
  );

//   const items=response.data.items as YouTubeVideoItem[];
  return response.data.items.map((item) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channelImage: item.snippet.thumbnails.default.url,
    channelName: item.snippet.channelTitle,
  }));
});

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sportsVideos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch sports videos';
      });
  },
});

export const selectAllSportsVideos = (state: RootState) => state.sports.sportsVideos;

export default sportsSlice.reducer;
