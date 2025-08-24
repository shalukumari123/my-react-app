// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/state-manage/ReduxToolkit";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
