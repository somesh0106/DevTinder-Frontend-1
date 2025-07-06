import { createSlice } from "@reduxjs/toolkit";


const FeedSlice = createSlice(
    {
   name:"feed",
   initialState: null,
   reducers:{
addFeed: (state,action)=>
{
    return action.payload;
},
removeFeed:(state,action)=>{
     const newArray = state.filter((r)=>r._id !== action.payload)
    return newArray
},
}




   }
)
export const { addFeed,removeFeed} = FeedSlice.actions
export default FeedSlice.reducer