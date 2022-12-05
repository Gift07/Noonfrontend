import { createSlice } from "@reduxjs/toolkit";
import { GetLevels } from "./Action";

const initialState = {
  levelLoading: false,
  Levels: [],
  Level: null,
  levelError: null,
};

const leveSlice = createSlice({
  name: "Level",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetLevels.pending, (state) => {
        state.levelLoading = true;
      })
      .addCase(GetLevels.fulfilled, (state, action) => {
        state.Levels = action.payload;
        state.levelLoading = false;
      })
      .addCase(GetLevels.rejected, (state, action) => {
        state.levelLoading = false;
        state.levelError = action.message;
      });
  },
});

export default leveSlice.reducer;
