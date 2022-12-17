import { createAsyncThunk } from "@reduxjs/toolkit";

export const CreateWithdraw = createAsyncThunk(
  "withdraw/create",
  async ({ axiosPrivate, body }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("withdraw/create", body);

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
  "withdraw/GetId",
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
  "withdraw/Delete",
  async ({ axiosPrivate, id }, { rejectWithValue }) => {
    console.log(id);
    try {
      const { data } = await axiosPrivate.delete(
        `withdraw/delete-withdraw/${id}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetAccountInfo = createAsyncThunk(
  "Account/withdraw",
  async ({ axiosPrivate, body }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/account/withdraw-info");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
