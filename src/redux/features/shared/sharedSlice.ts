import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  id: '',
  serviceModal: false,
  subServiceModal:false,
  userModal: false,
  orderModal: false,
  vehicleModal: false,
  partnerDetailsModal: false,
  bannerModal: false,
  adminModal: false,
  permissionModal: false,
  addMoneyModal: false,
  loginUser:{},
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
    setServiceModalStatus: (state, { payload }) => {
      state.serviceModal = payload
    },
    setSubServiceModalStatus: (state, { payload }) => {
      state.subServiceModal = payload
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
    },
    setLoginUser: (state, { payload }) => {
      state.loginUser = payload;
    }
  },
});

export const {
  setId,
  setFormDetails,
  setServiceModalStatus,
  setSubServiceModalStatus,
  setUserModalStatus,
  setBannerModalStatus,
  setOrderModalStatus,
  setVehicleModalStatus,
  setAdminModalStatus,
  setPermissionModalStatus,
  setAddMoneyModalStatus,
  setLoginUser
} = sharedSlice.actions;