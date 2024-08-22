import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  id: '',
  categoryModal: false,
  bannerModal: false,
  userModal: false,
  adminModal: false,
  formDetails: {},
};

export const sharedSlice = createSlice({
  name: "sharedSlice",
  initialState: initialState,
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload
    },
    setFormDetails: (state, { payload }) => {
      state.formDetails = payload
    },
    setCategoryModalStatus: (state, { payload }) => {
      state.categoryModal = payload
    },
    setBannerModalStatus: (state, { payload }) => {
      state.bannerModal = payload
    },
    setUserModalStatus: (state, { payload }) => {
      state.userModal = payload;
    },
    setAdminModalStatus: (state, { payload }) => {
      state.adminModal = payload;
    },
  },
});

export const {
  setId,
  setFormDetails,
  setCategoryModalStatus,
  setUserModalStatus,
  setBannerModalStatus,
  setAdminModalStatus
} = sharedSlice.actions;