import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../redux-setup/apiSlice";
import TestSlice from "../redux-setup/TestSlice";
export const store = configureStore({
  reducer: {
    TestSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
});
