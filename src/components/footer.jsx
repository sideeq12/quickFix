import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pb-8 sm:pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="space-y-4">
            <img src="/footerLogo.png" className="h-12 sm:h-16" alt="BloodHero Logo" />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              BloodHero is dedicated to connecting blood donors with recipients in need. 
              Our platform ensures that those in urgent need of blood can find donors quickly and efficiently. 
              Join us in saving lives and making a difference in your community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg sm:text-xl">About us</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg sm:text-xl">Contact us</h5>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Have questions or need assistance? Reach out via email or phone. 
              Our support team is here to help with any inquiries or issues you may have.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h5 className="font-bold text-lg sm:text-xl">Socials Link</h5>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TiSocialFacebook size={24} className="drop-shadow-md" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LiaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <RiTwitterXFill size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <CiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; 2025 BloodHero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;