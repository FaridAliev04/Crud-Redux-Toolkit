import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { add, uptate } from '../toolkits/crud'
import { data } from '../data'
const Params = ({setTest,test}) => {
    const [upHeader,setUpHeader]=useState("")
    const [upTitle,setUpTitle]=useState("")
  
    const user=useSelector((e)=>e.name)
    const disp=useDispatch()


  
      
const uptateFunc=()=>{
    disp(uptate({upHeader:upHeader,test:test,upTitle:upTitle}))
    setTest(null)
    console.log(user)
}

 

    
  return (
    <div className='params'>
      <div>
        <label htmlFor="">Header</label>
        <input  onChange={(e)=>setUpHeader(e.target.value)} type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Title</label>
        <input  onChange={(e)=>setUpTitle(e.target.value)} type="text" name="" id="" />
      </div>
      <button onClick={()=>uptateFunc()} >Uptate</button>
      <button onClick={()=>setTest(null)}>X</button>
    </div>
  )
}

export default Params