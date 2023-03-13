import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./rootReducers";

const store = configureStore({
  reducer: combineReducers,
});

export default store;
