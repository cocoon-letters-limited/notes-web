import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "../alert/alert.slice";
import plansReducer from "../plan/planList.slice";

const rootReducer: any = combineReducers({
  alert: alertReducer,
  planList: plansReducer,
});

export default rootReducer;
