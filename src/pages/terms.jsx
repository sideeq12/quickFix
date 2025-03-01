import React from 'react'
import Jumbotron from '../components/jumbotron'
import { FaArrowTrendUp } from "react-icons/fa6";
import Services from '../components/services';
import JoinUs from '../components/joinUs';


const Terms = () => {
  return (
    <div>
        <Jumbotron title='Highlight' subheader={['Terms and Conditions']} />
        <div className='px-10'>
        <div className='flex gap-4 justify-center align-middle mt-10'>
            <span>Terms of Services</span>
            <hr className='w-1/3 lg:w-2/3 bg-black mt-3' />
        </div>
        <div className='flex gap-10 w-5/6 flex-wrap mx-auto mt-10'>
        <Services />
        <Services />
        <Services />       
        <Services />
        <Services />
        <Services />
        </div>
        <div className='my-20 w-5/6 mx-auto'>
            <h3 className='font-semibold text-2xl '>Amendments</h3>
            <p className='my-4 text-sm'>We may update this Privacy Policy and Terms of Service at any time. Users will be notified 
                of significant changes via email or in-app alerts.</p>
                <p className='text-sm'>These detailed policies and terms ensure compliance with GDPR, HIPAA, and other global standards, providing
                     clarity, security, and trust for Blood Hero users worldwide.</p>

            <div  className='h-72 bg-cover bg-center mt-4 w-full  bg-[url(/rect.png)]'> </div>
        </div>
        <JoinUs />
        </div>
    </div>
  )
}

export default Terms