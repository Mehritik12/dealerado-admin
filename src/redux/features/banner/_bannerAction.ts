import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
const API_URL = process.env.REACT_APP_API_URL;
const GET_ALL_BANNER = `${API_URL}/banner`;
const ADD_BANNER = `${API_URL}/banner`;

export const getBanner = createAsyncThunk(
  "getBanner",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page, limit, search = "" } = values;
      const { data } = await axios.get(`${GET_ALL_BANNER}?page=${page}&limit=${limit}&search=${search}`, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBanner = createAsyncThunk(
  "addBanner",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${ADD_BANNER}`, values);
      notify("Banner added successfully", 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
);

export const updateBanner = createAsyncThunk(
  "updateBanner",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const id = values.id;
      delete values.id;
      const { data } = await axios.put(`${ADD_BANNER}/${id}`, values);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
)

export const deleteBanner = createAsyncThunk(
  "deleteBanner",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id } = values
      const { data } = await axios.delete(`${ADD_BANNER}/${id}`);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }   
)