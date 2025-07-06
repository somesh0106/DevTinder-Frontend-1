import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BaseUrl from '../Constants.js/URL'
import { useDispatch, useSelector } from 'react-redux'

import { addconnectionrequests, removeconnectionrequests } from '../Utils/connectionrequests'

const ConnectionRequests = () => {

  const connectionrequests = useSelector((store)=>store.connectionrequests)
   const  [error,SetError]= useState("")
   const dispatch = useDispatch()




   const requesthandler = async(status,_id)=>{
try{
  const response = await axios.post(BaseUrl+"/profile/"+status+"/"+_id , {},{withCredentials:true})
  dispatch(removeconnectionrequests(_id))
   }
 catch(err){

 SetError(err?.response?.data)
}
   }
  


 const getconnectionrequests = async ()=>{
   

try { const res = await axios.get( BaseUrl +"/users/connectionrequests" , {withCredentials:true})
dispatch(addconnectionrequests(res?.data?.data))

console.log(res.data.data)

}
catch(err){

 SetError(err?.response?.data)
}

}
    
useEffect(() => {
  getconnectionrequests(); // ✅ your function
}, []); 
if (!connectionrequests) return
if(connectionrequests.length===0) return <h1 className='flex justify-center my-4'>No Connection Request Found</h1>





  return ( <div className='  min-h-screen'>
    {/* <h1 className='flex justify-center my-5 text-2xl'>Connections</h1> */}
    <div className="badge badge-ghost flex justify-center items-center my-5 text-2xl mx-auto h-14 w-96 p-1 bg-black text-white">Connections Requests</div>
    {connectionrequests.map((connectionrequests)=> {
   const {lastName,firstName,Photourl,gender,age,Bio} = connectionrequests.fromUserId

return (<div key={connectionrequests._id} className="card card-side  shadow-sm bg-slate-900 w-96 my-2 m-auto">
  <figure>
    <img className='w-52 h-52 m-4 rounded'
      src={Photourl}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-neutral-content">{firstName +" "+ lastName}</h2>
    {age&& gender && <h2 className="card-title text-neutral-content"> {gender +", "+ age}</h2>}
    <p className='w-24'>{Bio}</p>
    <div className="card-actions justify-center flex">
      <button className="btn btn-primary w-18" onClick={()=>requesthandler("accepted", connectionrequests.fromUserId._id)}>Accept</button>
      <button className="btn  bg-red-800 w-18" onClick={()=>requesthandler("rejected", connectionrequests.fromUserId._id)}>Reject</button>
    </div>

  
  </div>
  
</div>
)
   
    }
        
        
        
        
   

   
  )
}
 </div> )
}

export default ConnectionRequests