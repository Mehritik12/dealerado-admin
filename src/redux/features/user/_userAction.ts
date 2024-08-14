import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL= process.env.REACT_APP_API_URL;

const GET_ALL_USER = `${API_URL}/user/getAllUsers`;

const UPDATE_USER_STATUS = `${API_URL}/getAllUsers`;

export const getUsers = createAsyncThunk(
  "getUsers",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page, limit ,search=''} = values;
      const { data } = await axios.get(`${GET_ALL_USER}?page=${page}&limit=${limit}&search=${search}`, {});
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
      dispatch(getUsers({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
