import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface AlertState {
  type: "success" | "error" | "info" | "warning" | "";
  message?: string;
}

const initialState = {
  type: "",
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,

  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    ALERT_SUCCESS: (state, action: PayloadAction<string>) => {
      state.type = "success";
      state.message = action.payload;
    },
    ALERT_ERROR: (state, action: PayloadAction<string>) => {
      state.type = "error";
      state.message = action.payload;
    },
    ALERT_INFO: (state, action: PayloadAction<string>) => {
      state.type = "info";
      state.message = action.payload;
    },
    ALERT_WARNING: (state, action: PayloadAction<string>) => {
      state.type = "warning";
      state.message = action.payload;
    },
    ALERT_CLEAR: (state) => {
      state.type = "";
      state.message = "";
    },
  },
});

export const {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_INFO,
  ALERT_WARNING,
  ALERT_CLEAR,
} = alertSlice.actions;

export const alertSelector = (state: RootState) => state.alert;

export default alertSlice.reducer;
