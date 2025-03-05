import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Flag from "react-world-flags";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-mono">
      <div className="flex justify-between items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <img src="/art.jpg" alt="logo" className="h-14" />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
                  <a href="/contact">Contact Us </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/terms">Terms & Condition </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/privacy"> Privacy</a>
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
          <button className="py-2 px-4 bg-red-500 text-sm text-white rounded-md">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 space-y-4 text-center">
          <li>
            <a className="text-black hover:text-red-400 block" href="/">Home</a>
          </li>
          <li>
            <a className="text-black hover:text-red-400 block" href="/about">About Us</a>
          </li>

          {/* Mobile Dropdown */}
          <li>
            <div
              className="text-black hover:text-red-400 block w-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Highlight <GoPlus className="inline-block" />
            </div>
            {isDropdownOpen && (
              <ul className="bg-gray-100 mt-2">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/contact"> Contact Us</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/terms">Terms & Conditions 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/privacy"> Privacy</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a className="text-black hover:text-red-400 block" href="/blog">Blog</a>
          </li>
          <li>
            <a className="text-black hover:text-red-400 block" href="/FAQ">FAQ</a>
          </li>
          <li>
            <button className="py-2 px-8 w-fit bg-red-500 text-white rounded-md ">
              Contact Us
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
