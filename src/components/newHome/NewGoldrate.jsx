'use client'
import React from 'react';
import { FaCrown } from 'react-icons/fa';  // Icons for more creative design

const Goldrate = () => {
  return (
    <div className='lg:py-40 py-10 bg-white text-center'>
      <h1 className='text-black text-xl font-semibold tracking-wide mb-2'>
        BEFORE SELLING THE GOLD, STAY UPDATED WITH TODAYS GOLD RATE!
      </h1>
      <h2 className='text-[#efbf04] text-4xl font-bold mb-12'>
        Today Gold Rate Per Gram in Chennai (INR)
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 justify-items-center'>

        {/* Pure Gold (24K) Section */}
        <div className="w-full bg-[#7b071e]  p-10 shadow-2xl rounded-lg transition-transform transform hover:scale-105">
          <div className='flex items-center justify-center mb-6'>

            <h1 className="text-[#fbfbfa] text-3xl font-bold">Pure Gold (24K)</h1>
          </div>
          <div className='grid gap-4'>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>1 Gram</h3>
              <p className="text-white text-3xl font-bold">7,575</p>
            </div>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>8 Gram</h3>
              <p className="text-white text-3xl font-bold">60,600</p>
            </div>
          </div>
        </div>
        {/* Standard Gold (22K) Section */}
        <div className="w-full bg-[#7b071e] p-10 shadow-2xl rounded-lg transition-transform transform hover:scale-105">
          <div className='flex items-center justify-center mb-6'>

            <h1 className="text-[#fbfbfa] text-3xl font-bold">Standard Gold (22K)</h1>
          </div>
          <div className='grid gap-4'>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>1 Gram</h3>
              <p className="text-white text-3xl font-bold">7,575</p>
            </div>
            <div className='grid grid-cols-2'>
              <h3 className='text-2xl text-gray-100'>8 Gram</h3>
              <p className="text-white text-3xl font-bold">60,600</p>
            </div>
          </div>
        </div>




      </div>
      <p className='text-sm text-gray-600 mt-10'>Last Update: 09:39:14 AM</p>
    </div>
  );
};

export default Goldrate;
