import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  id: '',
  showModal: false,
  categoryModal: false,
  partnerDetailsModal: false,
  bannerModal: false,
  formDetails: {},
  files: [],
};

export const sharedSlice = createSlice({
  name: "sharedSlice",
  initialState: initialState,
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload
    },

    setModalStatus: (state, { payload }) => {
      state.showModal = payload
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
    setPartnerModalStatus: (state, { payload }) => {
      state.partnerDetailsModal = payload
    },
    setFiles: (state, { payload }) => {
      state.files = payload.data
    },
    setPartnerProfileImages: (state, { payload }) => {
      state.formDetails.profilePicture = payload.data[0]?.url
    },
  },
});

export const {
  setId,
  setModalStatus,
  setFormDetails,
  setCategoryModalStatus,
  setPartnerModalStatus,
  setFiles,
  setPartnerProfileImages,
  setBannerModalStatus
} = sharedSlice.actions;