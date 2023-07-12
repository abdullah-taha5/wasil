import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SAVE_DV_API } from "../../apis/apis";

const initialState = {
  message: {},
  loading: false,
  error: null,
};

export const saveItems = createAsyncThunk("save-items", async (newData) => {
  try {
    const { data } = await axios.post(SAVE_DV_API, newData, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data;
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
const saveItemsSlice = createSlice({
  name: "save-items",
  initialState,
  extraReducers: {
    [saveItems.pending]: (state, action) => {
      state.loading = true;
    },
    [saveItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    [saveItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = "error";
    },
  },
});

export default saveItemsSlice.reducer;
