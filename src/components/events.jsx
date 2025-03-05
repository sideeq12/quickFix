import React from 'react'
import { GoClock } from "react-icons/go";

const Events = () => {
    const total = 14;
    return (
        <div className='text-left w-full max-w-screen-xl mx-auto my-10'>
            <h3 className='font-semibold text-3xl ml-4 lg:ml-8'>Explore other updates</h3>

            <div className='flex space-x-4 overflow-x-auto scrollbar-hide p-5 mt-4 flex-wrap lg:flex-nowrap'>
                {[...Array(7)].map((_, index) => (
                    <div className="border cursor-pointer hover:bg-[#F6D9D9] 
                        grid lg:grid-cols-2 border-gray-200 rounded-lg relative min-w-[18rem] lg:min-w-[30rem] lg:h-72 text-white 
                        bg-white"
                        key={index}
                    >
                        <div className='w-5/6 lg:w-full lg:col-span-1 m-4   
                            bg-[url(/abut.svg)] bg-center bg-cover h-60' 
                        ></div>
                        <div className="rounded-lg col-span-1 p-4">
                            <div className="text-red-500 flex justify-between font-semibold py-1 px-4 text-sm rounded-lg w-full">
                                <div className='flex gap-2 mt-auto'>
                                    <GoClock /> 3:30PM
                                </div>
                                <div>
                                    <div className='bg-[#F3BF99] p-6 mb-1 rounded-lg w-fit ml-auto'>{total}</div>
                                    <div className='px-4 rounded-lg py-1 bg-red-500 text-xs text-white'>June</div>
                                </div>
                            </div>
                            <div className="text-black font-semibold pl-4 ">
                                How Young People Volunteering to dshisd dsshjds sddjhk...
                                <div className="text-black font-light
                                 text-xs whitespace-normal overflow-hidden">
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

export default Events;
