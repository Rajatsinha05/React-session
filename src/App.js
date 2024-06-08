import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { desc, getProducts, inc, postData } from "./redux/slice/productReducer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    // dispatch(
    //   postData({
    //     title: "title",
    //     price: 8788,
    //     image: "url",
    //     category: "category",
    //   })
    // );
    // dispatch(getProducts());
    // dispatch(inc(50));
    // dispatch(desc(10));
  }, []);
  
  let data = useSelector((store) => store);
  console.log(data);
  return (
   <div>
   
   <Navbar/>
   <AllRoutes/>
   </div>
  );
}

export default App;
