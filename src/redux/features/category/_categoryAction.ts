import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
const API_URL = process.env.REACT_APP_LISTING_API_URL;
const GET_ALL_CATEGORY = `${API_URL}/getAllCategories`;
const ADD_CATEGORY = `${API_URL}/category`;

export const getCategory = createAsyncThunk(
  "getCategory",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page, limit, search = "" } = values;
      const { data } = await axios.get(`${GET_ALL_CATEGORY}?page=${page}&limit=${limit}&search=${search}`, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  "addCategory",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${ADD_CATEGORY}`, values);
      notify("Category added successfully", 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const id = values.id;
      delete values.id;
      const { data } = await axios.put(`${ADD_CATEGORY}/${id}`, values);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
)

export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id } = values
      const { data } = await axios.delete(`${ADD_CATEGORY}/${id}`);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
)