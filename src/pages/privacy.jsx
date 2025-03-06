import React, { useState } from 'react'
import Jumbotron from '../components/jumbotron'
import JoinUs from '../components/joinUs'
import Services from '../components/services'

const Privacy = () => {
    const items = [
        "Information We Collect",
        "How We Use Your Information",
        "How We Share Your Information",
        "Data Security",
        "Your Privacy Rights",
        "Changes to Our Privacy Policy",
    ];
    const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
        <Jumbotron title='Highlight' subheader={['Privacy Policy']} />
        <div className='flex flex-col lg:flex-row w-5/6 mx-auto py-20 text-left align-middle justify-around'>
        <div className='lg:w-1/2 leading-[40px]'>
        <h3 className='text-2xl font-semibold'>Privacy Policy</h3>
        At Blood Hero, we value and respect your privacy.
         This Privacy Policy explains in detail how we collect, use, store, and protect your information,
          including compliance with global standards such as the General Data Protection Regulation (GDPR),
           Health Insurance Portability and Accountability Act (HIPAA), and other applicable data protection laws.
            By accessing or using our application, 
        you agree to the terms outlined in this Privacy Policy.
        </div>
        <div className="h-80 bg-cover bg-center lg:w-1/3 bg-red-400 rounded-lg bg-[url(/abut.svg)]"></div>
      </div>
        <div className='flex gap-4 justify-center align-middle mt-10 mx-auto w-5/6'>
            <span className='font-semibold text-xl'>Information We Collect</span>
            <hr className=' w-3/4 bg-black mt-3' />
        </div>
        <div className='flex gap-10 w-5/6 flex-wrap mx-auto mt-10'>
        <Services />
        <Services />
        <Services />
        </div>
        <div className='w-5/6 flex mx-auto my-10 border rounded-lg p-10 border-black'> 
            <div className='w-1/4 py-10 text-left border-r  pr-10 border-black'>
        
            <ul className="space-y-4 ">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`cursor-pointer  py-2 transition duration-300 
                    ${activeIndex === index ? "text-red-500 border-b border-red-500 pb-2 w-fit" : "text-black"}`}
                    onClick={() => setActiveIndex(index)}
                >
                    {item}
                </li>
            ))}
        </ul>
            </div>
            <div className='text-left pl-10 space-y-5'>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Improving Your Experience</h3>
                    <p className='text-sm my-4'>We use your data to enhance your experience by:</p>
                    <ul className='text-sm space-y-4'>
                    <li>Customizing app content based on your preferences.</li>
                    <li>Offering relevant tips, notifications, and educational resources..</li>
                    <li>Simplifying navigation through intuitive interface</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Improving Your Experience</h3>
                    <p className='text-sm my-4'>We use your data to enhance your experience by:</p>
                    <ul className='text-sm space-y-4'>
                    <li>Customizing app content based on your preferences.</li>
                    <li>Offering relevant tips, notifications, and educational resources..</li>
                    <li>Simplifying navigation through intuitive interface</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Improving Your Experience</h3>
                    <p className='text-sm my-4'>We use your data to enhance your experience by:</p>
                    <ul className='text-sm space-y-4'>
                    <li>Customizing app content based on your preferences.</li>
                    <li>Offering relevant tips, notifications, and educational resources..</li>
                    <li>Simplifying navigation through intuitive interface</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Improving Your Experience</h3>
                    <p className='text-sm my-4'>We use your data to enhance your experience by:</p>
                    <ul className='text-sm space-y-4'>
                    <li>Customizing app content based on your preferences.</li>
                    <li>Offering relevant tips, notifications, and educational resources..</li>
                    <li>Simplifying navigation through intuitive interface</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Improving Your Experience</h3>
                    <p className='text-sm my-4'>We use your data to enhance your experience by:</p>
                    <ul className='text-sm space-y-4'>
                    <li>Customizing app content based on your preferences.</li>
                    <li>Offering relevant tips, notifications, and educational resources..</li>
                    <li>Simplifying navigation through intuitive interface</li>
                    </ul>
                </div>
                
            </div>
        </div>
        <JoinUs />
    </div>
  )
}

export default Privacy