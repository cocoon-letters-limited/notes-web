import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const InitPayMent = createAsyncThunk(
  "INITIAL_PAYMENT",
  async (payment_data: any) => {
    const response = await axios.post(
      "https://api.dev.noteopx.com/v1/payments/initialize",
      payment_data,
    );
    if (response.data.data.shouldRedirect) {
      window.open(response.data.data.url, "_blank");
    }
    toast.error("there was an error with your request");
  },
);
export const fetchPLansList = createAsyncThunk("plans", async () => {
  const response = await axios.get(
    "https://api.dev.noteopx.com/v1/plans?sortField=createdAt&sortOrder=desc&skip=0&limit=2&isFree=false&isUnlimited=false",
  );
  return response.data;
});

const plansList = createSlice({
  name: "plansList",
  initialState: {
    plansList: [],
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPLansList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPLansList.fulfilled, (state, action) => {
        state.loading = false;
        state.plansList = action.payload;
      });
  },
});

export default plansList.reducer;
