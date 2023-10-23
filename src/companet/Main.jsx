import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDelete } from '../toolkits/crud'

const Main = () => {
    const user=useSelector((e)=>e.name)
    const dispatch=useDispatch()
    const deleteItem=(id)=>{
        dispatch(handleDelete(id))
    }
  return (
    <div>
        {user.map((e)=>{
            return <div className='div_map'>
                <h1>{e.name}</h1>
                <button onClick={()=>deleteItem(e)} className='map_btn-delete map_btn'>X</button>
                <button className='map_btn-uptate map_btn'>Uptate</button>
            </div>
        })}
    </div>
  )
}

export default Main