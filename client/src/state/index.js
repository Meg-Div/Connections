import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode === "light" ? (state.mode = "dark") : (state.mode = "light");
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
  },
});
