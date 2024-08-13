import { configureStore } from "@reduxjs/toolkit";
import { partnerList } from "./features/partner/partnerSlice";
import logger from "redux-logger";
import { specialityList } from "./features/speciality/specialitySlice";
import { userList } from "./features/user/userSlice";
import { categoryList } from "./features/category/categorySlice";
import { blogList } from "./features/blog/blogSlice";
import {sharedSlice} from "./features/shared/sharedSlice"
import { bannerList } from "./features/banner/bannerSlice";
export const store = configureStore({
  reducer: {
    partnerList: partnerList.reducer,
    specialityList: specialityList.reducer,
    userList: userList.reducer,
    categoryList: categoryList.reducer,
    blogList: blogList.reducer,
    sharedActions: sharedSlice.reducer,
    bannerList: bannerList.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    })
      .concat(logger as any)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
