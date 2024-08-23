import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  id: '',
  categoryModal: false,
  userModal: false,
  orderModal: false,
  vehicleModal: false,
  partnerDetailsModal: false,
  bannerModal: false,
  adminModal: false,
  permissionModal: false,
  addMoneyModal: false,
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
    setOrderModalStatus: (state, { payload }) => {
      state.orderModal = payload;
    },
    setVehicleModalStatus: (state, { payload }) => {
      state.vehicleModal = payload;
    },
    setAdminModalStatus: (state, { payload }) => {
      state.adminModal = payload;
    },
    setPermissionModalStatus: (state, { payload }) => {
      state.permissionModal = payload;
    },
    setAddMoneyModalStatus: (state, { payload }) => {
      state.addMoneyModal = payload;
    }
  },
});

export const {
  setId,
  setFormDetails,
  setCategoryModalStatus,
  setUserModalStatus,
  setBannerModalStatus,
  setOrderModalStatus,
  setVehicleModalStatus,
  setAdminModalStatus,
  setPermissionModalStatus,
  setAddMoneyModalStatus
} = sharedSlice.actions;