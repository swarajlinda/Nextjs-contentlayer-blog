import React from 'react'
import Link from "next/link"
import profileImg from "@/public/profile-img.png"
import Image from 'next/image'
const Logo = () => {
  return (
   <Link href="/" className='flex items-center text-dark '>
   <div className='w-16 rounded-full overflow-hidden border border-solid border-dark '>
   <Image src={profileImg} alt="codebucks" className='w-full h-auto rounded-full mr-4 ' /> 
   </div>
   <span className='font-bold text-xl '>CodeBucks</span>
   </Link>
  )
}

export default Logo