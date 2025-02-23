import React from 'react'
import Jumbotron from '../components/jumbotron'
import { IoSearchOutline } from "react-icons/io5";
import JoinUs from '../components/joinUs';


const Blog = () => {
  const   filter = ["General", "Health Factor", "Vaccine", "Blood Donation", "Covid-19", "Others"]
  return (
    <div>
        <Jumbotron title='Blog' subheader={['Home', 'Blog']} />
        <div className='py-20'>
            <h3 className='text-3xl font-bold'>Latest news</h3>
            <h3 className='text-3xl font-bold text-red-600' > Updates</h3>
            <p>Get latest updates...</p>

            <div className='flex gap-3 mt-10 mx-auto w-fit bg-gray-200 rounded-md py-3 px-10'>
                <IoSearchOutline /> <input type="text" placeholder='search..'
                 className='text-left text-xs bg-gray-200 outline-none  pl-2' />
            </div>
        </div>

        <div className='flex  gap-3 justify-center'>
       { filter.map((filter, index)=><div className='bg-red-500 text-white rounded-md px-5 py-2 text-sm'>{filter}</div>)
       } </div>
             <div className='flex flex-row-reverse py-20 text-left align-middle justify-center gap-10'>
        <div className='w-1/3 leading-[40px]'>
        <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
        efficient, and impactful. Whether you're a donor, recipient, or a medical professional, Blood Hero is designed to bridge the gap between those in need and those who can help.
        </div>
        <div className="h-80 bg-cover bg-center w-1/2 bg-red-400 rounded-lg bg-[url(/abut.svg)]"></div>
      </div>


       <div className='flex flex-wrap gap-5 justify-center mt-10'>
       <div className='border border-gray-200 rounded-lg w-60'>
              <img src="filter.png" className='rounded-lg h-60 w-full' alt="" />
              <h3 className='text-sm text-left font-semibold mt-3'>Lorem Ipsum is simply dummy text of the printing.</h3>
              <div className='flex gap-2'>
                <div className='bg-red-500 text-white rounded-md px-3 py-1 text-xs'>By Admin</div>
                <div className='bg-yellow-500 text-white rounded-md px-3 py-1 text-xs'>Fitness</div>
              </div>
       </div>
        </div>
        <JoinUs />
    </div>
  )
}

export default Blog