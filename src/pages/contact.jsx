import React from 'react'
import Jumbotron from '../components/jumbotron'
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdWifiCalling2 } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import JoinUs from '../components/joinUs';



const Contact = () => {
  return (
    <div>
        <Jumbotron title="Contact" subheader={["Let's Connect", "Get in touch"]}/>
        <div className='w-5/6 mx-auto my-10 grid md:grid-cols-2 gap-6 justify-between text-left'>
            <div className=''><h2 className='text-5xl font-semibold'>Let's Connect</h2>
            <p className='my-6'>Lorem Ipsum is simply dummy text of the printing .</p></div>
            <div className='h-72 bg-cover bg-center bg-[url(/group.png)]'>

</div>
        </div>

        <div className='w-5/6 mx-auto my-20 grid lg:grid-cols-3  text-left'>
            <div className='flex space-x-3 py-4'>
            <div className='p-1 rounded-full drop-shadow-md  border w-fit'> 
            <TiSocialFacebook  size={30}/>
                </div><div className='p-1 rounded-full drop-shadow-md  border w-fit'> 
            <IoLogoInstagram  size={30}/>
                </div><div className='p-1 rounded-full drop-shadow-md  border w-fit'> 
            <FaXTwitter  size={30}/>
                </div><div className='p-1 rounded-full drop-shadow-md  border w-fit'> 
            <FaLinkedinIn  size={30}/>
                </div>
            </div>
            <div className='flex gap-2 border-r py-4  lg:border-l text-center align-middle lg:justify-center'>
                <MdWifiCalling2 size={30} />
                <span>+968 7887 8320</span>
            </div>  <div className='flex lg:border-l gap-2 lg:px-4 py-4'>
                <MdLocationPin size={30} />
                <span>Blood Hero HQ, 123 Life Avenue, Hope City, USA
                </span>
            </div>
        </div>
        <div className='text-left w-5/6 mx-auto my-10'>
            <h2 className='font-semibold text-3xl'>Get-in-touch </h2>
            <p>Use our contact us Page to get personalized assistance.</p>
</div>
            <div className='mt-10 bg-[#F5E8DE] w-full py-20'>
                <h4 className='font-semibold text-3xl my-2'>Need Help? Submit a Ticket Below!</h4>
                <p>Lorem Ipsum is simply dummy text of the printing .</p>
                <form className='my-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-5/6 lg:w-1/2 text-left mx-auto'>
                <div className='col-span-2'>
                        <label htmlFor="First Name">First Name</label>
                        <input type="text" name="" id="" className='h-12 rounded-md bg-white w-full' />
                    </div>
                         <div className='col-span-1'>
                        <label htmlFor="First Name">Last Name</label>
                        <input type="text" name="" id="" className='h-12 bg-white rounded-md w-full' />
                    </div>
                    <div className='col-span-2'>
                            <label htmlFor="Email Address">Email Address</label>
                            <input type="text" name="" id="" className='bg-white h-12 w-full'/>
                    </div> <div className='col-span-2'>
                            <label htmlFor="Email Address">Message</label>
                            <textarea  name="" id="" className='h-32 w-full bg-white'/>
                    </div>
                    <button className='bg-red-500  text-white w-full'>Submit ticket</button>
                </div>
                </form>
                
            </div>
            <JoinUs />
        </div>

  )
}

export default Contact