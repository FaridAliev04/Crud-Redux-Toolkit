import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../toolkits/crud'
import uuid4 from 'uuid4'
import Main from './Main'

const Header = () => {
    const [header,setHeader]=useState()
    const [title,setTitle]=useState()

    const user=useSelector((e)=>e.name)
    const [data,setData]=useState(useSelector((e)=>e.name))
    const dispatch=useDispatch()

    const handleSubmit=()=>{
        dispatch(add({header:header,id:uuid4(),title:title}))
        setTitle("")
        setHeader("")

    }



    
  return (
    <div className='header'>
        <div className="form_div">
              <div className="inp_div">
                <label >Header</label>
                <input value={header} onChange={(e)=>(setHeader(e.target.value))} type="text" />                
              </div>
        <div className="inp_div">
            <label >Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
        </div>
        <button onClick={()=>{
          if(header!="" && title!=""){
             return handleSubmit()
            }
        }}>Add</button>
        </div>

        <Main header={header} title={title} data={data} setData={setData}/>
      
     
    </div>
  )
}

export default Header