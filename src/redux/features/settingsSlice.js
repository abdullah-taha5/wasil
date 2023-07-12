import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_PLANS_API, MY_MEMBERSHIPS_API, SUBSCRIBE_API } from "../../apis/apis";

const initialState = {
  memberships: [],
  plans: [],
  subscribeMessage: {},
  loading: false,
  error: null,
};

export const getMyMemberships = createAsyncThunk("settings/memberships", async () => {
  try {
    const { data } = await axios.get(MY_MEMBERSHIPS_API, {
      headers: {
        apiKey: process.env.REACT_APP_API_KEY,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data.data;
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
export const getPlans = createAsyncThunk("settings/memberships/plans", async (hub_id) => {
    try {
      const { data } = await axios.post(
        GET_PLANS_API,
        { hub_id },
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
      } else {
        console.log(error);
      }
    }
  });




  export const subscribe = createAsyncThunk("settings/memberships/subscribe", async (subscribeData) => {
    
    try {
      const { data } = await axios.post(
        SUBSCRIBE_API,
        subscribeData,
        {
          headers: {
            apiKey: process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
  
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
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  extraReducers: {
    [getMyMemberships.pending]: (state, action) => {
      state.loading = true;
    },
    [getMyMemberships.fulfilled]: (state, action) => {
      state.loading = false;
      state.memberships = action.payload;
    },
    [getMyMemberships.rejected]: (state, action) => {
      state.loading = false;
    },
    [getPlans.pending]: (state, action) => {
      state.loading = true;
    },
    [getPlans.fulfilled]: (state, action) => {
      state.loading = false;
      state.plans = action.payload;
    },
    [getPlans.rejected]: (state, action) => {
      state.loading = false;
    },

    [subscribe.pending]: (state, action) => {
      },
      [subscribe.fulfilled]: (state, action) => {
        state.subscribeMessage = action.payload;
        console.log(action.payload);
      },
      [subscribe.rejected]: (state, action) => {
      },
  },
});

export default settingsSlice.reducer;
