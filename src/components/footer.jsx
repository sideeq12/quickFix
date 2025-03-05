import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => {
  return (
    <footer className=" py-6 text-left bg-black
     text-white">
      <div className="container border-b py-10 mx-auto w-5/6 
      gap-8 grid grid-cols-3 lg:grid-cols-4 justify-between ">
        <div className=' text-left col-span-2'>
         <img src="/footerLogo.png" className='h-16' alt="" />
          <p className="text-sm mt-2">    BloodHero is dedicated to connecting blood donors with recipients in need. Our platform ensures that those in urgent need of blood can find donors quickly and efficiently. Join us in saving lives and making a difference in your community.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3 mt-4">About us</h5>
          <ul>
            <li>Portfolio
            </li>
            <li>Career</li>
            <li>Visit Us</li>
          </ul>
        </div>
        <div className='col-span-2'>
          <h5 className="font-bold text-lg mb-3">Contact us</h5>
          <p className='text-sm'>     Have questions or need assistance? Reach out via email or phone. Our support team is here to help with any inquiries or issues you may have.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-lg">Socials Link</h5>
          
          <div className='flex gap-2 py-2'>
            <TiSocialFacebook size={20} className='drop-shadow-md'/>
            <LiaInstagram />
            <RiTwitterXFill />
            <CiLinkedin />
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2025 BloodHero. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;