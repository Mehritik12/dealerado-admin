import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
import { setBannerModalStatus, setFormDetails } from "../shared/sharedSlice";
const API_URL = process.env.REACT_APP_API_URL;
const BANNER_URL = `${API_URL}/banner`;

export const getBanner = createAsyncThunk(
  "getBanner",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page = 1, limit = 10, search = "" } = values;
      const { data } = await axios.get(`${BANNER_URL}?page=${page}&limit=${limit}&search=${search}`, {});
      data.page = page;
      data.limit = limit;
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
      const { data } = await axios.post(`${BANNER_URL}`, values);
      notify(data.responseMessage, 'success')
      dispatch(setBannerModalStatus(false))
      dispatch(setFormDetails({}))
      dispatch(getBanner({ page: 1, limit: 10 }));
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
  async (values: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const { _id, formData } = values;
      const store: any = getState();
      const { page, limit } = store.banners;
      const { data } = await axios.put(`${BANNER_URL}/${_id}`, formData);
      notify(data.responseMessage, 'success')
      dispatch(setBannerModalStatus(false))
      dispatch(setFormDetails({}))
      dispatch(getBanner({ page: page ? page : 1, limit: limit ? limit : 10 }));
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
      const { data } = await axios.delete(`${BANNER_URL}/${id}`);
      notify(data.responseMessage, 'success');
      dispatch(getBanner({ page: 1, limit: 10 }));
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
)