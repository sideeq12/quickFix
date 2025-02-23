import React from 'react'
import Hero from '../components/hero'
import Description from '../components/description'
import YouTubeVideo from '../components/youtube'
import Steps from '../components/steps'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import { FaArrowTrendUp } from "react-icons/fa6";
import HorizontalScroll from '../components/articles/article'


const Homepage = () => {
  return (
    <div className=''>
        <Hero />
        <div className='relative flex w-screen justify-center gap-32 items-center bg-white h-96'>
            <div className='flex flex-col items-center space-y-1 md:space-y-2'>
                <h2 className='font-bold text-2xl md:text-5xl '>5k</h2>
                <span>Happy clients</span>
            </div> <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-2xl md:text-5xl'> 7k</h2>
                <span>Donations</span>
            </div> <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-2xl md:text-5xl'>10k</h2>
                <span> Users</span>
            </div> <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-2xl md:text-5xl'>6000+</h2>
                <span>Customers</span>
            </div>
            
     <img src="/vector.png" className='absolute -top-80 h-[30rem] left-0 z-10' alt="" />
            </div>
            <div className='py-4 px-20 flex text-left space-x-10 align-middle'>
            <iframe
      className="w-full md:w-1/2 rounded-lg h-80"
        src={`https://www.youtube.com/embed/IoJSN9u7qS0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      
      ></iframe>
      <div className='w-1/3  flex flex-col space-y-5'>
        <label htmlFor="" className='mt-4'>We are BloodHero</label>
        <h3 className='text-3xl font-semibold'>"Our Commitment is to Saving 
        Lives of People that Matters"</h3>
        <p>Together, we’re building a world where every drop of blood can be a beacon of hope."</p>
       <div className='flex gap-3  align-middle'>
       <a href="" className='text-white bg-red-500 h-fit py-3 px-5 rounded-lg w-fit flex gap-2 text-sm'>Read more 
            <FaArrowTrendUp className='mt-1 ml-3'/> </a>
            <a href="" className='flex text-black gap-2'>
                <img src="/how.png" className='h-12' alt="" />
                <label htmlFor="" className='mt-4'>How it works</label>
            </a>

       </div>
      </div>
            </div>
            <Description />
            <HorizontalScroll />
            <YouTubeVideo videoId="LHCob76kigA" />
            <Steps />
            <Newsletter />
            <Footer />
            </div>
  )
}

export default Homepage