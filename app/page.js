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
    <div className="w-full h-[85vh] flex justify-center items-center ">
<div className="flex flex-row items-center justify-between w-full mx-48 max-md:flex-col max-md:mx-0 max-md:gap-5">
<div>
    <p className={`${satisfy.variable} font-sans text-5xl max-md:text-3xl max-md:px-5`}>Write Your Blogs and Thoughts here everyday.</p>
  </div>
  <div>
    <Image className="md:w-96 w-80 " src={homeimg} alt="home eror"/>
  </div>
 
</div>
    </div>
  )
}
