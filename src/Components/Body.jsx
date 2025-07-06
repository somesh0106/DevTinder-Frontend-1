import React, { useEffect, useState } from 'react'
import NavBar from "./NavBar"
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import BaseUrl from '../Constants.js/URL'
import { addUser } from '../Utils/userSlice'
import axios from "axios";

const Body = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const userData = useSelector((store)=>store.user)
   const [error,SetError]= useState("")

   const fetchUser = async ()=>{
  if (userData) return ;
  try{
    const res = await axios.get(BaseUrl+"/profile/view",{
   withCredentials:true
    })
   dispatch(addUser(res.data))
}
  catch(err){
if (err.status===401){
  navigate("/login") }
 SetError(err.response.data)

}
   }
 useEffect(()=>
  {
    fetchUser()
  },[]
 )




  return (
   

     <> <NavBar/>
       < Outlet/>
       {/* <Footer/> */}

       </> 
  )
}

export default Body
