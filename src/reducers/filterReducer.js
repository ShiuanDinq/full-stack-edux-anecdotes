import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setAnecdoteFilter(state, action) {
      return action.payload.content;
    },
  },
});

export const { setAnecdoteFilter } = filterSlice.actions;
export default filterSlice.reducer;
