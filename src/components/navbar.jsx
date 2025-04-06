import React, { useState, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Flag from "react-world-flags";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-sm font-mono  w-full top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-20 py-3">
        {/* Logo */}
        <img src="/art.jpg" alt="logo" className="h-14" />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center uppercase text-sm lg:text-base">
          <li>
            <a className="text-black hover:text-red-400 transition-colors" href="/">Home</a>
          </li>
          <li>
            <a className="text-black hover:text-red-400 transition-colors" href="/about">About Us</a>
          </li>

          {/* Dropdown Menu */}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="text-black hover:text-red-400 flex items-center transition-colors">
              Highlight <GoPlus className="ml-1" />
            </div>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 py-2">
                <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                  <a href="/Events">Events</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                  <a href="/terms">Terms & Condition</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                  <a href="/privacy">Privacy</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a className="text-black hover:text-red-400 transition-colors" href="/blog">Blog</a>
          </li>
          <li>
            <a className="text-black hover:text-red-400 transition-colors" href="/FAQ">FAQ</a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <Flag country={"NG"} className="w-10 h-6 sm:w-12 sm:h-8 rounded-md shadow-md" />
          <a href="/contact" className="py-2 px-4 bg-red-500 text-sm text-white rounded-md hover:bg-red-600 transition-colors">
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <AiOutlineClose size={28} />
          </button>

          <ul className="space-y-6 text-lg">
            <li>
              <a className="text-black hover:text-red-400 transition-colors" href="/">Home</a>
            </li>
            <li>
              <a className="text-black hover:text-red-400 transition-colors" href="/about">About Us</a>
            </li>

            {/* Mobile Dropdown */}
            <li>
              <div
                className="text-black hover:text-red-400 block cursor-pointer transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Highlight <GoPlus className="inline-block ml-1" />
              </div>
              {isDropdownOpen && (
                <ul className="bg-gray-50 mt-2 rounded-lg overflow-hidden">
                  <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                    <a href="/Events">Events</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 transition-colors">
                    <a href="/privacy">Privacy</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a className="text-black hover:text-red-400 transition-colors" href="/blog">Blog</a>
            </li>
            <li>
              <a className="text-black hover:text-red-400 transition-colors" href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/contact" className="py-2 px-8 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
