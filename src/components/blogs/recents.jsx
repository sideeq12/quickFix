import React from 'react'

const Recents = () => {
    const total = 14
  return (
    <div className='text-left w-11/12 mx-auto my-10'>
        <h3 className='font-semibold text-3xl '>Explore other updates</h3>

    <div className='flex space-x-4 overflow-x-scroll  scrollbar-hide p-5 mt-4 '>
       {[...Array(7)].map((_, index) => (
                  <div className=" border-gray-200 rounded-lg relative min-w-72 border flex flex-col min-h-72     text-white 
                    bg-[url('https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center
           "  key={index}>
                
                
                <div className="bg-white rounded-b-lg mt-auto">
    <div className="ml-2 bg-red-700 -mt-4 py-1 px-4 text-sm font-light rounded-md w-fit">
      December 12, 2024
    </div>
    <div className="text-black text-sm">
      <div className="my-2 px-2">
        How Young People Volunteering to dshisd dsshjds sddjhk...
      </div>
      <div className="flex bg-yellow-700 text-white font-light text-xs rounded-b-lg">
        <div className="border-r border-black py-1 px-2">By Admin</div>
        <div className="px-2 py-1">Fitness</div>
      </div>
    </div>
  </div>
           </div>
            ))}
           </div>
    </div>
  )
}

export default Recents