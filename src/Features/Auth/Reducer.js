import { createSlice } from "@reduxjs/toolkit";
import { SigninAction, SignupAction } from "./Action";

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
      })
      .addCase(SignupAction.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(SignupAction.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(SignupAction.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload;
      });
  },
});

export default authSlice.reducer;
