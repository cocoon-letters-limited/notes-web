import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "../alert/alert.reducer";
// import authReducer from "store/alert/auth.reducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  //   auth: authReducer,
});

export default rootReducer;
