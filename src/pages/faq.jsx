import React from 'react'
import Jumbotron from '../components/jumbotron'
import FAQAccordion from '../components/accordion'

const FAQ = () => {
  return (
    <div>
        <Jumbotron title='FAQ' subheader={['FAQ', 'What we do']} />
      <div className='w-5/6 mx-auto text-left py-10'>
      <h4 className='font-semibold text-2xl mb-4'>Frequently Ask Questions</h4>
      <hr />
      </div>
        <div>
            <FAQAccordion />
        </div>
        <div className='grid lg:grid-cols-2 w-5/6  gap-6 justify-between mx-auto py-20'>
            <div className=' text-left'>
                <h4 className='font-semibold text-3xl mb-6 text-left'>What we do</h4>
                <p>
                Blood Hero is an innovative platform dedicated to bridging the gap between blood donors and recipients across Nigeria. With our user-friendly app and website, we connect those in urgent need of blood with willing donors nearby, saving precious time and lives in emergency situations.
                </p>
                <div className='bg-cover h-72 mt-6  bg-center bg-[url(/sick.png)]'>
</div>
            </div>
            <div className='bg-[#D66F6F] flex flex-col 
            space-y-8
            text-center justify-center align-middle text-white lg:w-3/4 rounded-lg p-4'>
                <h4 className='font-semibold text-2xl'>Ask NOW</h4>
                <p>Do you still have more questions?
                Hear from our team directly below</p>
                <div className='bg-white w-3/4 p-4 mx-auto rounded-lg mt-4  text-red-500'>
                    <p>We are here to provide lasting 
                    solutions to your complaints.</p>
                    <button className='bg-red-500 text-white'>Ask Help Desk</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FAQ