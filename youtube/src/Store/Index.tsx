import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../Type";
import getHomePageVideos from "./Reducers/getHomePageVideos";
import getSearchPageVideos from "./Reducers/getSearchPageVideos";
import { getVideoDetails } from "./Reducers/getVideoDetails";
import { getRecommendedVideos } from "./Reducers/getRecommendedVideos";
import shortsReducer from './ShortsSlice';
import videosReducer from './Trend';
import newsReducer from "./NewsSlice";
import musicReducer from './MusicSlice';
import sportsReducer from './SportsSlice';
import gameReducer from './GameSlice';
import courseReducer from './CourseSlice';
import authReducer from './AuthSlice'
import watchReducer from './WatchSlice'
import subscriptionReducer from './SubscriptionsList'
import likedReducer from './LikedSlice'
// import { EnhancedStore } from '@reduxjs/toolkit';

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};



const YoutubeSlice = createSlice({
  name: "YoutubeApp",
  initialState,
  reducers: {
    clearVideos: (state) => {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearSearchTerm: (state) => {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      state.videos = action.payload.parsedData;
      state.nextPageToken = action.payload.nextPageToken;
    });
    builder.addCase(getVideoDetails.fulfilled, (state, action) => {
      state.currentPlaying = action.payload;
    });
    builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
      state.recommendedVideos = action.payload.parsedData;
    });
  },
});

export const store= configureStore({
  reducer: {
    youtubeApp: YoutubeSlice.reducer,
    shorts: shortsReducer,
    videos: videosReducer,
    news: newsReducer,
    music: musicReducer,
    sports: sportsReducer,
    gaming: gameReducer,
    courses: courseReducer,
    auth: authReducer,
    watch:watchReducer,
    liked:likedReducer,
    subscription:subscriptionReducer,
  },
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } = YoutubeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
