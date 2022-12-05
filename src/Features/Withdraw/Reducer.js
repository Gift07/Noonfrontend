import { createSlice } from "@reduxjs/toolkit";
import { CreateWithdraw, FetchWithdraw, FetchWithdraws } from "./Action";

const initialState = {
  withdrawLoading: false,
  withdraws: [],
  withdraw: {},
  message: "",
  withdrawError: "",
};

const withdrawSlice = createSlice({
  name: "Withdraw",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(CreateWithdraw.pending, (state) => {
        state.withdrawLoading = true;
      })
      .addCase(FetchWithdraws.pending, (state) => {
        state.withdrawLoading = true;
      })
      .addCase(FetchWithdraw.pending, (state) => {
        state.withdrawLoading = true;
      })
      .addCase(CreateWithdraw.fulfilled, (state, action) => {
        state.message = action.payload;
        state.withdrawLoading = false;
      })
      .addCase(FetchWithdraws.fulfilled, (state, action) => {
        state.withdraws = action.payload;
        state.withdrawLoading = false;
      })
      .addCase(FetchWithdraw.fulfilled, (state, action) => {
        state.withdraw = action.payload;
        state.withdrawLoading = false;
      })
      .addCase(CreateWithdraw.rejected, (state, action) => {
        state.withdrawError = action.error;
        state.withdrawLoading = false;
      })
      .addCase(FetchWithdraws.rejected, (state, action) => {
        state.withdrawLoading = false;
        state.withdrawError = action.error;
      })
      .addCase(FetchWithdraw.rejected, (state, action) => {
        state.withdrawLoading = false;
        state.withdrawError = action.error;
      });
  },
});

export default withdrawSlice.reducer;
