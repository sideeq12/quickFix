import React from 'react'
import Hero from '../components/hero'
import Description from '../components/description'
import YouTubeVideo from '../components/youtube'
import Steps from '../components/steps'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'

const Homepage = () => {
  return (
    <>
        <Hero />
        <div className='relative flex w-screen justify-center gap-32 items-center bg-white h-96'>
            <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-5xl'>5k</h2>
                <span>Happy clients</span>
            </div> <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-5xl'> 7k</h2>
                <span>Donations</span>
            </div> <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-5xl'>10k</h2>
                <span> Users</span>
            </div> <div className='flex flex-col items-center space-y-2'>
                <h2 className='font-bold text-5xl'>6000+</h2>
                <span>Customers</span>
            </div>
            
     <img src="/vector.png" className='absolute -top-80 h-[30rem] left-0 z-10' alt="" />
            </div>
            <div className='py-4 px-20 text-center'>
                <h3 className='text-3xl font-bold mb-4'>What we do</h3>
                <p className='w-2/3 mx-auto'>
                Blood Hero is an innovative platform dedicated to bridging the gap between blood donors and recipients across Nigeria. With our user-friendly app and website, we connect those in urgent need of
                 blood with willing donors nearby, saving precious time and lives in emergency situations.
                </p>
            </div>
            <Description />
            <YouTubeVideo videoId="LHCob76kigA" />
            <Steps />
            <Newsletter />
            <Footer />
            </>
  )
}

export default Homepage