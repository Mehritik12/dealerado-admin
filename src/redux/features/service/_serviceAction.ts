"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
const API_URL= process.env.REACT_APP_API_URL;
const CREATE_SERVICE = `${API_URL}/service/create`
const GET_ALL_SERVICES = `${API_URL}/service/getAllServices`

export const addNewService = createAsyncThunk(
  "addNewService",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${CREATE_SERVICE}`, values);
      notify(data.responseMessage, 'success')
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.message);
    }
  }
);

export const getServices = createAsyncThunk(
  "getServices",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(`${GET_ALL_SERVICES}`, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);