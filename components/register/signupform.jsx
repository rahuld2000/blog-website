"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'


function  Signupform() {
  
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const router =useRouter();

let handlesubmit=async (e)=>{
    e.preventDefault();
    if(name || email || password){

try {

 const res =   await fetch('/api/auth/register',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        name, email, password
    })
 })
    if(res.ok){
        const form = e.target;
        form.reset();
        router.push("/profile")
    } else{
        console.log("User registration failed")
    }
} catch (error) {
    console.log("something is not right ",error)
}

    }
    else{
        setError("fill all the fields")
        return;
    }
}


  return (
    <div className='w-full min-h-screen '>
    <div>
    <form onSubmit={handlesubmit}>
    <input type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder='Name' />
    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/>
     <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
     <button>signup</button>
     </form>
     <div>
        {
            error && (
                <div>{error}</div>
            )
        }
       
     </div>
    </div>
     <Link href="/profile">already have a account</Link>
    </div>
  )
}

export default Signupform