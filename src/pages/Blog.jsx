import React from 'react';
import { motion } from 'framer-motion';
import Jumbotron from '../components/jumbotron';
import { IoSearchOutline } from "react-icons/io5";
import JoinUs from '../components/joinUs';
import Features from '../components/blogs/features';
import Recents from '../components/blogs/recents';

const filter = ["General", "Health Factor", "Vaccine", "Blood Donation", "Covid-19", "Others"];

const Blog = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Jumbotron title='Blog' subheader={['Home', 'Blog']} />
      
      <motion.div className='py-14' initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <h3 className='text-3xl font-bold'>Latest news</h3>
        <h3 className='text-3xl font-bold text-red-600'>Updates</h3>
        <p>Get latest updates...</p>

        <motion.div className='flex gap-3 mt-4 mx-auto w-fit bg-gray-200 rounded-md py-3 px-10' whileHover={{ scale: 1.05 }}>
          <IoSearchOutline /> 
          <input type="text" placeholder='search..' className='text-left text-xs bg-gray-200 outline-none pl-2' />
        </motion.div>
      </motion.div>
      
      <motion.div className='flex flex-wrap -mt-4 w-5/6 mx-auto gap-3 justify-center'>
        {filter.map((filter, index) => (
          <motion.div key={index} className='hover:bg-red-500 cursor-pointer bg-[#FFBFBF] text-red-500 hover:text-white h-fit rounded-md px-5 py-2 text-sm' whileHover={{ scale: 1.1 }}>
            {filter}
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div className='grid grid-cols-2 bg-[#FDE2E2] p-2 my-10 w-full lg:w-5/6 mx-auto text-left align-middle rounded-lg justify-center gap-2 lg:gap-10' initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className='leading-[30px] col-span-1'>
          <h3 className='text-sm lg:text-xl font-semibold lg:my-4 px-2 lg:px-10'>The Lifeline of Humanity: Understanding the Power of Blood Donation.</h3>
          <p className='px-2 text-xs lg:text-lg lg:px-10'>
            Blood is the essence of life. Every day, thousands of people around the world rely on blood and the next outlining methodology ...
          </p>
          <div className='flex gap-3 pl-2 lg:pl-10 align-middle w-full justify-between'>
            <div>by Aishat</div>
            <motion.a className='text-white bg-black text-xs lg:text-sm px-4 mt-1 py-1 rounded-md h-fit' whileHover={{ scale: 1.1 }}>Read more</motion.a>
          </div>
        </div>
        <motion.div className="lg:h-80 h-full bg-cover bg-center col-span-1 bg-red-400 rounded-lg bg-[url(/abut.svg)]" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}></motion.div>
      </motion.div>
      
      <h3 className='font-semibold text-3xl mt-10 text-left ml-10 lg:ml-20'>Explore other updates</h3>
      <Features />
      <JoinUs />
    </motion.div>
  );
};

export default Blog;
