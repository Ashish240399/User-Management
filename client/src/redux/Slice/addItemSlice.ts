import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  addItemOpen: false,
};

const addItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {
    getAddItemSlice: (state, action: PayloadAction<boolean>) => {
      state.addItemOpen = action.payload;
    },
  },
});

export const { getAddItemSlice } = addItemSlice.actions;
export default addItemSlice.reducer;
