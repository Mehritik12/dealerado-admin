import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./_userPermissionAction";

const initialState: any = {
  data: {},
  isLoading: false,
  isSuccess: false,
  user:{},
  permission:{}
};

export const userPermissionSlice = createSlice({
  name: "userPermission",
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.permission = payload.data.permissions;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});
