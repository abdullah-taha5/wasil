import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MEMBERSHIPS_API } from "../../apis/apis";

const initialState = {
  branchs: [],
  loading: false,
  error: null,
};

export const getBranchs = createAsyncThunk("branchs", async () => {
  try {
    const { data } = await axios.get(MEMBERSHIPS_API, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
      },
    });
    return data.data[0].branchs;
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
const branchsSlice = createSlice({
  name: "branchs",
  initialState,
  extraReducers: {
    [getBranchs.pending]: (state, action) => {
      state.loading = true;
    },
    [getBranchs.fulfilled]: (state, action) => {
      state.loading = false;
      state.branchs = action.payload;
    },
    [getBranchs.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default branchsSlice.reducer;
