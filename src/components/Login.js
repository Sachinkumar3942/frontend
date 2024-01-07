import React, { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const Navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            Navigate('/Home')
        }
    },[Navigate])
    const handleLogin=async ()=>{
        let result= await fetch('https://main--monumental-lokum-1725ab.netlify.app/login',{
           method: 'post',
           body:JSON.stringify({email,password}),
           headers:{
            "Content-Type":"application/json"
           }
        });
        result=await result.json();
        if(result.auth){
            localStorage.setItem('user',JSON.stringify(result.User));
            localStorage.setItem('token',JSON.stringify(result.auth));
            Navigate('/Home');
        }
        else{
            alert("Invalid username or password");
        }
    }
    return(
        <div className='login'>
            <h1 className='tologin' >Login</h1>
            <input className="inputBox" type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input className="inputBox" type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} >Login</button>
            <h2 className='tologin' >Not yet registered.<Link className="tlink" to="/">Signup</Link> </h2>
        </div>
    )
}

export default Login;