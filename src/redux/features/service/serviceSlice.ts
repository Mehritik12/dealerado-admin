"use client";
import { createSlice } from "@reduxjs/toolkit";
import { addNewService, getServices } from "./_serviceAction";

const initialState: any = {
  data: [],
  isLoading: false,
  isSuccess: false,
  error: {}
};

export const serviceSlice = createSlice({
  name: "service", 
  initialState: initialState,
  reducers: {  },
  extraReducers(builder) {
    builder
    .addCase(addNewService.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    })
    .addCase(addNewService.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
    })
    .addCase(addNewService.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = payload;
    })
    .addCase(getServices.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
    })
    .addCase(getServices.fulfilled, (state, { payload }) => {
      console.log(payload,">>>>> payload>>>> ")
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload.data
    })
    .addCase(getServices.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = payload;
    })
  },
});

export default serviceSlice.reducer;
