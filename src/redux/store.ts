import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { userList } from "./features/user/userSlice";
import { categoryList } from "./features/category/categorySlice";
import {sharedSlice} from "./features/shared/sharedSlice"
import { bannerList } from "./features/banner/bannerSlice";
export const store = configureStore({
  reducer: {
    userList: userList.reducer,
    categoryList: categoryList.reducer,
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
