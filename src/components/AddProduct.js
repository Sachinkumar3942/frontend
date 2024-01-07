import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(false);

  const handleClick = async () => {
    if (!name || !price || !brand || !category) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
   await fetch("https://main--monumental-lokum-1725ab.netlify.app/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, brand, category, userId }),
      headers:{
        "Content-Type":"application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    setName("");
    setBrand("");
    setCategory("");
    setPrice("");
  };

  return (
    <div className="addProduct">
      <h1>AddProduct</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error && !name && <span className="error">Enter valid name</span>}
      <input
        className="inputBox"
        type="number"
        placeholder="Enter price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error && !price && <span className="error">Enter valid price</span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter brand name"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
        value={brand}
      />
      {error && !brand && <span className="error">Enter valid brand</span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {error && !category && (
        <span className="error">Enter valid category</span>
      )}
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default AddProduct;
