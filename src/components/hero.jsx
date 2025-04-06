import React from 'react';
import { IoIosAppstore } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 w-full bg-[url(/home.svg)] bg-cover bg-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 w-full lg:w-1/2">
            <motion.h1 
              initial={{ y: -50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight"
            >
              Experience becoming a <span className="text-red-500">hero today</span>, Donate blood and 
              save lives.
            </motion.h1>
            
            <motion.p 
              initial={{ y: -50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
            >
              Join Blood Hero and make a difference. Whether you are in need of blood or want to donate, 
              we are here to connect you with the right people.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" 
              initial={{ y: -50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a href="#" className="py-3 px-6 flex items-center justify-center gap-2 bg-black text-white rounded-md hover:bg-gray-900 transition-colors">
                <IoLogoGooglePlaystore size={24} className="sm:size-[25px]"/> 
                <span>Play Store</span>
              </a>
              <a href="#" className="py-3 px-6 flex items-center justify-center gap-2 border border-black text-black rounded-md hover:bg-gray-50 transition-colors">
                <IoIosAppstore size={24} className="sm:size-[25px]"/> 
                <span>App Store</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
      <img 
        src="/eclip.png" 
        className="absolute top-0 left-0 w-1/2 sm:w-auto sm:left-12 -z-10 opacity-50 sm:opacity-100" 
        alt="decoration"
      />
    </div>
  );
};

export default Hero;
