import { createSlice } from "@reduxjs/toolkit";
import { DeleteDeposit, GetDeposit, GetDeposits } from "./Action";

const initialState = {
  depositsLoading: false,
  deposits: [],
  deposit: {},
  depositError: null,
  message: "",
};

const depositSlice = createSlice({
  name: "Deposits",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetDeposits.pending, (state) => {
        state.depositsLoading = true;
      })
      .addCase(GetDeposit.pending, (state) => {
        state.depositsLoading = true;
      })
      .addCase(DeleteDeposit.pending, (state) => {
        state.depositsLoading = true;
      })
      .addCase(GetDeposits.fulfilled, (state, action) => {
        state.deposits = action.payload;
        state.depositsLoading = false;
      })
      .addCase(GetDeposit.fulfilled, (state, action) => {
        state.deposit = action.payload;
        state.depositsLoading = false;
      })
      .addCase(DeleteDeposit.fulfilled, (state, action) => {
        state.depositsLoading = false;
        state.message = action.payload;
      })
      .addCase(GetDeposits.rejected, (state, action) => {
        state.depositsLoading = false;
        state.depositError = action.payload;
      })
      .addCase(GetDeposit.rejected, (state, action) => {
        state.depositsLoading = false;
        state.depositError = action.payload;
      })
      .addCase(DeleteDeposit.rejected, (state, action) => {
        state.depositsLoading = false;
        state.depositError = action.payload;
      });
  },
});

export default depositSlice.reducer;
