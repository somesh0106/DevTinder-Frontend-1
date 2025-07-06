import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import BaseUrl from "../Constants.js/URL"
import signup from "./signup";

const Login = () => {
  const [emailId,setemailID]= useState("virat@gmail.com")
const[passWord,setpassWord] = useState("Virat@123")
const [error,seterror] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()




const handleLogin=async()=>{
try{const res = await axios.post(BaseUrl+"/login", {
  emailId,
  passWord
}, {withCredentials:true}

)
dispatch(addUser(res.data))
navigate("/")
console.log(res)
}


catch(err)
{
  seterror(err?.response?.data || "Invalid Credentials!")
}



}
  return (
    <div className="flex justify-center items-center my-4">
      <div className="card bg-slate-700 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-neutral-content">Login </h2>

          {/* Label containing icon and input on the same line */}
          <label className="flex items-center gap-2 border border-slate-600  bg-white   rounded px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500">
            <svg
              className="h-5 w-5 opacity-50 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <input
              className="bg-transparent flex-1 focus:outline-none placeholder-slate-400 text-slate-900"
              value={emailId}
              type="email"
              placeholder="Email ID" 
              onChange={(e)=>setemailID(e.target.value)}
              required
            />
          </label>

          <div className="validator-hint hidden mt-1 text-red-400 text-sm">
            Enter valid email address
          </div>

          {/* /////////////////////////////////////////////// */}
          <label className="input validator flex my-2 items-center gap-2 border border-slate-600 rounded px-2  focus-within:ring-2 focus-within:ring-blue-500">
            <svg
              className="h-5 w-5 opacity-50 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </svg>
            <input
              className="bg-transparent flex-1 focus:outline-none placeholder-slate-400 text-slate-900"
              value={passWord}
              type="password"
              required
              placeholder="Password"
              onChange={(e)=>setpassWord(e.target.value)}
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>

          <p className="validator-hint hidden mt-1 text-slate-400 text-sm">
            Must be more than 8 characters, including:
            <br />
            At least one number
            <br />
            At least one lowercase letter
            <br />
            At least one uppercase letter
          </p>
          <p className="text-red-400 flex  justify-center">{error}</p>
          <div className="card-actions  flex justify-center">
            <button className="btn btn-primary text-neutral-content bg-black" onClick={handleLogin}>
              Login
            </button>
             <Link to="/signup">
  <button className="btn btn-primary text-neutral-content bg-black">
    Sign Up
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
