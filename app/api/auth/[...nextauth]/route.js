import NextAuth from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials';

import User from '@/models/User';
import bcrypt from "bcryptjs"
import connect from '@/utils/db';

export const authOptions={

  providers: [
  
   CredentialsProvider({
        name:"credentials",
       credentials:{},

       async authorize(credentials){
        const {email,password}= credentials;
       
        try {
           await connect();
          const user =await User.findOne({email})
          if(!user){
            return null;
          }
          const passwordMatch = await bcrypt.compare(password,user.password);
          if(!passwordMatch){
            return null;
          }
          return user;
        } catch (error) {
          
        }
       }
   })
  
  ],
  session:{
    strategy:"jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:"/profile"
  },
};

const handler = NextAuth(authOptions);
export {handler as GET,handler as POST}