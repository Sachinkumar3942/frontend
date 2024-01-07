import React, { useEffect } from 'react'
import { useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const params =useParams()
  const Navigate=useNavigate();
  // const [error, setError] = useState(false);
  
  
  const getProductDetails=async()=>{
    try
    {
      let data=await fetch(`http://localhost:5000/product/${params.id}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      data=await data.json();
      setName(data.name);
      setPrice(data.price);
      setBrand(data.brand);
      setCategory(data.category);
    }
    catch 
    {
      console.log("Failed to fetch updated products ") ;
    }
   
  }

  useEffect(()=>{
    getProductDetails();
  },[getProductDetails])

  const handleClick = async () => {
    
    const userId = JSON.parse(localStorage.getItem("user"))._id;
     await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, brand, category, userId }),
      headers:{
        "Content-Type":"application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    // data = await data.json();
    
    Navigate('/products')

  };

  return (
    <div className="addProduct">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter product name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {/* {error && !name && <span className="error">Enter valid name</span>} */}
      <input
        className="inputBox"
        type="number"
        placeholder="Enter price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {/* {error && !price && <span className="error">Enter valid price</span>} */}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter brand name"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
        value={brand}
      />
      {/* {error && !brand && <span className="error">Enter valid brand</span>} */}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {/* {error && !category && ( */}
        {/* <span className="error">Enter valid category</span> */}
      {/* )} */}
      <button onClick={handleClick}>Update</button>
    </div>
  );
};
export default UpdateProduct;