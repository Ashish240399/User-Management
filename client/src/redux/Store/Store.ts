import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../Slice/toggleSlice";
import searchSlice from "../Slice/searchSlice";
import addItemSlice from "../Slice/addItemSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    search: searchSlice,
    addItemOpen: addItemSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
