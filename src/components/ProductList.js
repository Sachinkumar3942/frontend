import React, { useEffect, useState,useCallback } from 'react'
import { Link } from 'react-router-dom';
const ProductList = () => {
  const [products,setProducts]=  useState([]);
  

  

  // const getProducts=async()=>{
  //   try
  //   {
  //     let data=await fetch('http://localhost:5000/product-list',{
  //       headers:{
  //         authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
  //       }
  //     });
  //     data=await data.json();
  //     setProducts(data);
  //     console.log("Products",products)
  //   }
  //   catch 
  //   {
  //     console.log("Fasiled to fetch products list ") ;  
  //     setProducts([]) ;  
  //   }
   
  // }
  const getProducts = useCallback(async () => {
    try {
      let data = await fetch('http://localhost:5000/product-list', {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      });
      data = await data.json();
      setProducts(data);
      console.log("Products", products);
    } catch {
      console.log("Failed to fetch products list ");
      setProducts([]);
    }
  }, [products]);

  useEffect(()=>{
    getProducts();
  },[getProducts])

  const searchHandle=async(event)=>{
    let key=event.target.value;
    if(key){
      let data=await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      });
      data=await data.json();
      if(data)
      setProducts(data);
    }
    else{
      getProducts();
    }
  }
  
  const deleteItem=async(id)=>{
    let data=await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete",
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    data=await data.json();
    if(data)
    {
      getProducts();
    }
  }

  return (
    <div className='product-list'>
        <h2>ProductList</h2>
        <input className='search' onChange={searchHandle} type="text" placeholder='Search for brands,products'/>
        <ul>
            <li>S. No.</li>
            <li>Name</li>
            <li>Price</li>
            <li>Brand</li>
            <li>Category</li>
            <li>Update</li>
            <li>Delete</li>
        </ul>
        { products && 
           products.map((item,index)=>
              <ul>
                  <li>{index+1}</li>
                  <li>{item.name}</li>
                  <li>{item.price}</li>
                  <li>{item.brand}</li>
                  <li>{item.category}</li>
                  <li className='del'>
                    <button className='delete' onClick={()=>{deleteItem(item._id)}} >Delete</button>                    
                  </li>
                  <li><Link className='link' to={"/update-product/"+item._id}>Update</Link></li>
              </ul> 
           )            
        }
    </div>
  )
}

export default ProductList;
