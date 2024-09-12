import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const fetchLikedVideos = createAsyncThunk(
  'liked/fetchLikedVideos',
  async (token: string) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet,contentDetails',
        myRating: 'like',
        access_token: token,
        key: API_KEY,
      },
    });
    return response.data.items;
  }
);

const likedSlice = createSlice({
  name: 'liked',
  initialState: {
    likedVideos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLikedVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLikedVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.likedVideos = action.payload;
      })
      .addCase(fetchLikedVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default likedSlice.reducer;
