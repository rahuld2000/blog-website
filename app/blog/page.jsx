import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const getblog= async()=>{
 const res =  await fetch(`https://blog-website-lovat-six.vercel.app/api/posts`,{
    cache:"no-store",
  })

  if(!res.ok){
   throw new Error("failed to fetch")
  }
return res.json()

}

export default async function blog(){

const data = await getblog();



  return (
   <div className='p-8 w-full min-h-screen' >
  {
    data.map((item)=>(
      <Link key={item._id}  href={`/blog/${item._id}`}>
      <div  className='m-4  p-4 flex gap-24 ' >
      <Image className='rounded-lg' src={item.image} width={340} height={300}  alt="Picture of the author"/>
      <div className='w-[800px] overflow-hidden p-1'>
      <p className='text-3xl font-semibold'>{item.title}</p>
      <p className='text-gray-700 h-48 p-1'>{item.description}</p>
      </div>
     
       </div>
       </Link>
    ))
  }

   </div>
  )
}


export const runtime = "edge"