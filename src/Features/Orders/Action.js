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
  async ({ axiosPrivate, product_id }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.patch("/order/grab", { product_id });

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
