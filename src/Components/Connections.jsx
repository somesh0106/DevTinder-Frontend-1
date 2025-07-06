import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BaseUrl from '../Constants.js/URL'
import { useDispatch, useSelector } from 'react-redux'
import { addconnection } from '../Utils/Connections'

const Connections = () => {
    const dispatch = useDispatch()
    const connections = useSelector((store)=>store.connections)
    const  [error,SetError]= useState("")

    const getConnections = async ()=>{
    try{const res = await axios.get(BaseUrl+"/connectionrequests/connections",{withCredentials:true})
    dispatch(addconnection(res?.data?.data))
    console.log(res?.data?.data)
   }
    
   catch(err){
    SetError(err?.response?.data)
   }
}
   


   

  useEffect(()=>{
   getConnections()
  },[])

 if (!connections) return
if(connections.length===0) return <h1 className='flex justify-center my-4'>No Connections Found</h1>




   return ( <div className='min-h-screen'>
    {/* <h1 className='flex justify-center my-5 text-2xl'>Connections</h1> */}
    <div className="badge badge-ghost flex justify-center items-center my-5 text-2xl mx-auto h-14 w-96 p-1 bg-black text-white ">Connections</div>
    {connections.map((connections)=> {
   const {lastName,firstName,Photourl,gender,age,Bio} = connections

return (<div key={connections._id} className="card card-side  shadow-sm bg-slate-900 w-96 my-2 m-auto">
  <figure>
    <img className='w-52 h-52 m-4 rounded'
      src={Photourl}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-neutral-content">{firstName +" "+ lastName}</h2>
    {age&& gender && <h2 className="card-title text-neutral-content"> {gender +", "+ age}</h2>}
    <p className='w-24'>{Bio}</p>
  
  </div>
</div>
)
   
    }
        
        
        
        
   

   
  )
}
 </div> )
}

export default Connections