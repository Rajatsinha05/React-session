import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productReducer";

export const store=configureStore({
    reducer:{
      productSlice:productReducer
    }
})
