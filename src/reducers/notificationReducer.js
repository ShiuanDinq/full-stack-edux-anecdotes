import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setAnecdoteNotification(state, action) {
      return action.payload;
    },
    resetAnecdoteNotification(state) {
      return "";
    },
  },
});

export const { setAnecdoteNotification, resetAnecdoteNotification } =
  notificationSlice.actions;

export const handleNotification = (notification) => {
  return async (dispatch) => {
    dispatch(setAnecdoteNotification(notification));
    setTimeout(() => {
      dispatch(resetAnecdoteNotification());
    }, 5000);
  };
};
export default notificationSlice.reducer;
