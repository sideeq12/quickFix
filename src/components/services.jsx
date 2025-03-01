import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'

const Services = () => {
  return (
    <div className='group transition duration-600 hover:pt-12 cursor-pointer text-left hover:shadow-lg mt-10 p-5 rounded-lg border-black hover:bg-[#FFBFBF]
    border w-64 h-96 '>
      <div className='flex gap-1 mt-[60%] mb-6 group-hover:mt-0 transition duration-600 w-fit mx-auto group-hover:mx-0'>
      Definitions <FaArrowTrendUp className='mt-1' color='blue' />
      </div>
      <div className='hidden group-hover:block transition duration-600 text-xs leading-loose mt-3'>
       <ul className='space-y-2'>
       <li> <span className='font-semibold'>App: </span>The Blood Hero mobile application.</li> 
       <li> <span className='font-semibold'>User: </span> Any individual who accesses or uses the App.</li> 
       <li> <span className='font-semibold'>Donor: </span>A registered user willing to donate blood</li>
        <li> <span className='font-semibold'>Recipient: </span> A registered user in need of blood.</li>
       </ul>
      </div>
   </div>
  )
}

export default Services