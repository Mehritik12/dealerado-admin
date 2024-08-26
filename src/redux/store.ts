import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { userList } from "./features/user/userSlice";
import { categoryList } from "./features/category/categorySlice";
import {sharedSlice} from "./features/shared/sharedSlice"
import { bannerList } from "./features/banner/bannerSlice";
import { orderList } from "./features/order/orderSlice";
import { vehicleList } from "./features/vehicle/vehicleSlice";
import { transactionSlice } from "./features/transaction/transactionSlice";
import { userPermissionSlice } from "./features/userPermission/userPermissionSlice";


const rootReducer = combineReducers({
  userList: userList.reducer,
  categoryList: categoryList.reducer,
  sharedActions: sharedSlice.reducer,
  transactions:transactionSlice.reducer,
  bannerList: bannerList.reducer,
  userPermission:userPermissionSlice.reducer
  // orderList: orderList.reducer,
  // vehicleList: vehicleList.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sharedActions",'userPermission'], // only reducers will be persisted
  // blacklist: ['someReducer'] use blacklist to exclude specific reducers from being persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    })
      .concat(logger as any)
});

const persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

