import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDelete, uptate } from '../toolkits/crud'
import { useNavigate } from 'react-router'
import Params from './Params'

const Main = () => {
    const user=useSelector((e)=>e.name)
    const [test,setTest]=useState()
    const[disp,setDisp]=useState(true)

    const dispatch=useDispatch()

    const deleteItem=(id)=>{
        dispatch(handleDelete(id))
    }
    const handleUptate=()=>{
        dispatch(uptate())
    }
const uptataFunc=(e)=>{
   
        setTest(e.id)
    
    
}

    
  return (
    <div>
        {user.map((e)=>{
            return  test===e.id?<Params  test={test} setTest={setTest}/>: <div key={e.id} className='div_map'>
                <h1>{ e.name }</h1>
                <button onClick={()=>deleteItem(e)} className='map_btn-delete map_btn'>X</button>
                <button onClick={()=>uptataFunc(e)} className='map_btn-uptate map_btn'>Uptate</button>
            </div>
        })}
    </div>
  )
}

export default Main