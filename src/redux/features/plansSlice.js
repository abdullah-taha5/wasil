import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { MEMBERSHIPS_API } from "../../apis/apis";

const initialState = {
  plans: {},
  plus: [],
  business: [],
  standard: [],
  loading: false,
  error: null,
};

export const getPlans = createAsyncThunk("plans", async () => {
  try {
    const { data } = await axios.get(MEMBERSHIPS_API, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });
    return data.data[0].plans;
  } catch (error) {
    console.log(error);
  }
});

export const plansSlice = createSlice({
  name: "plans",
  initialState,
  extraReducers: {
    [getPlans.pending]: (state, action) => {
      state.loading = true;
    },
    [getPlans.fulfilled]: (state, action) => {
      state.loading = false;
      state.plans = action.payload;
      state.plus = action.payload.plus;
      state.business = action.payload.business;
      state.standard = action.payload.standard;
    },
    [getPlans.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default plansSlice.reducer;
