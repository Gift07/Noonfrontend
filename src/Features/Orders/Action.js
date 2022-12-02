import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetProduct = createAsyncThunk(
  "Order/GetProduct",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("/products/random");

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const GrabOrder = createAsyncThunk(
  "Order/Grab",
  async ({ axiosPrivate, commision }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.patch("/order/grab-order", {
        commision,
      });

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
