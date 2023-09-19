"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import {useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let handleLogin = async (e) => {
    e.preventDefault();

    if(email && password){
      try {
        const res = await signIn("credentials", {
          email,
          password,
          redirect:false,
        });
        if (res.error) {
          setError("invalid details");
        return;
        }
       router.replace("/profile/info")
      } catch (error) {
        console.log(error)
      }

    }
    else{
      setError("Fill all details")
    }

   
  };

  return (
    <div className="w-full h-[85vh]  flex flex-col justify-center gap-3 items-center">
      <div >
        <form className="flex flex-col gap-8">
          <input  className="p-4 w-96 rounded-md"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input className="p-4 rounded-md"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="mx-3 p-4 bg-black text-white rounded-md hover:bg-zinc-800" onClick={handleLogin}>login</button>
        </form>
      </div>
      {
        error && (
          <div className="w-44 text-sm p-1 text-white rounded-sm text-center bg-red-600">{error}</div>
        )
      }
      <Link className="underline" href="profile/signup">Create a new account</Link>
    </div>
  );
};

export default Register;
