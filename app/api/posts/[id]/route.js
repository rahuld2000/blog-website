import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET =async(request ,{paramas})=>{
 const {id}=paramas;
    try {
        await connect()

       const posts= await Post.findById(id);
        return new NextResponse(JSON.stringify(Post),{status:200});
    } catch (error) {
        return new NextResponse("error",{status:400});
    }

    
};