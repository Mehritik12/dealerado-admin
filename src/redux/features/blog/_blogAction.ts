import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = process.env.REACT_APP_LISTING_API_URL;
const GET_ALL_USER = `${API_URL}/blog`;

export const getBlog = createAsyncThunk(
  "getBlogs",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page, limit } = values;
      const { data } = await axios.get(`${GET_ALL_USER}?page=${page}&limit=${limit}`, {});

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);