
import React, { useState } from 'react'
import BaseUrl from '../Constants.js/URL'
import { useDispatch } from 'react-redux'
import { removeFeed } from '../Utils/FeedSlice'

import axios from 'axios'



const UserCard = ({user}) => {
   const{_id,firstName,lastName, skills, Bio, Photourl, gender, age}= user 
   const dispatch = useDispatch()
   const  [error,SetError]= useState("")
 
   const HandleRequest=async(status,toUserId)=>{
    try{const res = await axios.post(BaseUrl+"/requests/"+ status +"/"+toUserId,{},{withCredentials:true})

    dispatch(removeFeed(_id))
  }

catch(err){

 SetError(err?.response?.data)
}



  } 
  


  return (
    <div className="card  w-96 shadow-sm  bg-slate-700 border-base-300 rounded-box  border">
  <figure>
    <img className='m-4 rounded'
      src= {Photourl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-neutral-content">
      {firstName +" "+ lastName}
      
    </h2>
    <p className='text-neutral-content'>{Bio}</p>
    {age && gender &&<p className='text-neutral-content'>{age + ", "+ gender}</p>}
    <p className='text-neutral-content'>{skills}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline text-neutral-content bg-blue-500 cursor-pointer " onClick={()=>HandleRequest("ignored",_id)}>Ignore</div>
      <div className="badge badge-outline text-neutral-content bg-pink-600 cursor-pointer" onClick={()=>HandleRequest("interested",_id)}>Interested</div>
    </div>
  </div>
</div>
  )
}

export default UserCard
