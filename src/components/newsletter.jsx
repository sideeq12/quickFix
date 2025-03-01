import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#FDDDDD] py-16 flex flex-col items-center space-y-6'>
        <h2 className='font-semibold text-3xl'>
        Join  Our Community
        </h2>
        <p className='w-2/3 mx-auto mt-2'>"Join our life-saving community! Subscribe now to stay
             updated on blood donation drives, urgent requests, 
             and how you can help save lives."</p>
             <div className='flex  mx-auto mt-5 gap-2 border'>
                   <div className='bg-white px-4 py-2 rounded-md w-2/3 mx-auto flex items-center justify-start'>
                   <input type="email" placeholder='Enter your email address' className='focus:outline-none'/>

                   </div><button className='bg-[#FF3131] text-white px-4 py-2 rounded-md'>Subscribe</button>
             </div>
    </div>
  )
}

export default Newsletter