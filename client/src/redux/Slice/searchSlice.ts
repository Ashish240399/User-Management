import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchSlice: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { addSearchSlice } = searchSlice.actions;

export default searchSlice.reducer;
