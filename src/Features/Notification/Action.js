import { createAsyncThunk } from "@reduxjs/toolkit";

export const SendNotificaton = createAsyncThunk(
  "Notification/Send",
  async ({ axiosPrivate, item }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/notifications/create", item);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetNotification = createAsyncThunk(
  "/notifications/all",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("/notifications/all");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
