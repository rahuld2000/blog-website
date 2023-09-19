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
    <div className="w-full h-[85vh]  flex flex-col justify-center gap-3 items-center">
    <div>
    <form className="flex flex-col gap-8" onSubmit={handlesubmit}>
    <input   className="p-4 w-96 rounded-md"  type="text"  onChange={(e)=>{setName(e.target.value)}} placeholder='Name' />
    <input  className="p-4 w-96 rounded-md"  type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/>
     <input   className="p-4 w-96 rounded-md" type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
     <button className="mx-3 p-4 bg-black text-white rounded-md hover:bg-zinc-800">signup</button>
     </form>
     <div>
        {
            error && (
                <div className="w-44 text-sm p-1 text-white rounded-sm text-center bg-red-600">{error}</div>
            )
        }
       
     </div>
    </div>
     <Link className="underline" href="/profile">already have a account</Link>
    </div>
  )
}

export default Signupform