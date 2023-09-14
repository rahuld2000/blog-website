"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

import React from 'react'

function Profile() {
  const router =useRouter();
  const {data:session} = useSession();
  return (
    <div>
    <h2>info</h2>
    <p>{session?.user?.name}</p>
    <p>{session?.user?.email}</p>
    <button onClick={()=>{
   signOut();
    }}>signout</button>
    </div>
  )
}

export default Profile