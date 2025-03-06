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
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-white shadow-md font-mono">
      <div className="flex justify-between border-b lg:border-b-0 items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <img src="/art.jpg" alt="logo" className="h-14" />

        {/* Mobile Menu Button */}
        <div className="md:hidden border-gray-200">
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center uppercase">
          <li>
            <a className="text-black hover:text-red-400" href="/">Home</a>
          </li>
          <li>
            <a className="text-black hover:text-red-400" href="/about">About Us</a>
          </li>

          {/* Dropdown Menu */}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="text-black hover:text-red-400 flex items-center">
              Highlight <GoPlus className="ml-1" />
            </div>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/Events">Events</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/terms">Terms & Condition</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/privacy">Privacy</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a className="text-black hover:text-red-400" href="/blog">Blog</a>
          </li>
          <li>
            <a className="text-black hover:text-red-400" href="/FAQ">FAQ</a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <Flag country={"NG"} className="w-12 h-8 rounded-md shadow-md" />
          <a href="/contact" className="py-2 px-4 bg-red-500 text-sm text-white rounded-md">
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-6 text-center">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6">
            <AiOutlineClose size={28} />
          </button>

          <ul className="space-y-6 text-lg">
            <li>
              <a className="text-black hover:text-red-400" href="/">Home</a>
            </li>
            <li>
              <a className="text-black hover:text-red-400" href="/about">About Us</a>
            </li>

            {/* Mobile Dropdown */}
            <li>
              <div
                className="text-black hover:text-red-400 block cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Highlight <GoPlus className="inline-block" />
              </div>
              {isDropdownOpen && (
                <ul className="bg-gray-100 mt-2">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/Events">Events </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/privacy">Privacy</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a className="text-black hover:text-red-400" href="/blog">Blog</a>
            </li>
            <li>
              <a className="text-black hover:text-red-400" href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/contact" className="py-2 px-8 bg-red-500 text-white rounded-md">
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
