import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../toolkits/crud'
import uuid4 from 'uuid4'
import Main from './Main'

const Header = () => {
    const [name,setName]=useState()
    const [surname,setSurname]=useState()

    const [nameError,setNameError]=useState(true)
    const [surnameError,setSurnameError]=useState(true)


    const user=useSelector((e)=>e.name)
    const [data,setData]=useState(useSelector((e)=>e.name))
    const dispatch=useDispatch()

    const handleSubmit=()=>{
        dispatch(add({name:name,id:uuid4(),surname:surname}))
        setSurname("")
        setName("")
    }
    useEffect(()=>{

        
         if(name===""){
          setNameError(true)
        }else if(name?.length===0){
          setNameError(false)
        }
        else if(name?.length>=9){
          setNameError(false)
        }else{
          setNameError(true)
        }
       
         if(surname===""){
          setSurnameError(true)
        }else if(surname?.length===0){
          setSurnameError(false)
        }
        else if(surname?.length>=9){
          setSurnameError(false)
        }else{
          setSurnameError(true)
        }
    },[name,surname])

    
    
  return (
    <div className='header'>
        <div className="form_div">
              <div className="inp_div">
                <label >Name</label>
                <input value={name} onChange={(e)=>(setName(e.target.value))} type="text" />
                <div className='error_div'>
                  <span className={nameError?'error_span-none':"error_span"}>ERROR</span>
                </div>
                
              </div>
        <div className="inp_div">
            <label >Surname</label>
            <input value={surname} onChange={(e)=>setSurname(e.target.value)} type="text" />
            <div className='error_div'>
                  <span className={surnameError?'error_span-none':"error_span"}>ERROR</span>
                </div>
        </div>
        <button onClick={()=>{
          if(surnameError===true && nameError===true&& surname!=undefined&&name!=undefined
            && surname!=""&&name!=""){
            return (handleSubmit())
          }
        }}>Add</button>
        </div>

        <Main data={data} setData={setData}/>
      
     
    </div>
  )
}

export default Header