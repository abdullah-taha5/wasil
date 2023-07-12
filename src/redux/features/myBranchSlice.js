import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_DASHBOARD_API } from "../../apis/apis";

const initialState = {
  user: {},
  branch: {},
  error: null,
};

export const getMyBranch = createAsyncThunk("myBranch", async () => {
  try {
    const { data } = await axios.post(USER_DASHBOARD_API, {country_code: localStorage.getItem("currentBranchCode")}, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data.data;
  } catch (error) {
    if (error.response.status === 401 ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.pathname = "/signin";

    } else {
      console.log(error);
    }
  }
});

export const myBranchSlice = createSlice({
  name: "myBranch",
  initialState,
  extraReducers: {
    [getMyBranch.pending]: (state, action) => {
      state.loading = true;
    },
    [getMyBranch.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.branch = action.payload.branch;
    },
    [getMyBranch.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default myBranchSlice.reducer;
