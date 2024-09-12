import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './Index';

interface GameVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
}

export interface GameState {
  gameVideos: GameVideo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: GameState = {
  gameVideos: [],
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

export const fetchGameVideos = createAsyncThunk<GameVideo[]>('gaming/fetchGameVideos', async () => {
  const response = await axios.get<YouTubeResponse>(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&order=date&q=gaming&maxResults=100`
  );
  return response.data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channelImage: item.snippet.thumbnails.default.url,
    channelName: item.snippet.channelTitle,
  }));
});

const gameSlice = createSlice({
  name: 'gaming',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGameVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.gameVideos = action.payload;
      })
      .addCase(fetchGameVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch gaming videos';
      });
  },
});

export const selectAllGameVideos = (state: RootState) => state.gaming.gameVideos;

export default gameSlice.reducer;
