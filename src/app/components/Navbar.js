"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import fllowLogo from "./images/FllowLogo.png";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex flex-wrap justify-between items-center gap-4 px-[5%] py-6 bg-[#6355FF]">
        <div className="flex items-center gap-6">
          <Image alt="flow logo" src={fllowLogo} className="w-[100px]" />
          <p className="text-[18px] hidden md:block font-extrabold text-[#fff]">Home</p>
          <p className="text-[18px] hidden md:block font-extrabold text-[#B1ABFF]">Our mission</p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button type='button' className="text-[16px] font-[600] text-[#fff]">
            <a href="https://admin.fllow.store" target='_blank'>Log in</a>
          </button>
          <button type='button' className="text-[16px] font-[600] text-[#00106D] bg-[#fff] py-[10px] px-[20px] rounded-[10px]">
            <a href="https://admin.fllow.store" target='_blank'>Sign Up</a>
          </button>
        </div>
        <div className="md:hidden flex items-center"> {/* Show this section on small screens */}
          {isOpen ? (
            <IoMdClose className="text-white text-xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <RxHamburgerMenu className="text-white text-xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-[#6355FF] py-4 px-8 flex flex-col">
          <div className="pt-[13%]">
            <div>
              <p className="text-[18px] font-extrabold text-[#fff]">Home</p>
              <p className="text-[18px] font-extrabold py-4 text-[#B1ABFF]">Our mission</p>
            </div>
            <button type='button' className="text-[16px] block font-[600] text-[#fff] mt-[4%] mb-2">Log in</button>
            <button type='button' className="text-[16px] font-[600] w-full text-[#00106D] bg-[#fff] py-[10px] px-[20px] rounded-[10px]">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
