import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
import { setAddMoneyModalStatus } from "../shared/sharedSlice";
const API_URL = process.env.REACT_APP_API_URL;
const ADD_MONEY = `${API_URL}/user/addMoney`;
const GET_TRANSACTIONS = `${API_URL}/user/getAllTransactions`;

export const getTransactions = createAsyncThunk(
  "getTransactions",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { userId, page, limit, search = '' } = values;
      const { data } = await axios.get(`${GET_TRANSACTIONS}/${userId}?page=${page}&limit=${limit}&search=${search}`, {});
      data.page = parseInt(page) ;
      data.limit = parseInt(limit);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMoney = createAsyncThunk(
  "addMoney",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${ADD_MONEY}`, values);
      notify(data.responseMessage, 'success')
      dispatch(getTransactions({ page: 1, limit: 10 ,userId:values.userId}))
      dispatch(setAddMoneyModalStatus(false));
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || ""
      notify(message, 'error')
      return rejectWithValue(error.response);
    }
  }
);