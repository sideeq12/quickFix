import React from 'react'
import { IoIosAppstore } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";



const Hero = () => {
  return (    <div className=' h-screen relative flex flex-col
   items-center md:px-20   w-screen justify-center  bg-[url(/home.svg)] bg-cover bg-center'>
    <div className='flex '>
    <div className='w-1/2 text-left space-y-6'>
         <h1 className='font-semibold text-5xl'>
         Experience becoming a <span className='text-red-500'>hero today</span>, Donate blood and 
         save lives.
         </h1>
         <p>Join Blood Hero and make a difference. 
             Whether you are in need of blood or want to donate, we are here to
              connect you with the right people.</p>
              <div className='flex gap-4'>
                     
                     <a href='' className='py-2 flex px-4 border gap-2 bg-black text-sm text-white rounded-md'>
                     <IoLogoGooglePlaystore  size={25}/>  <span className='pt-1'>Play Store</span>
                     </a>
                     <a  href='' className='py-2 px-4 border flex gap-2 border-black text-sm text-black rounded-md'>
                     <IoIosAppstore  size={25}/>  <span className='pt-1'>App Store</span>
                     </a>
              </div>
     </div>
     {/* <div className='bg-[url(/bh.png)] bg-cover bg-center w-1/2 h-96'>

     </div> */}
    </div>
    <img src="/eclip.png" className='absolute top-0 left-0 -z-10' alt="" />
 </div>
  )
}

export default Hero