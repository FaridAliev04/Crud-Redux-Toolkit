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
        },
        handleDelete:(state,action)=>{
            const {id}=action.payload
            console.log(id)
           return state.filter((e)=>{
                return e.id!=id
            })
        },
        uptate:(state,action)=>{
            
            const {test,upName}=action.payload
            const data=state.find(e=>e.id===test)
            if(data){
                data.name=upName
            }
            

        }
    }
})

export const {add,handleDelete,uptate}=crud.actions
export default crud.reducer