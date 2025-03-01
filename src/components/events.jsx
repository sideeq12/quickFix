import React from 'react'
import { GoClock } from "react-icons/go";


const Events = () => {
    const total = 14
  return (
    <div className='text-left w-11/12 mx-auto my-10'>
        <h3 className='font-semibold text-3xl '>Explore other updates</h3>

    <div className='flex space-x-4 overflow-x-scroll  scrollbar-hide p-5 mt-4'>
       {[...Array(7)].map((_, index) => (
                  <div className="border cursor-pointer hover:bg-[#F6D9D9] 
                  grid lg:grid-cols-2 border-gray-200 rounded-lg relative w-72  lg:min-w-[35rem] lg:h-72 text-white 
          bg-white "  key={index}>
       
                 <div src="" className='col-span-1 m-4   bg-[url(/abut.svg)] bg-center bg-cover h-60' alt=""></div>
                  <div className="  rounded-lg col-span-1 p-4 ">
         
            <div className="text-red-500  flex
            gap-32 justify-between font-semibold py-1 px-4 text-sm  rounded-lg w-fit ">
                <div className='flex gap-2 mt-auto'>
                    <GoClock /> 3:30PM
                </div>
                <div>           <div className='bg-[#F3BF99] p-6 mb-1 rounded-lg  w-fit ml-auto'>14</div>
                <div className='px-4 rounded-lg py-1 bg-red-500 text-xs  text-white'>June</div></div>
            </div>
            <div className="text-black font-semibold ">
               How Young People Volunteering to dshisd dsshjds sddjhk...
                <div className="flex my-2  text-black font-light text-xs rounded-b-lg ">
                Lorem ipsum dolor sit amet consectetur. Neque a a diam consequat massa pulvinar.
                 Congue cursus nullam ornare libero convallis orci id consectetur.
                </div>
            </div>
          </div>
           </div>
            ))}
           </div>
    </div>
  )
}

export default Events