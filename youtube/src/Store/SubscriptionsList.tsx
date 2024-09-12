// src/features/youtube/youtubeSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const fetchSubscriptionVideos = createAsyncThunk(
  'youtube/fetchSubscriptionVideos',
  async () => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=${API_KEY}`
    );
    return response.data.items;
  }
);

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    subscriptionVideos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubscriptionVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subscriptionVideos = action.payload;
      })
      .addCase(fetchSubscriptionVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subscriptionSlice.reducer;
