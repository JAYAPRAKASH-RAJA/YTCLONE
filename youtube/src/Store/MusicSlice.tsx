import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './Index';

interface MusicVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelImage: string;
  channelName: string;
}

export interface MusicState {
  musicVideos: MusicVideo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MusicState = {
  musicVideos: [],
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

export const fetchMusicVideos = createAsyncThunk('music/fetchMusicVideos', async () => {
  const response = await axios.get<YouTubeResponse>(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&order=date&q=music&maxResults=100`
  );
  return response.data.items.map((item: any) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.high.url,
    channelImage: item.snippet.thumbnails.default.url,
    channelName: item.snippet.channelTitle,
  }));
});

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusicVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMusicVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.musicVideos = action.payload;
      })
      .addCase(fetchMusicVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch music videos';
      });
  },
});

export const selectAllMusicVideos = (state: RootState) => state.music.musicVideos;

export default musicSlice.reducer;
