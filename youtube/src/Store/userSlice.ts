import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: {
    _id: string;
    subscribedUsers: string[];
    // Add other user properties here
  } | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  currentUser:null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<UserState["currentUser"]>) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    // subscription: (state, action: PayloadAction<string>) => {
    //   if (state.currentUser) {
    //     if (state.currentUser.subscribedUsers.includes(action.payload)) {
    //       state.currentUser.subscribedUsers.splice(
    //         state.currentUser.subscribedUsers.findIndex(
    //           (channelId) => channelId === action.payload
    //         ),
    //         1
    //       );
    //     } else {
    //       state.currentUser.subscribedUsers.push(action.payload);
    //     }
    //   }
    // },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
