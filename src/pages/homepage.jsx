import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/hero';
import Description from '../components/description';
import YouTubeVideo from '../components/youtube';
import Steps from '../components/steps';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import { FaArrowTrendUp } from "react-icons/fa6";
import HorizontalScroll from '../components/articles/article';
import Recents from '../components/blogs/recents';
import Events from '../components/events';
import Freq from '../components/frequent';

const MotionDiv = ({ children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div 
      ref={ref}
      className={className}
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <MotionDiv className="relative grid my-8 sm:my-10 lg:my-20 justify-center w-full sm:w-5/6 grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-auto text-center bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="text-center col-span-1 space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-5xl">5k</h2>
          <span className="text-sm sm:text-base">Happy clients</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-5xl">7k</h2>
          <span className="text-sm sm:text-base">Donations</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-5xl">10k</h2>
          <span className="text-sm sm:text-base">Users</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-5xl">6000+</h2>
          <span className="text-sm sm:text-base">Customers</span>
        </div>
        <img src="/vector.png" className="absolute -top-80 h-[20rem] sm:h-[25rem] lg:h-[30rem] -left-14 z-10 hidden sm:block" alt="decoration" />
      </MotionDiv>

      <MotionDiv className="py-8 sm:py-12 w-full sm:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/IoJSN9u7qS0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-5">
          <label className="text-sm sm:text-base text-gray-600">We are BloodHero</label>
          <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">"Our Commitment is to Saving Lives of People that Matters"</h3>
          <p className="text-gray-600 text-sm sm:text-base">Together, we're building a world where every drop of blood can be a beacon of hope.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-start sm:items-center">
            <a href="#" className="text-white bg-red-500 h-fit py-3 px-5 rounded-lg w-fit flex items-center gap-2 text-sm hover:bg-red-600 transition-colors">
              Read more <FaArrowTrendUp className="mt-1" />
            </a>
            <a href="#" className="flex items-center gap-2 text-black hover:text-red-500 transition-colors">
              <img src="/how.png" className="h-8 sm:h-12" alt="How it works" />
              <span className="text-sm sm:text-base">How it works</span>
            </a>
          </div>
        </div>
      </MotionDiv>

      <Description />
      <Recents />
      <Events />
      <Freq />
      <Steps />
      <Newsletter />
    </div>
  );
}

export default Homepage;
