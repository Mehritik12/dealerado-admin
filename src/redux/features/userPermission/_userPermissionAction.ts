import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
const API_URL = process.env.REACT_APP_API_URL;
const GET_USER = `${API_URL}/user`;

export const getUserById = createAsyncThunk(
  "getUserById",
  async (_void: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const { data } = await axios.get(`${GET_USER}`);
      return data
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.message);
    }
  }
);