import React, { useState,useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const Navigate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
      Navigate('/Home');
    }
    else 
    {
      Navigate("/")
    }
  },[])  

  const collectData=async ()=>{
    console.log(name,email,password);
    const  result = await fetch('https://sachin-backend.onrender.com/',{
      method:'post',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result.User));
    localStorage.setItem('token',JSON.stringify(result.auth));
    if(result)
    {      
      Navigate('/Home');
    }

  }

  return (
    <div className="register">
      <div className="signup" style={{display:"flex" , alignItems:"center" , justifyContent:"center" , width:"auto"}}>
        <div className="signup" style={{display:"flex" , alignItems:"center" ,flexDirection:"column", justifyContent:"center" , width:"auto", }}>
        <h1 style={{color:"yellow"}}>Register</h1>
        <input className="inputBox" type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter name" />
        <input className="inputBox" type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
        <input
          className="inputBox"
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <div style={{display:"flex" , justifyContent:"flex-end" , alignItems:"flex-end" , width:"100%"}}>
        <button className="btn" onClick={collectData} >Sign In</button>
        
        </div>
        <h2 className="tologin">Already registered?<Link className="tlink" to="/login">Login.</Link></h2>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
