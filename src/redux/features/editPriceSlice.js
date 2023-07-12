import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EDIT_PRICE_API } from "../../apis/apis";

const initialState = {
  message: {},
  loading: false,
  error: null,
};

export const editPrice = createAsyncThunk("edit-price", async (newData) => {
  try {
    const { data } = await axios.post(EDIT_PRICE_API, newData, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
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
const editPriceSlice = createSlice({
  name: "edit-price",
  initialState,
  extraReducers: {
    [editPrice.pending]: (state, action) => {
      state.loading = true;
    },
    [editPrice.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      // state.message = "Successfully"
    },
    [editPrice.rejected]: (state, action) => {
      state.loading = false;
      state.error = "error";
    },
  },
});

export default editPriceSlice.reducer;