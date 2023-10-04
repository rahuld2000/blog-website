"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

 let handletoggle=()=> {
  
    setToggle(!toggle)

  }

  return (
    <div className="flex w-full justify-between px-10 p-8 items-center ">
      <Link className="font-bold text-xl" href="/">
        BLOGSPOT.
      </Link>
      <div>
      <div onClick={handletoggle}>
      {toggle ?   <XMarkIcon width={35}/>: <Bars4Icon  className="md:hidden" width={35} />  }
     
      </div>
     
      {toggle && (
        <div className="p-8 right-0 w-[75vw] absolute flex flex-col h-[92vh] gap-10 bg-[#F0F0F0]"><NavMenu /></div>)}
      </div>

      <div className="space-x-10 max-md:hidden ">
        <NavMenu />
      </div>
     
    </div>
  );
};

export default Navbar;
