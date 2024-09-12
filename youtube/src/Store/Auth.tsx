import { createReducer } from '@reduxjs/toolkit';
import { setLikedVideos } from '../Store/Actions/Auth';

interface AuthState {
  likedVideos: any[];
}

const initialState: AuthState = {
  likedVideos: [],
};

const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(setLikedVideos, (state, action) => {
    state.likedVideos = action.payload;
  });
});

export default authReducer;
