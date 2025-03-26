import React from 'react'

const Steps = () => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 mt-8 sm:mt-10">
      <div className="relative">
        <div className="border px-6 sm:px-8 py-2 sm:py-3 bg-white z-40 mx-auto w-fit rounded-full text-sm sm:text-base">
          Steps
        </div>
        <hr className="absolute top-1/2 left-0 right-0 z-10 border-gray-200" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-10 w-full sm:w-5/6 mx-auto">
        <div className="bg-[#F4F4f4] rounded-lg px-6 sm:px-8 lg:px-10 flex flex-col space-y-4 py-8 sm:py-10 lg:py-14">
          <h4 className="font-semibold text-xl sm:text-2xl text-gray-800">
            Register on the platform
          </h4>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Create an account by providing your basic information and verifying your email address. 
            This step ensures that we have accurate information about you and can contact you when needed. 
            It also allows you to access all the features of the platform.
          </p>
        </div>
        
        <div className="bg-red-500 text-white flex flex-col space-y-4 rounded-lg px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-14">
          <h4 className="font-semibold text-xl sm:text-2xl">
            Complete Profile
          </h4>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Fill in additional details such as your blood type, location, and contact information. 
            This helps us match you with potential donors or recipients in your area more effectively. 
            A complete profile increases your chances of finding a match quickly.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Steps