
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bycrpt from "bcryptjs"
export async function POST(req){

    try {
        
        const {name,email,password}= await req.json();
        const hashedPassword = await bycrpt.hash(password,10)
        await connect();
         await User.create({name,email,password:hashedPassword})
        return NextResponse.json({message:"user registered"},{status:201})

    } catch (error) {
        return NextResponse.json({message:"error"},{status:501})
    }
}