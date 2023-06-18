import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "../alert/alert.slice";
import plansReducer from "../plan/planList.slice";
import TryForFreeReduce from "../tryforfree/tryforfree.slice";

const rootReducer: any = combineReducers({
  alert: alertReducer,
  planList: plansReducer,
  TryForFree: TryForFreeReduce,
});

export default rootReducer;
