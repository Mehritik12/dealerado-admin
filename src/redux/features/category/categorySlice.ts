import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./_categoryAction";

const initialState: any = {
  data: [],
  isLoading: true,
  isSuccess: false,
  responseCode: null,
  responseMessage: '',
  totalRecord: 0,
};

export const categoryList = createSlice({
  name: "categoryList",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.responseMessage = payload.responseMessage
        state.responseCode = payload.responseCode
        state.totalRecord = payload.totalRecord
      })
      .addCase(getCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });

      
  },
});
