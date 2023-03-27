import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "../alert/alert.slice";
// import authReducer from "../auth/auth.reducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  //   auth: authReducer,
});

export default rootReducer;
