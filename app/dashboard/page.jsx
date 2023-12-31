import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation';
import UserPost from '@/components/blogs/UserPost';
import { authOptions } from '../api/auth/[...nextauth]/route';



export default async function Profile() {
  
  const session =await getServerSession(authOptions);
  if(!session) redirect("/profile")
  
  return <UserPost/>
}
