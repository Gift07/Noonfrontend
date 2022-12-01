import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAccount = createAsyncThunk(
  "Account/Get",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      console.log("Here");
      const { data } = await axiosPrivate.get("/account");

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const RechargeAccount = createAsyncThunk(
  "Account/Recharge",
  async ({ axiosPrivate, formdata }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/deposits/create", formdata);

      window.location.pathname("/");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const SetPendingFunds = createAsyncThunk(
  "Account/Set",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/account/set-pending");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const SetSuccessfull = createAsyncThunk(
  "Account/Successful",
  async ({ axiosPrivate, body }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.patch(
        "/account/set-successfull",
        body
      );

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
