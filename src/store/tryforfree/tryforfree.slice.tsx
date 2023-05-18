import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

export const TryForFreeAPI = createAsyncThunk(
  "TryForFree",
  async (data: any) => {
    try {
      const response: any = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/try`,
        data,
      );
      if (response) {
        toast.success("Your request was successful");
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  },
);

const TryForFree = createSlice({
  name: "TryForFree",
  initialState: {
    TryForFree: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TryForFreeAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(TryForFreeAPI.fulfilled, (state) => {
        state.loading = false;
        // state.TryForFree = action.payload;,
      });
  },
});

export default TryForFree.reducer;
