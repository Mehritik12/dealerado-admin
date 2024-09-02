import { createSlice } from "@reduxjs/toolkit";
import { getBanner } from "./_bannerAction";

const initialState: any = {
  data: [],
  isLoading: false,
  isSuccess: false,
  totalRecord: 0,
  page:1,
  limit:10
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getBanner.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getBanner.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.responseMessage = payload.responseMessage
        state.responseCode = payload.responseCode
        state.totalRecord = payload.totalRecord
      })
      .addCase(getBanner.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });

      
  },
});
