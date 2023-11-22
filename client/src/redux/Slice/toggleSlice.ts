import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: "Resources",
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    addToggleSlice: (state, action: PayloadAction<string>) => {
      state.toggle = action.payload;
    },
  },
});

export const { addToggleSlice } = toggleSlice.actions;

export default toggleSlice.reducer;
