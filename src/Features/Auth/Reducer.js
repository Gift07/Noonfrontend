import { createSlice } from "@reduxjs/toolkit";
import { SigninAction } from "./Action";

const initialState = {
  isAuthenticated: false,
  authLoading: false,
  authError: null,
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SigninAction.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(SigninAction.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.authLoading = false;
        state.username = action.payload;
      })
      .addCase(SigninAction.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload;
      });
  },
});

export default authSlice.reducer;
