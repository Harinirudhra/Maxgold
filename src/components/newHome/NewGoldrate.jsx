import React from 'react';

const Goldrate = () => {
  return (
    <div className=' py-6 bg-white justify justify-center text-center'>
      <h1 className=''>Before selling the gold, stay updated with today gold rate!</h1>
      <h2 className='pb-5'>Today Gold Rate Per Gram in Chennai (INR)</h2>
      <div className=' px-10 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>

        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 p-10 shadow-lg border-solid border-black rounded-lg m-4 md:mx-2">
          <h1 className="text-[#f4d837] text-3xl font-bold mb-4 pb-4">Pure Gold (24K)</h1>
          <div className='grid grid-cols-2 gap-2'>
            <h3 className='text-2xl text-black'>1 Gram</h3>
            <p className="text-black text-3xl font-bold">7,575</p>
            <h3 className='text-2xl text-black'>8 Gram</h3>
            <p className="text-black text-3xl font-bold">60,600</p>
          </div>
        </div>

        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 p-10 shadow-lg border-solid border-black  rounded-lg m-4 md:mx-2">
          <h1 className="text-[#eae42a] text-3xl font-bold mb-4 pb-4">Standard Gold (22K)</h1>
          <div className='grid grid-cols-2 gap-2'>
            <h3 className='text-2xl text-black'>1 Gram</h3>
            <p className="text-black text-3xl font-bold">7,120</p>
            <h3 className='text-2xl text-black'>8 Gram</h3>
            <p className="text-black text-3xl font-bold">56,960</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Goldrate;
