import React, { useState } from 'react'

function UserForm() {
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
            alert("")
        }
        
    }
    function validate(){
        const error={}
        if(!formValue.name)
            error.name="enter the name"
        if(!formValue.email)
            error.name="enter the name"
        if(!formValue.university)
            error.name="enter the name"
        if(!formValue.subject)
            error.name="enter the name"
        setFormErrors(error)
        return Object.keys(error).length===0
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <labe>Name</labe>
            <input type='text' onChange={handleChange} value={formValue.name}></input><br/>
            {formErrors.name&&(
                <p>{formErrors.name}</p>
            )}
            <labe>Email</labe>
            <input type='text' onChange={handleChange} value={formValue.email}></input><br/>
            {formErrors.email&&(
                <p>{formErrors.email}</p>
            )}
            <labe>University</labe>
            <input type='text' onChange={handleChange} value={formValue.university}></input><br/>
            {formErrors.university&&(
                <p>{formErrors.university}</p>
            )}
            <label>subject</label>
            <select value={formValue.subject } onChange={handleChange}>
                <option value=''>select subject</option>
                <option value="english">English</option>
                <option value="english">Malayam</option>
                <option value="english">Computer</option>
            </select><br/>
            {formErrors.subject&&(
                <p>{formErrors.subject}</p>
            )}
            <button  type='submit'>Submit</button>
            
           
           
            
        </form>
      
    </div>
  )
}

export default UserForm
