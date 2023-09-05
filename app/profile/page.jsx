import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className='w-full min-h-screen bg-green-200'>
    <div>
    <form action="">
      <input type="text" placeholder='email' />
      <input type="text" placeholder='password' />
      <button>login</button>
      </form>
    </div>
    <Link href="profile/signup">Create a new account</Link>
    </div>
  )
}

export default Profile
