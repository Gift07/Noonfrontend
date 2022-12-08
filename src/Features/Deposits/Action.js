import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetDeposits = createAsyncThunk(
  "Deposits/Get",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("/deposits/all");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const GetDeposit = createAsyncThunk(
  "Deposit/GetId",
  async ({ axiosPrivate, id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get(`/deposits/${id}`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const CancelDepost = createAsyncThunk(
  "Deposit/Cancel",
  async ({ axiosPrivate, formdata }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.patch("/deposit/cancel", formdata);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const DeleteDeposit = createAsyncThunk(
  "Deposit/Delete",
  async ({ axiosPrivate, id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.delete(`deposits/remove-item/${id}`);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
