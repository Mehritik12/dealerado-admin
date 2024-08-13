import { createSlice } from "@reduxjs/toolkit";
import { getSpeciality } from "./_specialityAction";

const initialState: any = {
  data: [],
  isLoading: true,
  isSuccess: false,
  responseCode: null,
  responseMessage: '',
  totalRecord: 0,
};

export const specialityList = createSlice({
  name: "specialityList",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getSpeciality.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getSpeciality.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.responseMessage = payload.responseMessage
        state.responseCode = payload.responseCode
        state.totalRecord = payload.totalRecord
      })
      .addCase(getSpeciality.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});
