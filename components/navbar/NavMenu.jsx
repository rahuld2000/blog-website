import Link from 'next/link'
import React from 'react'

function NavMenu() {
  return (
   
          <>
       <Link href="/">HOME</Link>
          <Link href="/blog">BLOGS</Link>
          <Link href="/dashboard">DASHBOARD</Link>
          <Link href="/profile">PROFILE</Link>
          </>
       
  )
}

export default NavMenu