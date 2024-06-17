import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../redux/slice/productReducer";

const AddProduct = () => {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState();
  let [category, setCategory] = useState("");
  let [image, setImage] = useState("");
  let dispatch = useDispatch();
  let { token } = useSelector((store) => store.productSlice);
  console.log("token: ", token);

  const handleSubmit = (e) => {
    e.preventDefault();

    let product = {
      title: title,
      price: price,
      category: category,
      image: image,
      token: token,
    };
    dispatch(postData(product));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />

        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="url"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
        />

        <input
          type="Number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
