import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL= process.env.REACT_APP_API_URL;

const GET_ALL_ORDER = `${API_URL}/order/getAllOrders`;
const ORDER_URL = `${API_URL}/order/`;

const UPDATE_USER_STATUS = `${API_URL}/getAllOrders`;

export const getOrders = createAsyncThunk(
  "getOrders",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page=1, limit=10 ,search=''} = values;
      const { data } = await axios.get(`${GET_ALL_ORDER}?page=${page}&limit=${limit}&search=${search}`, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewOrder = createAsyncThunk(
  "addNewOrder",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${ORDER_URL}`, values);
      dispatch(getOrders({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUserStatus",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id, status } = values;
      const { data } = await axios.put(`${UPDATE_USER_STATUS}/${id}`, { status });
      dispatch(getOrders({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "deleteOrder",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id} = values;
      const { data } = await axios.delete(`${ORDER_URL}/${id}`);
      dispatch(getOrders({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);