import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';
import Register from '@/components/register/Register';


export default async function Profile() {
  
  const session =await getServerSession(authOptions);
  if(session) redirect("/profile/info")
  
  return <Register/>
}
