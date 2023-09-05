import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
  
    <div className='flex w-full justify-between px-10 p-8 bg-purple-300'>
   <Link href="/">BLOGSPOT</Link>
 <div className='space-x-10'>
    <Link href="/">HOME</Link>
    <Link href="/blog">BLOGS</Link>
    <Link href="dashboard">DASHBOARD</Link>
    <Link href="profile">PROFILE</Link>
 </div>
 </div>
   
  )
}

export default Navbar
