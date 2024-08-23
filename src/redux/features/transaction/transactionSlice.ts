import { createSlice } from "@reduxjs/toolkit";
import { addMoney, getTransactions } from "./_transactionAction";

const initialState: any = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
  page:1,
  limit:10,
  totalRecord: 0,
};

export const transactionSlice = createSlice({
  name: "TransactionList",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload.data;
        state.page = payload.page;
        state.limit = payload.limit;
        state.totalRecord = payload.totalRecord;
      })
      .addCase(getTransactions.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload.data;
      })
      .addCase(addMoney.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(addMoney.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addMoney.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload.data;
      });
  },
});
