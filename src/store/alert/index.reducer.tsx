import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "Alert",
  initialState: {
    type: "",
    message: "",
  },

  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    success: (state, action) => {
      state.type = "success";
      state.message = action.payload;
    },
    error: (state, action) => {
      state.type = "error";
      state.message = action.payload;
    },
    info: (state, action) => {
      state.type = "info";
      state.message = action.payload;
    },
    warning: (state, action) => {
      state.type = "warning";
      state.message = action.payload;
    },
    clear: (state) => {
      state.type = "";
      state.message = "";
    },
  },
});

export const { success, error, info, warning, clear } = alertSlice.actions;

export default alertSlice.reducer;
