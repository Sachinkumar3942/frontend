import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import SignUp from "./components/SignUp";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <div className="App"> 
      
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route element={<Private />}> */}
            <Route path="/Home" element={<Home/>} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/update-product/:id" element={<UpdateProduct />} />
            <Route path="/products" element={<ProductList />} />
          {/* </Route> */}
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
