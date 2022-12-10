import { createSlice } from "@reduxjs/toolkit";
import { CreateOrder, GetProduct, GrabOrderAction } from "./Action";

const initialState = {
  orderLoading: false,
  order: {},
  orderError: "",
  message: "",
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
      })
      .addCase(GrabOrderAction.pending, (state) => {
        state.orderLoading = true;
      })
      .addCase(GrabOrderAction.fulfilled, (state, action) => {
        state.orderLoading = false;
        state.message = action.payload.message;
      })
      .addCase(GrabOrderAction.rejected, (state, action) => {
        state.orderLoading = false;
        state.orderError = action.payload;
      })
      .addCase(CreateOrder.pending, (state) => {
        state.orderLoading = true;
      })
      .addCase(CreateOrder.fulfilled, (state, action) => {
        state.orderLoading = false;
        state.message = action.payload;
      })
      .addCase(CreateOrder.rejected, (state, action) => {
        state.orderLoading = false;
        state.orderError = action.payload;
      });
  },
});

export default orderSlice.reducer;
