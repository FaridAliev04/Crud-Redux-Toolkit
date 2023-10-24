import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { add, uptate } from '../toolkits/crud'
import { data } from '../data'
const Params = ({setTest,test}) => {
    const [upName,setUpName]=useState("")
    const [upSurname,setUpSurname]=useState()
    const user=useSelector((e)=>e.name)
    const disp=useDispatch()

    // const uptate=()=>{
    //  user.map((e)=>{
    //   if(e.id==test){
    //     return {...e,id:test,name:upName}
    //   }
    //  })
    //  console.log(user)
    // }
  
      
const uptateFunc=()=>{
    disp(uptate({upName:upName,test:test}))
    setTest(null)
    console.log(user)
}

 

    
  return (
    <div className='params'>
      <div>
        <label htmlFor="">Name</label>
        <input onChange={(e)=>setUpName(e.target.value)} type="text" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Surname</label>
        <input type="text" name="" id="" />
      </div>
      <button onClick={()=>uptateFunc()} >Uptate</button>
      <button onClick={()=>setTest(null)}>X</button>
    </div>
  )
}

export default Params