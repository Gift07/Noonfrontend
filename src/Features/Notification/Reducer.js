import { createSlice } from "@reduxjs/toolkit";
import { GetNotification, SendNotificaton } from "./Action";

const initialState = {
  notificatinLoading: false,
  notifications: [],
  notificationsError: "",
  message: "",
};

const notificationSlice = createSlice({
  name: "Notifications",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(SendNotificaton.pending, (state) => {
        state.notificatinLoading = true;
      })
      .addCase(SendNotificaton.fulfilled, (state, action) => {
        state.notificatinLoading = false;
        state.message = action.payload;
      })
      .addCase(SendNotificaton.rejected, (state, action) => {
        state.notificatinLoading = false;
        state.notificationsError = action.error;
      })
      .addCase(GetNotification.pending, (state) => {
        state.notificatinLoading = true;
      })
      .addCase(GetNotification.fulfilled, (state, action) => {
        state.notificatinLoading = false;
        state.notifications = action.payload;
      })
      .addCase(GetNotification.rejected, (state, action) => {
        state.notificatinLoading = false;
        state.notificationsError = action.error;
      });
  },
});

export default notificationSlice.reducer;
