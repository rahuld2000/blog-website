import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Profile from '@/components/register/Profile';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Signup() {
    
    const session =await getServerSession(authOptions);
    if(!session) redirect("/profile");
  
    return <Profile/>
  
}
