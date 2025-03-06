import React, { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";

const EventList = () => {
  const events = Array.from({ length: 16 }); // Example: 12 events
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div>
      <div className='md:w-5/6 mx-auto my-6 flex flex-col md:flex gap-6 justify-between px-4 '>
        <div className='text-3xl font-semibold'>Upcoming Events</div>
        <div className='gap-4 flex text-sm'>
          <span className='px-6 rounded-md py-2 h-fit bg-gray-200'>All days</span>
          <span className='px-6 rounded-md py-2 bg-gray-200'>Week days</span>
          <span className='px-6 rounded-md py-2 bg-gray-200'>Weekends</span>
        </div>
      </div>
      <div className='w-full px-10 lg:px-2 md:w-3/4 mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {currentEvents.map((_, index) => (
          <div key={index} className="text-left cursor-pointer hover:bg-orange-200 rounded-md border">
            <div className='bg-[url(/fixed.png)] h-32 md:h-60 col-span-1 bg-cover bg-center'></div>
            <div className='p-2 flex gap-4'>
              <div className='w-20'>
                <div className='px-2 py-3 rounded-md bg-[#F3BF99] w-full text-center mb-1 text-black'>14</div>
                <span className='px-2 py-1 bg-red-500 rounded-md text-xs w-full text-white'>Jun</span>
              </div>
              <div>
                <div className='text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur.</div>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Neque a a diam consequat masectetur.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center my-6 gap-4'>
        <GrPrevious size={20} 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1} 
          className='cursor-pointer'/>
        <span>Page {currentPage} of {totalPages}</span>
        <GrNext size={20} 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages} 
          className='cursor-pointer'/>
      </div>
    </div>
  );
};

export default EventList;
