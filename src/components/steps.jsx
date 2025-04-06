import React from 'react'

const Steps = () => {
  return (
    <div className='relative py-20 mt-10'>
        <div className='border px-20 py-3 w-fit bg-white  z-40 mx-auto '>Steps</div>
        <hr className='absolute top-20 z-10 '/>

        <div className='grid grid-cols-1 lg:grid-cols-2 py-10 w-5/6 gap-10 mx-auto'>
    <div className='bg-[#F4F4f4] md:rounded-md px-10 flex flex-col space-y-4 py-14 '>
        <h4 className=' font-semibold text-2xl'> Register on the platform</h4>
        <p>
            Create an account by providing your basic information and verifying your email address. This step ensures that we have accurate information about you and can contact you when needed. It also allows you to access all the features of the platform.
        </p>
    </div>
    <div  className='bg-red-500 text-white flex flex-col space-y-2  md:rounded-md px-5 py-14'>
        <h4 className=' font-semibold text-2xl'>Complete Profile</h4>
        <p>
            Fill in additional details such as your blood type, location, and contact information. This helps us match you with potential donors or recipients in your area more effectively. A complete profile increases your chances of finding a match quickly.
        </p>
    </div>
</div>
    </div>
  )
}

export default Steps