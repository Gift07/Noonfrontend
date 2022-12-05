import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateWithdraw = createAsyncThunk(
  "withdraw/create",
  async ({ axiosPrivate, formdata }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate("withdraw/create", formdata);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const FetchWithdraws = createAsyncThunk(
  "withdraw/GetAll",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("withdraw/all");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const FetchWithdraw = createAsyncThunk(
  "withdraw/GetId-",
  async ({ axiosPrivate, id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get(`withdraw/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const DeleteWithdraw = createAsyncThunk(
  "withdraw/DeleteAll",
  async ({ axiosPrivate, id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get(`withdraw/delete/${id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
