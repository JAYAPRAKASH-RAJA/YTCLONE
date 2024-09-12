import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction<{ id: string, name: string, imageUrl: string }>('SET_USER');
export const setLikedVideos = createAction<any[]>('SET_LIKED_VIDEOS');
