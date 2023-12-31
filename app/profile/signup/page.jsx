import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signupform from '@/components/register/signupform';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Signup() {
    
    const session =await getServerSession(authOptions);
    if(session) redirect("/profile/info");
  
    return <Signupform/>
  
}
