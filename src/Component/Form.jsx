import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate=useNavigate()
    const initialValue={
        name:"",
        email:"",
        university:"",
        subject:""

    }
    const[formValue,setFormValue]=useState(initialValue)
    const[formErrors,setFormErrors]=useState({})
    function handleChange(e){
        setFormValue({...formValue,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        if(validate()){
            alert("formSubmitted")
            
        navigate("/")
        axios.post("http://localhost:3001/user",formValue)
        }

    }
    function validate(){
        const error={}
        if(!formValue.name)
            error.name="enter the name"
        if(!formValue.email)
            error.email="enter the email"
        if(!formValue.university)
            error.university="enter the university"
        if(!formValue.subject)
            error.subject="selet the subject"
        setFormErrors(error)
        return Object.keys(error).length===0
    }
  return (
    <div className='bg-gray-200 min-h-screen'>
         <form onSubmit={handleSubmit}>
            <div  className='flex flex-col justify-center items-center ' >
                <div className="flex justify-center items-center mt-20 px-4 py-2">
            <label className='px-4'>Name</label>
            <input  type='text' name='name' className='border-2  w-60 rounded-lg py-2   ' onChange={handleChange} value={formValue.name} ></input>
            {formErrors.name&&(
                <p className='text-red-500'>{formErrors.name}</p>
            )}<br></br>
            </div>
           <div className=' py-2'>
            <labe className='px-5'>Email</labe>
            <input type='text' name='email' onChange={handleChange} className='border-2  w-60 rounded-lg py-2' value={formValue.email}></input>
            {formErrors.email&&(
                <p className='text-red-500'>{formErrors.email}</p>
            )}<br></br>
            </div>
           <div className='px-2 py-2'>
            <labe className='px-2'>University</labe>
            <input type='text' name='university'onChange={handleChange} className='border-2  w-60 rounded-lg py-2'  value={formValue.university}></input>
            {formErrors.university&&(
                <p className='text-red-500'>{formErrors.university}</p>
            )}<br></br>
            </div>
           <div className='py-2'>
            <label className='px-4'>subject</label>
            <select onChange={handleChange} name='subject'className='border-2  w-60 rounded-lg py-2'  value={formValue.subject} >
                <option value=''>select subject</option>
                <option value="english">English</option>
                <option value="english">Malayam</option>
                <option value="english">Computer</option>
            </select>
            {formErrors.subject&&(
                <p className='text-red-500'>{formErrors.subject}</p>
            )}<br></br>
            </div>
            
            <button  type='submit' className='border-2 text-white bg-blue-400 w-20 rounded-md hover:bg-blue-500'>Submit</button>
            
           
           
            </div>
        </form>
      
    </div>
  )
}

export default Form
