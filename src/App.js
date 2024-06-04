import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { desc, getProducts, inc, postData } from "./redux/slice/productReducer";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
