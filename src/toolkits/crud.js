import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";


export const crud =createSlice({
    name:"crud",
    initialState:data,
    reducers:{
        add:(state,action)=>{
            console.log(action)
            console.log(action.payload.name)
            return [...state,{id:action.payload.id,name:action.payload.name,surname:action.payload.surname}]
        }
    }
})

export const {add}=crud.actions
export default crud.reducer