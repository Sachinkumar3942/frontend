import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Private from "./components/Private";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
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
            <Route path="/logout" element={<h1></h1>} />
          
          {/* </Route> */}
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
