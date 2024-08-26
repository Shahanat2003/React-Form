import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate=useNavigate()
    const[query,setQuery]=useState("")
   
    const [value,setValue]=useState([])
    useEffect(()=>{
        async function fetchData(){
            try{
                const res=await axios.get("http://localhost:3001/user")
                setValue(res.data)
                setQuery(res.data)
                
            }
            catch(error){
                console.log("fetching error",error)

            }
        }
        fetchData()
    },[])
    
    function handleDelete(id){
        setValue(value.filter((items)=>(
            id!==items.id
        )))

    }
    

    function handleSearch(e){
        setQuery(value.filter(r=>r.university.toLowerCase().includes(e.target.value.toLowerCase())))
       
    }
   
    
    
    
  return (
    <div >
       
        
        <div className='flex items-center justify-center mb-10 '>
        <button className='border-2 h-10 w-24 rounded-lg bg-blue-500 hover:bg-blue-600 text-white' onClick={
            ()=>navigate('/Form')
        }>Create user</button>
        </div>
        <div className='flex justify-center items-center'>
        <input type='text' placeholder='search....'className='border-2 w-30' onChange={handleSearch}></input>
        </div>
        <tr>
            <th className='py-2 px-4'>Name</th>
            <th className='py-2 px-4'>Email</th>
            <th className='py-2 px-4'>University</th>
            <th className='py-2 px-4'>Subject</th>
        </tr>
        {query.map((item)=>(
            
            <tr>
                <td className='py-2 px-4'>{item.name}</td>
                <td className='py-2 px-4'>{item.email}</td>
                <td className='py-2 px-4'>{item.university}</td>
                <td className='py-2 px-4'>{item.subject}</td>
                <button className='border-2 px-2 mr-4 bg-green-700 text-white rounded-lg hover:bg-green-800' onClick={()=>handleDelete(item.id)}>delete</button>
                <button className='border-2 px-2 mr-4 bg-red-500 text-white rounded-lg hover:bg-red-600'  onClick={()=>navigate(`/${item.id}`)}>Edit</button>

            </tr>
        ))}
      
    </div>
  )
}

export default Home
