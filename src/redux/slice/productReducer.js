import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";
export const getProducts = createAsyncThunk(
  "/getProducts",
  async (jwtToken) => {
    try {
      let products = await axios.get("http://localhost:8090/product/", {
        headers: { Authorization: `Bearer ${jwtToken?.token}` },
      });
      return products.data;
    } catch (error) {
      return error;
    }
  }
);
export const postData = createAsyncThunk("/postData", async (data) => {
  console.log("data", data);
  let products = await axios.post("http://localhost:8090/product", data, {
    headers: { Authorization: `Bearer ${data?.token}` },
  });
  return products.data;
});

export const SignupUser = createAsyncThunk("/signup", async (data) => {
  try {
    let userdata = await axios.post(
      "http://localhost:8090/user/api/signup",
      data
    );

    Cookie.set("token", userdata.data?.token);
    return userdata.data;
  } catch (error) {
    return error;
  }
});

export const LoginUser = createAsyncThunk("/login", async (data) => {
  try {
    let userdata = await axios.post(
      "http://localhost:8090/user/api/login",
      data
    );

    Cookie.set("token", userdata.data?.token);
    return userdata.data;
  } catch (error) {
    return error;
  }
});

const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: false,
    count: 0,
    isLogin: Cookie.get("token") ? true : false,
    user: {},
    token: Cookie.get("token") ? Cookie.get("token") : null,
  },
  reducers: {
    inc: (state, action) => {
      state.count += action.payload;
    },
    desc: (state, action) => {
      state.count -= action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(SignupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
      });
  },
});
export const { inc, desc } = productReducer.actions;

export default productReducer.reducer;
