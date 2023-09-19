import Image from "next/image"
import homeimg from "./homeimg.jpg"
import { Satisfy } from "next/font/google"
const satisfy = Satisfy({
  subsets:['latin'],
  weight:["400"],
  variable:'--font-satisfy'
})
export default function Home()
 {
 
  return (
    <div className="w-full h-[85vh] flex justify-center items-center">
<div className="flex flex-row items-center justify-between w-full mx-48">
<div>
    <p className={`${satisfy.variable} font-sans text-5xl`}>Write Your Blogs and Thoughts here everyday.</p>
  </div>
  <div>
    <Image className="w-96" src={homeimg} alt="home eror"/>
  </div>
 
</div>
    </div>
  )
}
