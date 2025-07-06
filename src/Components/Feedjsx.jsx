import React, { useEffect, useState } from 'react'
import BaseUrl from '../Constants.js/URL'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../Utils/FeedSlice'
import axios from "axios";
import UserCard from './UserCard';

const feed = () => {
  const feed = useSelector((store)=>store.feed)
 const disptach = useDispatch()
 const [error,SetError]= useState("")


  const getFeed = async()=>{
    if (feed) return
    try{ 
  const res = await axios.get( BaseUrl + "/users/feed",{ withCredentials :true })
   disptach(addFeed(res.data))
    }

    catch(err){

       SetError(err.response.data)
    }
  


  }
  useEffect (()=>{
  getFeed()

},[])
if (!feed) return
if (feed.length===0) return <h1 className='flex justify-center my-4'>No Connection found</h1>


return (
  <>
    {feed && (
      <div className="flex justify-center my-10 ">
        <UserCard user={feed[0]} />
      </div>
    )}
  </>
);
}
export default feed