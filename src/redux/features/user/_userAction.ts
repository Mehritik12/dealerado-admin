import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { notify } from "../../../utils/shared";
import { setAdminModalStatus, setFormDetails, setUserModalStatus } from "../shared/sharedSlice";
const API_URL = process.env.REACT_APP_API_URL;
const GET_ALL_USER = `${API_URL}/user/getAllUsers`;
const USER_URL = `${API_URL}/user/deleteUser`;
const CREATE_USER = `${API_URL}/user/create`;
const UPDATE_PERMISSION = `${API_URL}/user/permission`;
const UPDATE_USER = `${API_URL}/user/updateProfile`;
const GET_USER = `${API_URL}/user`;
const role = 'user'

export const getUsers = createAsyncThunk(
  "getUsers",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const { page=1, limit=10, search = '' } = values;
      const { data } = await axios.get(`${GET_ALL_USER}?page=${page}&limit=${limit}&search=${search}&role=${values.role}`, {});
      data.page = page;
      data.limit = limit;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewUser = createAsyncThunk(
  "addNewUser",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const role = values.role || 'user'
      const { data } = await axios.post(`${CREATE_USER}`, values);
      notify(data.responseMessage, 'success')
      dispatch(getUsers({ page: 1, limit: 10, role: role }))
      dispatch(setUserModalStatus(false));
      dispatch(setAdminModalStatus(false));
      dispatch(setFormDetails({}));
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.response);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUserStatus",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const id = values._id;
      const role = values.role;
      delete values._id
      delete values.role;
      const { data } = await axios.put(`${UPDATE_USER}/${id}`, values);
      notify(data.responseMessage, 'success')
      dispatch(setFormDetails({}));
      dispatch(getUsers({ page: 1, limit: 10, role: role }))
      dispatch(setUserModalStatus(false));
      dispatch(setAdminModalStatus(false));
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.response);
    }
  }
);

export const updateUserPermission = createAsyncThunk(
  "updateUserPermission",
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const id = values._id;
      delete values._id;
      const { data } = await axios.put(`${UPDATE_PERMISSION}/${id}`, values);
      notify(data.responseMessage,'success')
      // dispatch(setFormDetails({}));
      dispatch(getUsers({ page: 1, limit: 10,role:'admin' }))
      dispatch(setUserModalStatus(false));
      dispatch(setAdminModalStatus(false));
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.response);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (values: any, { rejectWithValue, dispatch, getState }) => {
    try {
      const store: any = getState();
      const page = store.userList.page || 1
      const { id } = values;
      const { data } = await axios.delete(`${USER_URL}/${id}`);
      notify(data.responseMessage, 'success')
      dispatch(getUsers({ page: page, limit: 10, role: role }))
      return data;
    } catch (error: any) {
      const message = error.response.data.responseMessage || "Something went wrong"
      notify(message, 'error')
      return rejectWithValue(error.message);
    }
  }
);