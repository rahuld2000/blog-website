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
  const { data, mutate , error, isLoading } = useSWR(`http://localhost:3000/api/posts?username=${session?.data?.user.name}`, fetcher)

  const handleDelete = async (id) => {
    try {
      await fetch(`$http://localhost:3000/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
<div>
<button onClick={()=>router.push("/dashboard/newpost")}>New Post</button></div>
<div>
{
    data?.map((item)=>(
     
        <div className='p-8 m-4 ' key={item._id}>
        <Image src={item.image} width={200} height={200}  alt="Picture of the author"/>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <span className='space-x-6'> <button className='bg-white' onClick={()=>handleDelete(item._id)}>delete</button>
            <button className='bg-white' onClick={()=>router.push(`/blog/${item._id}`)}>edit</button></span>
        </div>
  
    ))
}
</div>
    </div>
  )
}

