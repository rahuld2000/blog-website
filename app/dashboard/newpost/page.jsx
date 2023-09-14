import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation';
import CreatePost from '@/components/blogs/CreatePost';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



export default async function Profile() {
  
  const session =await getServerSession(authOptions);
  if(!session) redirect("/profile")
  
  return <CreatePost/>
}
