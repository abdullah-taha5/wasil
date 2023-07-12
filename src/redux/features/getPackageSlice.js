import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_PACKAGE_API } from "../../apis/apis";

const initialState = {
  package: {},
  loading: false,
  error: null,
};

export const getPackageInbox= createAsyncThunk("package", async (id) => {
  
  try {
    const { data } = await axios.post(GET_PACKAGE_API, {
        package_id: id
    },{
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data.package;
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
const getPackageSlice = createSlice({
  name: "package",
  initialState,
  extraReducers: {
    [getPackageInbox.pending]: (state, action) => {
      state.loading = true;
    },
    [getPackageInbox.fulfilled]: (state, action) => {
      state.loading = false;
      state.package = action.payload;
    },
    [getPackageInbox.rejected]: (state, action) => {
      state.loading = false;
      state.error = "error"
    },
  },
});

export default getPackageSlice.reducer;
