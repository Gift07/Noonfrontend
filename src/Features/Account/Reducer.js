import { createSlice } from "@reduxjs/toolkit";
import { GetAccount, RechargeAccount } from "./Action";

const initialState = {
  accountloading: false,
  accounts: [],
  account: {},
  message: "",
  accountError: null,
};

const accountSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetAccount.pending, (state) => {
        state.accountloading = true;
      })
      .addCase(GetAccount.fulfilled, (state, action) => {
        state.accountloading = false;
        state.account = action.payload;
      })
      .addCase(GetAccount.rejected, (state, action) => {
        state.accountloading = false;
        state.accountError = action.payload;
      })
      .addCase(RechargeAccount.pending, (state) => {
        state.accountloading = true;
      })
      .addCase(RechargeAccount.fulfilled, (state, action) => {
        state.accountloading = false;
        state.message = action.payload;
      })
      .addCase(RechargeAccount.rejected, (state, action) => {
        state.accountloading = false;
        state.accountError = action.payload;
      });
  },
});

export default accountSlice.reducer;
