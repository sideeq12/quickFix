import React from 'react'
import { GoPlus } from "react-icons/go";
import Flag from "react-world-flags";

const Navbar = () => {
  return (  <nav  className='flex justify-between items-center h-14 py-10 pr-14
   bg-white text-black relative shadow-sm font-mono' role='navigation'>
    <img src="/art.jpg" alt="logo" className='ml-20 h-16' />
   <div className='flex  mr-10 items-center'>
   <ul className='flex gap-8  mr-10  uppercase'>
        <li>
        <a className='text-black hover:text-red-400 ' href="/">Home</a>
        </li>
        <li>
        <a className='text-black hover:text-red-400 '  href="/about">About Us</a>
        </li>
        <li>
        <a className='text-black hover:text-red-400 flex  align-middle '  href="/terms">Highlight 
        <GoPlus className='mt-1'/></a>
        </li>
        
        <li>
        <a className='text-black hover:text-red-400 '  href="/blog">Blog</a>
        </li> <li>
        <a className='text-black hover:text-red-400 '  href="/FAQ">FAQ</a>
        </li>
    </ul>
   </div>
   <div>
   <Flag  country={"NG"} className="w-12 h-8 rounded-md shadow-md" />
   <button className='py-2 px-4 bg-red-500 text-sm text-white rounded-md'>
            Contact Us
        </button>
   </div>
</nav>
  )
}

export default Navbar