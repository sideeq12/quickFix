import React from 'react'
import Jumbotron from '../components/jumbotron'
import { IoSearchOutline } from "react-icons/io5";
import EventList from '../components/eventList';
import JoinUs from '../components/joinUs';


const Events = () => {
  return (
    <div>
        <Jumbotron title='Highlight' subheader={['Events']} />
        <h3 className='text-3xl mt-10 mb-4 font-semibold'>Check out</h3>
        <h4 className='text-red-500 font-semibold mb-10 text-2xl'>Upcoming events</h4>
        <div className='w-3/4 mx-auto md:w-1/3 flex items-center bg-gray-200 p-2 rounded-md mb-10'>
          <IoSearchOutline className='text-2xl text-gray-500' />
          <input type='text' placeholder='Search for events' className='pl-4 bg-gray-200 focus:outline-none' />
        </div>
      <EventList />
      <JoinUs />
    </div>
  )
}

export default Events