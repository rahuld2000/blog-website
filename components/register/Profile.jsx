"use client"
import { signOut, useSession } from 'next-auth/react'

import React from 'react'

function Profile() {
 
  const {data:session} = useSession();
  return (
    <div className='w-full h-[85vh] flex justify-center items-center flex-col gap-10'>
   
    <p className='text-2xl font-bold'>{session?.user?.name}</p>
    <p>{session?.user?.email}</p>
    <button className=" w-52 p-4 bg-[#D80032] text-white rounded-md hover:bg-[#a10026]"  onClick={()=>{
   signOut();
    }}>signout</button>
    </div>
  )
}

export default Profile