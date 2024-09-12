import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface VideoState {
  videos: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  status: 'idle',
  error: null,
};

const APIKEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const fetchTrendingVideos = createAsyncThunk(
  'videos/fetchTrendingVideos',
  async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${APIKEY}`
    );
    const data = await response.json();
    return data.items;
  }
);

const Slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchTrendingVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default Slice.reducer;
