"use client"

import { useState } from "react";
import axios from 'axios';

enum MODE {
  LOGIN="LOGIN",
  REGISTER="REGISTER",
  RESET_PASSWORD="RESET_PASSWORD",
  EMAIL_VERIFICATION="EMAIL_VERIFICATION"

}

const LoginPage = () => {

const [mode,setMode] = useState(MODE.LOGIN)
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState("")
const [message, setMessage] = useState("")

const formTitle = 
mode === MODE.LOGIN 
? "Log in" 
: mode === MODE.REGISTER 
? "Register" 
: mode === MODE.RESET_PASSWORD 
? "Reset Your Password"
: "Verify Your Email";

const buttonTitle = 
mode === MODE.LOGIN 
? "Login" 
: mode === MODE.REGISTER 
? "Register" 
: mode === MODE.RESET_PASSWORD 
? "Reset" 
: "Verify";

const handleSubmit = async (e: any) => {
  e.preventDefault();

  setIsLoading(true);


  const URL = 'https://projectx-backend-six.vercel.app/api/user/'
  const url_method = mode === MODE.LOGIN ? "login" : "register" 

  await axios.post(URL + url_method, {
    username: username,
    email: email,
    password: password
  })
  .then(function (response) {
    console.log(response);
    setUsername('')
    setEmail('')
    setPassword('')
    setMode(MODE.LOGIN)
    setMessage("Registration successful!");
  })
  .catch(function (error) {
    console.log(error);
    setError("Something went wrong. Please try again.");
  })
  
  .finally(() => {
    setIsLoading(false);
  });
}

if (isLoading) {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder="John" 
              className="ring-2 ring-gray-300 rounded-md p-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
          </div>
        ) : null}
        {mode !== MODE.EMAIL_VERIFICATION ? (
          <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Username or Email Address</label>
          <input 
            type="email" 
            name="email" 
            placeholder="example@gmail.com" 
            className="ring-2 ring-gray-300 rounded-md p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            
        </div>
        ) : (
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Verification Code</label>
          <input 
            type="text" 
            name="emailCode" 
            placeholder="Code" 
            className="ring-2 ring-gray-300 rounded-md p-4"/>
        </div>
        )}
        {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
          <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            className="ring-2 ring-gray-300 rounded-md p-4"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        ): null}
        {mode ===MODE.LOGIN && <div className="text-sm underline cursor-pointer"onClick={()=>setMode(MODE.RESET_PASSWORD)}>Forgot Password?</div>}
        <button 
          className="bg-black text-white p-2 rounded-md disabled:bg-white disabled:cursor-not-allowed" 
          disabled={isLoading}
        >
          {isLoading ? "Loading" : buttonTitle}
        </button>
        {error && <div className="text-red-600 ">{error}</div>}
        {mode === MODE.LOGIN && (
        <div 
          className="text-sm underline cursor-pointer" 
          onClick = {()=>setMode(MODE.REGISTER)}>
          {"Don't"} have an account?</div>)}

          {mode === MODE.REGISTER && (
        <div 
          className="text-sm underline cursor-pointer" 
          onClick = {()=>setMode(MODE.LOGIN)}>
          Have an account?</div>)}

          {mode === MODE.RESET_PASSWORD && (
        <div 
          className="text-sm underline cursor-pointer" 
          onClick = {()=>setMode(MODE.LOGIN)}>
          Go back to login</div>)}

          {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  )
};

export default LoginPage