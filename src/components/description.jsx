import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BsEmojiSmile, BsDroplet } from "react-icons/bs";
import CurvedLine from './curvedline';

const MotionDiv = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div 
      ref={ref}
      className={className}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Description = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 relative">
      <MotionDiv className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full sm:w-5/6 relative justify-between items-center mx-auto">
        <div className="text-left space-y-6">
          <div className="flex gap-3 items-center">
            <div className="h-12 w-12 rounded-full bg-red-400 flex items-center justify-center">
              <BsEmojiSmile className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl">Who we are?</h2>
              <label className="text-gray-500 text-sm sm:text-base">Give the gift of life by donation</label>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are an innovative platform dedicated to bridging the gap between blood donors and recipients across Nigeria...
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <img src="/ph.png" alt="Blood donation illustration" className="w-full max-w-md lg:max-w-lg" />
        </div>
      </MotionDiv>
      
<<<<<<< HEAD
      <MotionDiv className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full sm:w-5/6 items-center mx-auto mt-16 sm:mt-20 relative">
        <img 
          src="/clip4.png" 
          alt="decoration" 
          className="absolute -z-10 -left-10 h-[20rem] sm:h-[25rem] lg:h-[30rem] opacity-50 sm:opacity-100" 
        />
        <div className="w-full flex justify-center md:justify-start order-2 md:order-1">
          <img src="/mock.png" alt="Mobile app mockup" className="w-full max-w-md lg:max-w-lg" />
        </div>
        <div className="text-left space-y-8 order-1 md:order-2">
          <div className="flex gap-3 items-center">
            <div className="h-12 w-12 rounded-full bg-red-400 flex items-center justify-center">
              <BsDroplet className="text-white" size={24} />
=======
      <MotionDiv className='flex flex-col-reverse mt-4 md:grid md:grid-cols-2 gap-10 w-5/6 items-center mx-auto'>
        <img src='/clip4.png' alt='tst' className='absolute -z-10 -left-10 h-[30rem]' />
        <img src='/mock.png' alt='tst' />
        <div className='text-left'>
          <div className='flex gap-2 items-center'>
            <div className='h-10 w-10 rounded-full bg-red-400 flex items-center justify-center'>
              <BsDroplet className='text-white' size={20} />
>>>>>>> 6366def23c8db650f14f19f896444dd68453c978
            </div>
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl">Why Blood Hero?</h2>
              <label className="text-gray-500 text-sm sm:text-base">Why Blood Hero?</label>
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="space-y-2">
              <h4 className="text-red-400 font-semibold text-lg sm:text-xl">Fast Connections</h4>
              <p className="text-gray-600 text-sm sm:text-base">Instantly connect with donors and recipients in your area</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-red-400 font-semibold text-lg sm:text-xl">Safe & Secure</h4>
              <p className="text-gray-600 text-sm sm:text-base">We prioritize your privacy with secure, encrypted data handling.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-red-400 font-semibold text-lg sm:text-xl">Save Lives</h4>
              <p className="text-gray-600 text-sm sm:text-base">Your blood donation could be the difference between life and death.</p>
            </div>
          </div>
        </div>
      </MotionDiv>
      
<<<<<<< HEAD
      <MotionDiv className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16 sm:mt-20 w-full sm:w-5/6 justify-between items-center mx-auto relative">
        <div className="text-left space-y-6">
          <div className="flex gap-3 items-center">
            <div className="h-12 w-12 rounded-full bg-red-400 flex items-center justify-center">
              <BsEmojiSmile className="text-white" size={24} />
=======
      <MotionDiv className='grid grid-cols-1  md:grid-cols-2 mt-4 md:mt-10 w-5/6 justify-between items-center mx-auto relative'>
        <div className='text-left'>
          <div className='flex gap-2 items-center'>
            <div className='h-10 w-10 rounded-full bg-red-400 flex items-center justify-center'>
              <BsEmojiSmile className='text-white' size={20} />
>>>>>>> 6366def23c8db650f14f19f896444dd68453c978
            </div>
            <div>
              <h2 className="font-semibold text-xl sm:text-2xl">Our mission</h2>
              <label className="text-gray-500 text-sm sm:text-base">Lorem Ipsum is simply dummy text</label>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our mission is simple – to save lives by making the process of finding and donating blood seamless...
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <img src="/heart.png" alt="Heart illustration" className="w-full max-w-md lg:max-w-lg" />
        </div>
<<<<<<< HEAD
=======
        <img src='/heart.png' alt='tst' className='-mt-10 md:mt-0' />
>>>>>>> 6366def23c8db650f14f19f896444dd68453c978
      </MotionDiv>
    </div>
  );
};

export default Description;

