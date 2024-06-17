import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slice/productReducer";

const Home = () => {
  let dispatch = useDispatch();
  let { token } = useSelector((store) => store.productSlice);
  useEffect(() => {
    let jwtToken = {
      token: token,
    };
    dispatch(getProducts(jwtToken));
  }, []);
  return <div>Home</div>;
};

export default Home;
