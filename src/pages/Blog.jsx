import React from 'react'
import Jumbotron from '../components/jumbotron'
import { IoSearchOutline } from "react-icons/io5";
import JoinUs from '../components/joinUs';
import Features from '../components/blogs/features';
import Recents from '../components/blogs/recents';


const Blog = () => {
  const   filter = ["General", "Health Factor", "Vaccine", "Blood Donation", "Covid-19", "Others"]
  return (
    <div>
        <Jumbotron title='Blog' subheader={['Home', 'Blog']} />
        <div className='py-14'>
            <h3 className='text-3xl font-bold'>Latest news</h3>
            <h3 className='text-3xl font-bold text-red-600' > Updates</h3>
            <p>Get latest updates...</p>

            <div className='flex gap-3 mt-4 mx-auto w-fit bg-gray-200 rounded-md py-3 px-10'>
                <IoSearchOutline /> <input type="text" placeholder='search..'
                 className='text-left text-xs bg-gray-200 outline-none  pl-2' />
            </div>
        </div>

        <div className='flex flex-wrap -mt-4 w-5/6 mx-auto gap-3 justify-center'>
       { filter.map((filter, index)=><div className='hover:bg-red-500 cursor-pointer  bg-[#FFBFBF] text-red-500  hover:text-white h-fit rounded-md px-5 py-2 text-sm'>{filter}</div>)
       } </div>
             <div className='grid grid-cols-2 bg-[#FDE2E2] p-2
             my-20 w-full lg:w-5/6 mx-auto text-left align-middle  rounded-lg justify-center gap-2 lg:gap-10'>
        <div className=' leading-[30px] col-span-1'>
      <h3 className='text-xl font-semibold lg:my-4 px-2 lg:px-10'>The Lifeline of Humanity: 
        Understanding the Power of Blood Donation.</h3>
        <p className='px-2 lg:px-10'>
        Blood is the essence of life. Every day, thousands of people around the world rely on blood transfusions
         to survive accidents, surgeries ...
         </p>
         <div className='flex gap-3 pl-2 lg:pl-10 align-middle w-full justify-between'>
          <div>by Aishat</div>
          <button className='text-white bg-black text-xs lg:text-sm'>Read more</button>
          </div></div>
        <div className="lg:h-80 h-full  bg-cover bg-center col-span-1   bg-red-400 rounded-lg bg-[url(/abut.svg)]"></div>
      </div>
      <h3 className='font-semibold text-3xl mt-10 text-left ml-10 lg:ml-20'>Explore other updates</h3>
       <Features />
       {/* <div className='flex flex-wrap gap-5 justify-center mt-10'>
     
        </div> */}
   
        <JoinUs />
    </div>
  )
}

export default Blog