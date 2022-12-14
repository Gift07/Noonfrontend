import { createSlice } from "@reduxjs/toolkit";
import { ChangePassword, SigninAction, SignupAction } from "./Action";

const initialState = {
  isAuthenticated: false,
  authLoading: false,
  authError: null,
  username: "",
  message: "",
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
        state.message = action.payload
      })
      .addCase(SignupAction.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload;
      })
      .addCase(ChangePassword.pending, (state) => {
        state.authLoading = true;
      })
      .addCase(ChangePassword.fulfilled, (state, action) => {
        state.authLoading = false;
        state.message = action.payload.message;
      })
      .addCase(ChangePassword.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.message;
      });
  },
});

export default authSlice.reducer;
