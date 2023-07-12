import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RETURN_PACKAGE_API} from "../../apis/apis";
import { useNavigate } from "react-router-dom";

const initialState = {
  message: null,
  loading: false,
  error: null,
};

export const returnPackage = createAsyncThunk("return-package", async (body, { rejectWithValue }) => {
  console.log(body);

  try {
    const data = await axios.post(RETURN_PACKAGE_API, body, {
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
      // console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
});
const uploadInvoiceSlice = createSlice({
  name: "return-package",
  initialState,
  extraReducers: {
    [returnPackage.pending]: (state, action) => {
      state.loading = true;
    },
    [returnPackage.fulfilled]: (state, action) => {
      state.loading = false;
       state.message = action.payload.data.message;
      // window.location.pathname = "dashboard/inbox"
      

    },
    [returnPackage.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      
   
    },
  },
});

export default uploadInvoiceSlice.reducer;