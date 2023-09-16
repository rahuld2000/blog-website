"use client"
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from '@/firebase/config';
import { useRouter } from 'next/navigation';
const storage = getStorage(app);
const CreatePost = () => {
  
const session =useSession();
const[file,setfile]=useState(null)
const[media,setmedia]=useState("")
  const[title ,settitle]=useState("");
  const[description,setdescription]=useState("");
const router= useRouter();
  useEffect(()=>{
    const upload=()=>{
      
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      };
      
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, 'images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
      
            // ...
      
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, 
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setmedia(downloadURL);
          });
        }
      );
    }
    file && upload()
   
  },[file])


  let handlesubmit= async(e)=>{
    e.preventDefault();
    try {
    const res=  await fetch("https://blog-website-lovat-six.vercel.app/api/posts",{
        method:"POST",
        body: JSON.stringify({
          title,description,username:session.data.user.name,image:media
        })
      })
      if(res.ok){
        router.back();
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex  items-center justify-center w-full min-h-screen'>
    <div className=' flex-row'>
    <form>
    <input type='file' onChange={(e)=>setfile((e).target.files[0])} />
    <input type="text" onChange={(e)=>settitle((e).target.value)} placeholder='title'/>
     <input type="text" onChange={(e)=>setdescription((e).target.value)} placeholder='text' />
     <button onClick={handlesubmit}>submit</button>
     </form>
    </div>
    
    
    </div>
  )
}

export default CreatePost