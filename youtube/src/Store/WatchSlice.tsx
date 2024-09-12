import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const fetchWatchedVideos = createAsyncThunk(
  'youtube/fetchWatchedVideos',
  async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&myRating=like&key=${API_KEY}`
    );
    console.log('API Response:', response.data.items); // Log API response
    return response.data.items;
  }
);

const watchSlice = createSlice({
  name: 'watch',
  initialState: {
    videos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchedVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWatchedVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
        console.log('State Updated:', state.videos); // Log state update
      })
      .addCase(fetchWatchedVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default watchSlice.reducer;
