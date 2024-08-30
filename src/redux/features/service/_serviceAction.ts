"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
import { setFormDetails, setServiceModalStatus, setSubServiceModalStatus } from "../shared/sharedSlice";
const API_URL= process.env.REACT_APP_API_URL;
const CREATE_SERVICE = `${API_URL}/service/create`
const GET_ALL_SERVICES = `${API_URL}/service/getAllServices`
const GET_ALL_SUBSERVICES = `${API_URL}/service/getSubServicesByParentId`
const UPDATE_SERVICE = `${API_URL}/service/updateServiceById`
const DELETE_SERVICE = `${API_URL}/service/deleteServiceById`

export const addNewService = createAsyncThunk(
  "addNewService",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${CREATE_SERVICE}`, values);
      notify(data.responseMessage, 'success')
      dispatch(getServices({}))
      dispatch(setServiceModalStatus(false))
      dispatch(setFormDetails({}))
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

export const getSubServices = createAsyncThunk(
  "getServices",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.get(`${GET_ALL_SUBSERVICES}/${values._id}`,{});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewSubService = createAsyncThunk(
  "addNewService",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(`${CREATE_SERVICE}`, values.formData);
      notify(data.responseMessage, 'success')
      dispatch(getSubServices({_id:values._id}))
      dispatch(setSubServiceModalStatus(false))
      dispatch(setFormDetails({}))
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.message);
    }
  }
);

export const updateService = createAsyncThunk(
  "updateService",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.put(`${UPDATE_SERVICE}/${values._id}`, values.formData);
      notify(data.responseMessage, 'success')
      if(values.type==='service'){
        dispatch(getServices({}))
        dispatch(setServiceModalStatus(false))
      }else{
        dispatch(getSubServices({_id:values.parentId}))
        dispatch(setSubServiceModalStatus(false))
      }
      dispatch(setFormDetails({}))
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.message);
    }
  }
);

export const deleteService = createAsyncThunk(
  "deleteService",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.delete(`${DELETE_SERVICE}/${values._id}`,{});
      notify(data.responseMessage, 'success')
      if(values.type==='service'){
        dispatch(getServices({}))
        dispatch(setServiceModalStatus(false))
      }else{
        dispatch(getSubServices({_id:values.parentId}))
        dispatch(setSubServiceModalStatus(false))
      }
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.message);
    }
  }
);
