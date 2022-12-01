import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const GetLevels = createAsyncThunk(
  "Level/Get",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.get("/level/all");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
