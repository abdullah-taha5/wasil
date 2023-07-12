import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_PACKAGES_API } from "../../apis/apis";

const initialState = {
  packages: [],
  loading: false,
  error: null,
};

export const searchPackagesInbox = createAsyncThunk("searchPackages", async (key) => {
  try {
    const { data } = await axios.post(
      SEARCH_PACKAGES_API,
      {
        key,
        country_code: localStorage.getItem("currentBranchCode")
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
    } else {
      console.log(error);
    }
  }
});
const searchPackagesSlice = createSlice({
  name: "searchPackages",
  initialState,
  extraReducers: {
    [searchPackagesInbox.pending]: (state, action) => {
      state.loading = true;
    },
    [searchPackagesInbox.fulfilled]: (state, action) => {
      state.loading = false;
      state.packages = action.payload;
      console.log(action.payload);
    },
    [searchPackagesInbox.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default searchPackagesSlice.reducer;