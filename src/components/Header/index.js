import React from 'react'
import Logo from "./Logo"
import Link from "next/link"
import {LinkedinIcon} from '../icons'
import {TwitterIcon} from '../icons'
import {GithubIcon} from '../icons'
import {DribbbleIcon} from '../icons'
import {SunIcon} from '../icons'
const Header  = () => {
  return (
    <div className='w-full p-4 px-10 flex items-center justify-between '>
    <Logo/>
    <nav className='w-max py-3 px-8 border border-solid dark-bold rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm '>
    <Link href="/" className='mr-2'>Home</Link>
    <Link href="/about" className='mr-2' >About</Link>
    <Link href="/contact" className='mr-2'>Contact</Link>
    <button><SunIcon/> </button>
    </nav>
      <div>   
      <a href='http://example.com' className=' inline-block w-6 h-6  mr-4 '> <LinkedinIcon className="hover:scale-125 transition-all ease duration-200 " /></a>
      <a href='http://example.com' className='inline-block w-6 h-6 mr-4 '><TwitterIcon  className="hover:scale-125 transition-all ease duration-200 "  /></a>
      <a href='http://example.com' className='inline-block w-6 h-6 mr-4 '> <GithubIcon className="hover:scale-125 transition-all ease duration-200 " /> </a>
      <a href='http://example.com' className='inline-block w-6 h-6 mr-4 '> <DribbbleIcon className="hover:scale-125 transition-all ease duration-200 " /></a>
       </div>
    </div>
  )
}

export default Header