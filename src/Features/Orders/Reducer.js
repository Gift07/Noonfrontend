import { createSlice } from "@reduxjs/toolkit";
import { GetProduct } from "./Action";

const initialState = {
  orderLoading: false,
  order: {},
  orderError: "",
};

const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetProduct.pending, (state) => {
        state.orderLoading = true;
      })
      .addCase(GetProduct.fulfilled, (state, action) => {
        state.orderLoading = false;
        state.order = action.payload;
      })
      .addCase(GetProduct.rejected, (state, action) => {
        state.orderLoading = false;
        state.orderError = action.payload;
      });
  },
});

export default orderSlice.reducer;
