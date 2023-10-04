"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from "swr";

export default function UserPost() {
    const session =useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate , error, isLoading } = useSWR(`https://blog-website-lovat-six.vercel.app/api/posts?username=${session?.data?.user.name}`, fetcher)

  const handleDelete = async (id) => {
    try {
      await fetch(`https://blog-website-lovat-six.vercel.app/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className='w-full h-[85vh]'>
<div className='flex w- full justify-end md:mr-16'>
<button className='m-5 p-4 rounded-full bg-black text-white w-36' onClick={()=>router.push("/dashboard/newpost")}>New Post +</button></div>
<div>
{
    data?.map((item)=>(
     
        <div className=' md:p-8 m-4 flex gap-5 md:mx-20 max-md:flex-col' key={item._id}>
        <Image className='rounded-lg' src={item.image} width={220} height={220}  alt="Picture of the author"/>
        <div className='flex flex-col gap-4 p-2'>
            <p className='text-3xl font-semibold'>{item.title}</p>
            <span className='space-x-10'> <button className='bg-[#D80032] rounded-lg px-2 text-white p-1 border-none text-sm' onClick={()=>handleDelete(item._id)}>Delete</button>
            <button className='bg-black rounded-lg px-2 p-1 text-sm text-white ' onClick={()=>router.push(`/blog/${item._id}`)}>Open</button></span>
            </div>
        </div>
  
    ))
}
</div>
    </div>
  )
}

