import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditDetails() {
    const navigate=useNavigate()
    const{id}=useParams()
    const initialValue={
        name:"",
        email:"",
        university:"",
        subject:""

    }
    const [formValue,setFormValue]=useState(initialValue)
    function handleChange(e){
        setFormValue({...formValue,[e.target.name]:e.target.value})

    }
    useEffect(()=>{
         async function fetchData(){
            try{
                const res=await axios.get(`http://localhost:3001/user/${id}`)
                setFormValue(res.data)

            }
            catch(error){
                console.log("fetching error",error)
            }
        }
        fetchData()
    },[id])
    async function handleSubmit(e){
        e.preventDefault()
        try{
           await axios.put(`http://localhost:3001/user/${id}`,formValue)
           alert("update the form")
           navigate('/')

        }
        catch(error){
            console.log("updating error")
        }
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit} >
            <labe>Name</labe>
            <input type='text' name='name' onChange={handleChange} value={formValue.name} ></input><br/>
            
           
            <labe>Email</labe>
            <input type='text' name='email' onChange={handleChange}  value={formValue.email}></input><br/>
            
           
            <labe>University</labe>
            <input type='text' name='university'onChange={handleChange}  value={formValue.university}></input><br/>
           
           
            <label>subject</label>
            <select onChange={handleChange} name='subject'  value={formValue.subject} >
                <option value=''>select subject</option>
                <option value="english">English</option>
                <option value="english">Malayam</option>
                <option value="english">Computer</option>
            </select><br/>
            
            
            <button  type='submit'>Submit</button>
            
           
           
            
        

        </form>
      
    </div>
  )
}

export default EditDetails
