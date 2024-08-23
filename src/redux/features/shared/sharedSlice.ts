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
    setFiles: (state, { payload }) => {
      state.files = payload.data
    },
    setPartnerProfileImages: (state, { payload }) => {
      state.formDetails.profilePicture = payload.data[0]?.url
    },
    setAdminModalStatus: (state, { payload }) => {
      state.adminModal = payload;
    },
    setPermissionModalStatus: (state, { payload }) => {
      state.permissionModal = payload;
    },
  },
});

export const {
  setId,
  setFormDetails,
  setCategoryModalStatus,
  setUserModalStatus,
  setFiles,
  setPartnerProfileImages,
  setBannerModalStatus,
  setOrderModalStatus,
  setVehicleModalStatus,
  setAdminModalStatus,
  setPermissionModalStatus
} = sharedSlice.actions;