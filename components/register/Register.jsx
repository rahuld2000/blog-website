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
  };

  return (
    <div className="w-full min-h-screen ">
      <div>
        <form action="">
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button onClick={handleLogin}>login</button>
        </form>
      </div>
      {
        error && (
          <div>{error}</div>
        )
      }
      <Link href="profile/signup">Create a new account</Link>
    </div>
  );
};

export default Register;
