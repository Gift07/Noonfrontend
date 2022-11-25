import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAccount = createAsyncThunk(
  "Account/Get",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      console.log("Here");
      const { data } = await axiosPrivate.get("/account");
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
