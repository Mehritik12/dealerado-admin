import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL= process.env.REACT_APP_API_URL;

const GET_ALL_VEHICLE = `${API_URL}/vehicle/getAllVehicles`;
const VEHICLE_URL = `${API_URL}/vehicle/`;

const UPDATE_USER_STATUS = `${API_URL}/getAllVehicles`;

export const getVehicles = createAsyncThunk(
  "getVehicles",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page, limit ,search=''} = values;
      const { data } = await axios.get(`${GET_ALL_VEHICLE}?page=${page}&limit=${limit}&search=${search}`, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewOrder = createAsyncThunk(
  "addNewVehicle",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${VEHICLE_URL}`, values);
      dispatch(getVehicles({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateVehicle = createAsyncThunk(
  "updateVehicle",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id, status } = values;
      const { data } = await axios.put(`${UPDATE_USER_STATUS}/${id}`, { status });
      dispatch(getVehicles({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteVehicle = createAsyncThunk(
  "deleteVehicle",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { id} = values;
      const { data } = await axios.delete(`${VEHICLE_URL}/${id}`);
      dispatch(getVehicles({ page: 1, limit: 10 }))
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);