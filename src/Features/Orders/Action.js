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
  async ({ axiosPrivate, order }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.patch("/orders/grab-order", order);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const CreateOrder = createAsyncThunk(
  "Order/Create",
  async ({ axiosPrivate, order }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/orders/create", order);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GrabInformation = createAsyncThunk(
  "Grab/Info",
  async ({ axiosPrivate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("/orders/grab-info");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
