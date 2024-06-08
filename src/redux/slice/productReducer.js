import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookie from "js-cookie";
export const getProducts = createAsyncThunk("/getProducts", async () => {
  try {
    let products = await axios.get("http://localhost:8090/product/");
    return products.data;
  } catch (error) {
    return error;
  }
});
export const postData = createAsyncThunk("/postData", async (data) => {
  let products = await axios.post("http://localhost:8090/product", data);
  return products.data;
});

export const SignupUser = createAsyncThunk("/signup", async (data) => {
  console.log("sign up", data);
  try {
    let userdata = await axios.post(
      "http://localhost:8090/user/api/signup",
      data
    );
    console.log("userdata", userdata);
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
    console.log("userdata", userdata);
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
    isLogin: false,
    user: {},
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
