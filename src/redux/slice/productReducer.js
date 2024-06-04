import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
const productReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: false,
    count: 0,
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
      });
  },
});
export const { inc, desc } = productReducer.actions;

export default productReducer.reducer;
