import { createSlice } from "@reduxjs/toolkit";


const ConnectionsSlice = createSlice(
    {
   name:"connections",
   initialState: null,
   reducers:{
addconnection: (state,action)=>
{
    return action.payload;
},
removeconnection:(state,action)=>{
    return null
},
}




   }
)
export const { addconnection,removeconnection} = ConnectionsSlice.actions
export default ConnectionsSlice.reducer
