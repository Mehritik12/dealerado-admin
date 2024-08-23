import { createSlice } from "@reduxjs/toolkit";
import { getVehicles } from "./_vehicleAction";

const initialState: any = {
  data: [],
  isLoading: false,
  isSuccess: false,
  responseCode: null,
  responseMessage: '',
  totalRecord: 0,
};

export const vehicleList = createSlice({
  name: "vehicleList",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getVehicles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.responseMessage = payload.responseMessage
        state.responseCode = payload.responseCode
        state.totalRecord = payload.totalRecord

      })
      .addCase(getVehicles.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});
