import { createSlice } from "@reduxjs/toolkit";


const connectionrequestsSlice = createSlice(
    {
   name:"connectionrequests",
   initialState: null,
   reducers:{
addconnectionrequests: (state,action)=>
{
    return action.payload;
},
removeconnectionrequests:(state,action)=>{
    const newArray = state.filter((r)=>r.fromUserId._id !== action.payload)
    return newArray
},
}




   }
)
export const { addconnectionrequests,removeconnectionrequests} = connectionrequestsSlice.actions
export default connectionrequestsSlice.reducer
