import React from 'react'
import Jumbotron from '../components/jumbotron'
import { IoSearchOutline } from 'react-icons/io5'
import { CgLivePhoto } from "react-icons/cg";
import EventLocation from './eventLocation';
import JoinUs from '../components/joinUs';


const Event = () => {
  return (
    <div>
        <Jumbotron title='Highlight' subheader={['Event']} />
        <h3 className='text-3xl mt-10 mb-4 font-semibold'>Check out</h3>
                <h4 className='text-red-500 font-semibold mb-10 text-2xl'>Upcoming events</h4>
                <div className='w-3/4 mx-auto md:w-1/3 flex items-center bg-gray-200 p-2 rounded-md mb-10'>
                  <IoSearchOutline className='text-2xl text-gray-500' />
                  <input type='text' placeholder='Search for events' className='pl-4 bg-gray-200 focus:outline-none' />
                </div>
                <div className='w-5/6 mx-auto my-'>
                    <div className='h-60 w-full rounded-lg bg-[url(/fixed.png)] bg-cover bg-center'>
                    <div className='bg-black w-full h-full bg-opacity-40 text-white flex p-4 text-sm'>
                       Going live <CgLivePhoto  size={20} color='red'/>
                        </div></div>
                        <div className='bg-[#F3BF99] grid grid-cols-4  p-4 w-11/12 text-xs lg:text-sm md:w-[30rem] -mt-6 mx-auto h-20 rounded-md'>
                        <div className='flex flex-col border-black font-semibold border-r'>
                            01 
                            <span>Day</span>
                        </div>
                        <div className='flex flex-col border-black font-semibold border-r'>
                            35 
                            <span>Hour</span>
                        </div>
                        <div className='flex flex-col border-black font-semibold border-r'>
                            22 
                            <span>Minutes</span>
                        </div>
                        <div className='flex flex-col  font-semibold'>
                            49 
                            <span>Seconds</span>
                        </div>

                        </div>
            {/* event details */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                    <div className='col-span-1 lg:col-span-2'>

                    <div className='p-6'>
                        <h3 className='font-semibold text-3xl my-3'>Event Details</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the .</p>
                    </div>

             <EventLocation />
                    </div>

                   <div className='col-span-1'>
                   <div className=' rounded-sm border text-left px-4 pt-4 pb-8 h-fit'>
                        <div className='flex flex-col bg-[#F3BF99] rounded-md w-fit px-2 py-4 mb-6 text-center'>
                            20 
                            <span className='text-sm'>March</span>
                        </div>

                        <div className='flex flex-col leading-loose space-y-3 text-sm font-semibold  '>
                        <span>Organised by : BloodHero </span> 
                        <span>Venue : Google meet</span> 
                        <span>Phone : +231992392 </span> 
                        <span>Email : support@bloodhero.com </span>
                        </div>

                    </div>
                    <div className='bg-[#F3BF99] grid grid-cols-4  p-4  w-11/12 text-xs lg:text-sm md:w-5/6 -mt-6 mx-auto h-20 rounded-md'>
                        <div className='flex flex-col border-black  border-r'>
                            01 
                            <span>Day</span>
                        </div>
                        <div className='flex flex-col border-black  border-r'>
                            35 
                            <span>Hour</span>
                        </div>
                        <div className='flex flex-col border-black  border-r'>
                            22 
                            <span>Minutes</span>
                        </div>
                        <div className='flex flex-col '>
                            49 
                            <span>Seconds</span>
                        </div>

                        </div>
                   </div>
                </div>
                </div>

                <JoinUs />

    </div>
  )
}

export default Event