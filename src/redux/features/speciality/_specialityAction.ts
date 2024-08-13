import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
const API_URL = process.env.REACT_APP_LISTING_API_URL;
const GET_ALL_SPECIALITY = `${API_URL}/getAllSpeciality`;
const ADD_SPECIALITY = `${API_URL}/speciality`;

export const getSpeciality = createAsyncThunk(
  "getSpeciality",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page, limit,  search = "" } = values;
      const { data } = await axios.get(`${GET_ALL_SPECIALITY}?page=${page}&limit=${limit}&search=${search}`, {});
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
);

export const addSpeciality = createAsyncThunk(
  "addSpeciality",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${ADD_SPECIALITY}`, values);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
);

export const updateSpeciality = createAsyncThunk(
  "addSpeciality",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const id = values.id;
      delete values.id;
      const { data } = await axios.put(`${ADD_SPECIALITY}/${id}`, values);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSpeciality = createAsyncThunk(
  "deleteSpeciality",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id } = values
      const { data } = await axios.delete(`${ADD_SPECIALITY}/${id}`);
      notify(data.responseMessage, 'success');
      return data;
    } catch (error: any) {
      const { responseMessage } = error.response?.data;
      notify(responseMessage, 'error');
      return rejectWithValue(error.message);
    }
  }
)