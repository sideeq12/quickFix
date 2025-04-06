import React from 'react';
import { IoIosAppstore } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='h-screen relative flex flex-col items-center md:px-20 w-screen md:justify-center bg-[url(/home.svg)] bg-cover bg-center'>
      <div className='flex'>
        <div className='lg:w-1/2 text-left space-y-10 lg:space-y-6 mt-16 lg:mt-0 mx-10 lg:mx-0'>
          <motion.h1 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className='font-semibold text-5xl'
          >
            Experience becoming a <span className='text-red-500'>hero today</span>, Donate blood and 
            save lives.
          </motion.h1>
          
          <motion.p 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Join Blood Hero and make a difference. Whether you are in need of blood or want to donate, 
            we are here to connect you with the right people.
          </motion.p>
          
          <motion.div 
            className='flex gap-4' 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a href='' className='py-2 flex px-4 border gap-2 bg-black text-sm text-white rounded-md'>
              <IoLogoGooglePlaystore size={25}/>  <span className='pt-1'>Play Store</span>
            </a>
            <a href='' className='py-2 px-4 border flex gap-2 border-black text-sm text-black rounded-md'>
              <IoIosAppstore size={25}/>  <span className='pt-1'>App Store</span>
            </a>
          </motion.div>
        </div>
      </div>
      <img src='/eclip.png' className='absolute top-0 left-12 -z-10' alt='' />
    </div>
  );
};

export default Hero;
