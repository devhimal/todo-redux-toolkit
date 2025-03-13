import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import default reducer

export const store = configureStore({
  reducer: todoReducer,
});
