import React from 'react'
import { BsEmojiSmile } from "react-icons/bs";
import { BsDroplet } from "react-icons/bs";
import CurvedLine from './curvedline';



const Description = () => {
  return (
    <div className='py-4 relative'>
      {/* <CurvedLine /> */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-5/6  relative  justify-between items-center mx-auto'>
       <div className='text-left '>
           <div className='flex gap-2 items-center'>
                <div className='h-10 w-10 rounded-full bg-red-400 flex items-center justify-center'>
                  <BsEmojiSmile className='text-white'  size={20} />
                </div>
                <div>
                <h2 className='font-semibold text-xl'>Who we are?</h2>
            <label htmlFor="" className='text-gray-400  text-sm'>Give the gift of life by donation</label>
           
                </div>
            </div>
            <p className='mt-4'> We are an innovative platform dedicated to bridging the gap between blood
                 donors and recipients across Nigeria. With our user-friendly app and website,
                  we connect those in urgent
                 need of blood with willing donors nearby, saving precious time and lives in emergency situations</p>
        </div>
    <img src="/ph.png" alt="tst"  className=''/>
    
    {/* <img src="/clip.png" alt="tst"  className='absolute -z-10 -right-10 h-[30rem]'/> */}
       </div>
    
       <div className='grid grid-cols-1  md:grid-cols-2 gap-10  w-5/6  items-center mx-auto' >
        
       <img src="/clip4.png" alt="tst"  className='absolute -z-10 -left-10 h-[30rem]'/>
       <img src="/mock.png" alt="tst"  className=''/>
       <div className='text-left'>
       <div className='flex gap-2 items-center '>
                <div className='h-10 w-10 rounded-full bg-red-400 flex items-center justify-center'>
                  <BsDroplet className='text-white'  size={20} />
                </div>
                <div>
                <h2 className='font-semibold text-xl'>Why Blood hero?</h2>
            <label htmlFor="" className='text-gray-400  text-sm'>Why Blood hero? </label>
           
                </div> 
            </div>
            <div className='flex flex-col gap-4 w-72'>
            <div>
                    <h4 className='text-red-400 font-semibold text-xl '>Fast Connections</h4>
                    <p className='text-sm'>Instantly connect with donors and recipients in your area</p>
                </div>
                <div>
                    <h4 className='text-red-400 font-semibold text-xl '>Safe & Secure</h4>
                    <p className='text-sm'>We prioritize your privacy with secure, encrypted data handling.</p>
                </div>
                <div>
                    <h4 className='text-red-400 font-semibold text-xl '>Save Lives</h4>
                    <p className='text-sm'>Your blood donation could be the difference between life and death.</p>
                </div>
            </div>
       </div>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-2 mt-10 w-5/6  justify-between items-center mx-auto relative'>
       <div className='text-left'>
           <div className='flex gap-2 items-center'>
                <div className='h-10 w-10 rounded-full bg-red-400 flex items-center justify-center'>
                  <BsEmojiSmile className='text-white'  size={20} />
                </div>
                <div>
                <h2 className='font-semibold text-xl'>Our mission</h2>
            <label htmlFor="" className='text-gray-400  text-sm'>Lorem Ipsum is simply dummy text</label>
           
                </div>
            </div>
            <p className='mt-4'> Our mission is simple – to save lives by making the process of finding and donating blood seamless, quick, and
                 secure. We believe that no one should struggle to find blood in times of need</p>
        </div>
        <img src="/heart.png" alt="tst"  className=''/>
       </div>
    </div>
  )
}

export default Description