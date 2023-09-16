import Image from 'next/image'
import React from 'react'

const getblog= async(id)=>{
 const res =  await fetch(`https://blog-website-lovat-six.vercel.app/api/posts/${id}`,{
    cache:"no-store",
  })

  if(!res.ok){
   throw new Error("failed to fetch")
  }
return res.json()

}

export default async function Singleblog({params}){

const data = await getblog(params.id);


  return (
   <div className='min-h-screen '>
 
      <div  className='m-4 p-4 ' >
      <p className='text-4xl font-medium'>{data.title}</p>
      <Image src={data.image} alt="error" width={450} height={450} className="object-cover mb-4" />
      <p className='p-2' >{data.description}</p>
    
      
       </div>
  

   </div>
  )
}


