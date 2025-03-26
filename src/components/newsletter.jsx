import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-[#FDDDDD] py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            "Join our life-saving community! Subscribe now to stay
            updated on blood donation drives, urgent requests, 
            and how you can help save lives."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <div className="bg-white rounded-md flex-1">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none rounded-md"
              />
            </div>
            <button className="bg-[#FF3131] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-[#FF3131]/90 transition-colors text-sm sm:text-base font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter