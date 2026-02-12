import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// /features/counter/counterSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});