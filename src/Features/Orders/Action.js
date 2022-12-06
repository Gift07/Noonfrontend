import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProduct = createAsyncThunk(
  "Order/GetProduct",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("/products/random");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GrabOrderAction = createAsyncThunk(
  "Order/Grab",
  async ({ axiosPrivate, commision }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.patch("/orders/grab-order", {
        commision,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
