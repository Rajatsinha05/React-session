import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  let {isLogin} = useSelector((store) => store.productSlice);
  
  //   let isLogin = false;

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
