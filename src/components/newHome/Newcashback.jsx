"use client"
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import i from "../../../public/instant_cash.png";

const Newcashback = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Flag to track if animation has occurred

  return (
    <ScrollTrigger
      onEnter={() => {
        if (!hasAnimated) { // Check if animation has not occurred yet
          setHasAnimated(true); // Set the flag to true after the first animation
        }
      }}
    >
      <div className={`w-auto h-auto bg-white py-5 md:py-16 transform transition-all duration-300 
        ${hasAnimated ? 'translate-x-0 scale-100 opacity-100' : 'translate-y-10 scale-90 opacity-0'}`}>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='px-10 md:px-6 lg:px-10 pt-14 text-center md:text-start'>
            <h1 className='text-[#efbf04] text-3xl md:text-base lg:text-3xl'>Max Golds History Since - 1990</h1>
            <p className='pt-5 text-2xl text-black md:text-xl lg:text-2xl md:!leading-8'>We are the best choice for you to sell your precious gold, silver, platinum, diamond and ruby jewelry and get instant cash.</p>
          </div>

          <div className='flex justify-center items-center pt-5 md:pt-0'>
            <img src={i.src} className='w-auto md:w-40 lg:w-auto' alt="Cashback image" />
          </div>

          <div className='pt-10 md:pt-14 text-center md:text-start px-10 md:px-6 lg:px-10'>
            <p className="text-base md:text-sm text-black lg:text-2xl font-thin md:!leading-7 mb-6">
              Looking to sell your gold jewelry? We offer a safe, reliable, and efficient service to get you instant cash. Whether it’s a necklace, earrings, or other pieces, we ensure you receive top value based on current market rates.
            </p>
            <a href="#_" className="rounded py-3 px-8 overflow-hidden group bg-[#7b071e] relative hover:bg-gradient-to-r hover:from-red-700 hover:to-red-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-700 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Newcashback;
