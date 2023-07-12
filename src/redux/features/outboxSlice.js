import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { OUTBOX_API } from "../../apis/apis";

const initialState = {
  packages: [],
  loading: false,
  error: null,
};

export const getPackagesOutbox = createAsyncThunk(
  "outbox",
  async ({ country_code }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        OUTBOX_API,
        {
          country_code,
        },
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return data.data;
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.pathname = "/signin";
      }

      return rejectWithValue(error.response.data.message);
    }
  }
);


const outboxSlice = createSlice({
  name: "outbox",
  initialState,
  extraReducers: {
    [getPackagesOutbox.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getPackagesOutbox.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.packages = action.payload;
    },
    [getPackagesOutbox.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default outboxSlice.reducer;