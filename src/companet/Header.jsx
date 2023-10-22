import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../toolkits/crud'
import uuid4 from 'uuid4'

const Header = () => {
    const [name,setName]=useState()
    const [surname,setSurname]=useState()
    const user=useSelector((e)=>e.name)
    const dispatch=useDispatch()
    console.log(user)

    const handleSubmit=()=>{
        dispatch(add({name:name,id:uuid4(),surname:surname}))
        setSurname("")
        setName("")
    }
  return (
    <div className='header'>
        <div className="inp_div">
            <label >Name</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" />
        </div>
        <div className="inp_div">
            <label >Surname</label>
            <input onChange={(e)=>setSurname(e.target.value)} type="text" />
        </div>
        <button onClick={()=>handleSubmit()}>Add</button>
     
    </div>
  )
}

export default Header