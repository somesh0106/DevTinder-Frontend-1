import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import BaseUrl from '../Constants.js/URL'
import { removeUser } from '../Utils/userSlice'

const NavBar = () => {
  const [error,SetError]= useState("")
   const user = useSelector((store)=>store.user)
   const dispatch= useDispatch()
   const navigate = useNavigate()
   const HandleLogout = async()=>{
 try{  
  await axios.post(BaseUrl + "/logout", {},{withCredentials:true} )
  dispatch( removeUser())
  return navigate("/Login")
 }
 catch(err){
   SetError(err.response.data)
 }



   }
  return (
   
    <div className="navbar bg-slate-700  shadow-sm">
  <div className="flex-1">
    <Link to={user ? "/" : "/login"} className="btn btn-ghost text-xl text-neutral-content bg-black">DevTinder 🧑‍💻</Link>
  </div>
 {user && <div className="flex gap-1">
    <p className='text-neutral-content '> Welcome {user.firstName}</p>
    <div className="dropdown dropdown-end mx-4">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.Photourl} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  bg-slate-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to = "/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to = "/connections">Connections</Link></li>
        <li><Link to = "/connectionrequests">Connection Requests</Link></li>
        <li><a onClick={HandleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
}
</div>
  )
}

export default NavBar
