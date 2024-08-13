import { createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./_blogAction";

const initialState: any = {
  data: [],
  isLoading: true,
  isSuccess: false,
  responseCode: null,
  responseMessage: '',
  totalRecord: 0,
};

export const blogList = createSlice({
  name: "blogList",
  initialState: initialState,
  reducers: {
    
  },

  extraReducers(builder) {
    builder
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getBlog.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.responseMessage = payload.responseMessage
        state.responseCode = payload.responseCode
        state.totalRecord = payload.totalRecord
      })
      .addCase(getBlog.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});
