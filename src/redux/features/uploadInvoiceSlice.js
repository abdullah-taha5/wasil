import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UPLOAD_MERCHANT_INVOICE_API } from "../../apis/apis";

const initialState = {
  messageInvoice: {success: false},
  loading: false,
  error: null,
};

export const uploadInvoice = createAsyncThunk("upload-invoice", async (body) => {
  try {
    const data = await axios.post(UPLOAD_MERCHANT_INVOICE_API, body, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
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
const uploadInvoiceSlice = createSlice({
  name: "upload-invoice",
  initialState,
  extraReducers: {
    [uploadInvoice.pending]: (state, action) => {
      state.loading = true;
    },
    [uploadInvoice.fulfilled]: (state, action) => {
      state.loading = false;
      state.messageInvoice = action.payload;
    },
    [uploadInvoice.rejected]: (state, action) => {
      state.loading = false;
      state.error = "error";
    },
  },
});

export default uploadInvoiceSlice.reducer;