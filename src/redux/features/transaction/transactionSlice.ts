import { createSlice } from "@reduxjs/toolkit";
import { addMoney, getAllUserBalance, getTransactions, getUserBalance } from "./_transactionAction";

const initialState: any = {
  data: [],
  userBalace:{},
  allUserBalance:{},
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
      })
      .addCase(getUserBalance.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getUserBalance.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userBalace = payload.data;
      })
      .addCase(getUserBalance.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      })

      .addCase(getAllUserBalance.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getAllUserBalance.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allUserBalance = payload.data;
      })
      .addCase(getAllUserBalance.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});
