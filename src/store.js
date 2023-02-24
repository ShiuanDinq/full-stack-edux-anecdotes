import { configureStore } from "@reduxjs/toolkit";
import anectdoteReducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from "./reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdotes: anectdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
});

export default store;
