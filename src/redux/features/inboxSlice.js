import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INBOX_API } from "../../apis/apis";

const initialState = {
  packages: [],
  loading: false,
  error: null,
};

export const getPackagesInbox = createAsyncThunk(
  "inbox/getPackages",
  async ({ country_code, status }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        INBOX_API,
        {
          country_code,
          status,
        },
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return data;
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

export const getNewPackagesInbox = createAsyncThunk(
  "inbox/getNewPackages",
  async ({ country_code, status }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        INBOX_API,
        {
          country_code,
          status,
        },
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return data.packages;
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
const inboxSlice = createSlice({
  name: "inbox",
  initialState,
  extraReducers: {
    [getPackagesInbox.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [getPackagesInbox.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.packages = action.payload;
    },
    [getPackagesInbox.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getNewPackagesInbox.pending]: (state, action) => {
      state.error = null;
    },
    [getNewPackagesInbox.fulfilled]: (state, action) => {
      state.error = null;
      state.packages = action.payload;
    },
    [getNewPackagesInbox.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default inboxSlice.reducer;