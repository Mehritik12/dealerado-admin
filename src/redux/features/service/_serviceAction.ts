"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL= process.env.REACT_APP_API_URL;
const CREATE_SERVICE = `${API_URL}/service/create`
const GET_ALL_SERVICES = `${API_URL}/service/getAllServices`

export const addNewService = createAsyncThunk(
  "addNewService",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${CREATE_SERVICE}`, values);
      return data;
    } catch (error: any) {
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