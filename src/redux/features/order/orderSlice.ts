import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "./_orderAction";

const initialState: any = {
  data: [],
  isLoading: true,
  isSuccess: false,
  responseCode: null,
  responseMessage: '',
  totalRecord: 0,
};

export const orderList = createSlice({
  name: "orderList",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.responseMessage = payload.responseMessage
        state.responseCode = payload.responseCode
        state.totalRecord = payload.totalRecord

      })
      .addCase(getOrders.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});
