import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "../alert/alert.slice";

const rootReducer = combineReducers({
  alert: alertReducer,
});

export default rootReducer;
