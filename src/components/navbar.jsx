import React from 'react'

const Navbar = () => {
  return (  <nav  className='flex justify-between items-center h-14 py-10
   bg-white text-black relative shadow-sm font-mono' role='navigation'>
    <img src="/logo.png" alt="logo" className='ml-20 h-12' />
   <div className='flex mr-10 items-center'>
   <ul className='flex gap-8  mr-10 '>
        <li>
        <a className='text-black hover:text-red-400 ' href="/">Home</a>
        </li>
        <li>
        <a className='text-black hover:text-red-400 '  href="/about">About Us</a>
        </li>
        <li>
        <a className='text-black hover:text-red-400 '  href="/contact">Service</a>
        </li>
        
        <li>
        <a className='text-black hover:text-red-400 '  href="/blog">Blog</a>
        </li>
    </ul>
    <button className='py-2 px-4 bg-red-500 text-sm text-white rounded-md'>
            Contact Us
        </button>
   </div>
</nav>
  )
}

export default Navbar