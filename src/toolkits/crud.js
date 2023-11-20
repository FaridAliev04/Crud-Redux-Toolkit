import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";


export const crud =createSlice({
    name:"crud",
    initialState:data,
    reducers:{
        add:(state,action)=>{
            console.log(action)
            console.log(action.payload.header)
            return [...state,{id:action.payload.id,header:action.payload.header,title:action.payload.title}]
        },
        handleDelete:(state,action)=>{
            const {id}=action.payload
            console.log(id)
           return state.filter((e)=>{
                return e.id!=id
            })
        },
        uptate:(state,action)=>{
            
            const {test,upHeader,upTitle}=action.payload
            const data=state.find(e=>e.id===test)
            if(data){
                data.header=upHeader
                data.title=upTitle
            }
            

        }
    }
})

export const {add,handleDelete,uptate}=crud.actions
export default crud.reducer