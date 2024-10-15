// import React from 'react';

// const Goldrate = () => {
//   return (
//     <div className=' py-6 bg-white justify justify-center text-center'>
//       <h1 className=''>Before selling the gold, stay updated with today gold rate!</h1>
//       <h2 className='pb-5'>Today Gold Rate Per Gram in Chennai (INR)</h2>
//       <div className=' px-10 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>

//         <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 p-10 shadow-lg border-solid border-black rounded-lg m-4 md:mx-2">
//           <h1 className="text-[#f4d837] text-3xl font-bold mb-4 pb-4">Pure Gold (24K)</h1>
//           <div className='grid grid-cols-2 gap-2'>
//             <h3 className='text-2xl text-black'>1 Gram</h3>
//             <p className="text-black text-3xl font-bold">7,575</p>
//             <h3 className='text-2xl text-black'>8 Gram</h3>
//             <p className="text-black text-3xl font-bold">60,600</p>
//           </div>
//         </div>

//         <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 p-10 shadow-lg border-solid border-black  rounded-lg m-4 md:mx-2">
//           <h1 className="text-[#eae42a] text-3xl font-bold mb-4 pb-4">Standard Gold (22K)</h1>
//           <div className='grid grid-cols-2 gap-2'>
//             <h3 className='text-2xl text-black'>1 Gram</h3>
//             <p className="text-black text-3xl font-bold">7,120</p>
//             <h3 className='text-2xl text-black'>8 Gram</h3>
//             <p className="text-black text-3xl font-bold">56,960</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Goldrate;
import React from 'react';
import { FaCrown } from 'react-icons/fa';  // Icons for more creative design

const Goldrate = () => {
  return (
    <div className='py-10 bg-gradient-to-b from-yellow-50 to-yellow-100 text-center'>
      <h1 className='text-black text-xl font-semibold tracking-wide mb-2'>
        BEFORE SELLING THE GOLD, STAY UPDATED WITH TODAY'S GOLD RATE!
      </h1>
      <h2 className='text-[#efbf04] text-4xl font-bold mb-8'>
        Today Gold Rate Per Gram in Chennai (INR)
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 justify-items-center'>

        {/* Pure Gold (24K) Section */}
        <div className="w-full bg-gradient-to-b from-yellow-200 to-yellow-400 p-10 shadow-2xl rounded-lg transition-transform transform hover:scale-105">
          <div className='flex items-center justify-center mb-6'>
            <FaCrown className='text-[#f6f5f2] text-4xl mr-3'/>
            <h1 className="text-[#fbfbfa] text-3xl font-bold">Pure Gold (24K)</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h3 className='text-2xl text-gray-800'>1 Gram</h3>
              <p className="text-gray-900 text-3xl font-bold">7,575</p>
            </div>
            <div>
              <h3 className='text-2xl text-gray-800'>8 Gram</h3>
              <p className="text-gray-900 text-3xl font-bold">60,600</p>
            </div>
          </div>
        </div>

        {/* Standard Gold (22K) Section */}
        <div className="w-full bg-gradient-to-b from-[#e9e581] to-yellow-300 p-10 shadow-2xl rounded-lg transition-transform transform hover:scale-105">
          <div className='flex items-center justify-center mb-6'>
            <FaCrown className='text-[#f9f9f5] text-4xl mr-3'/>
            <h1 className="text-[#fafaf7] text-3xl font-bold">Standard Gold (22K)</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h3 className='text-2xl text-gray-800'>1 Gram</h3>
              <p className="text-gray-900 text-3xl font-bold">7,120</p>
            </div>
            <div>
              <h3 className='text-2xl text-gray-800'>8 Gram</h3>
              <p className="text-gray-900 text-3xl font-bold">56,960</p>
            </div>
          </div>
        </div>

      </div>
      <p className='text-sm text-gray-600 mt-6'>Last Update: 09:39:14 AM</p>
    </div>
  );
};

export default Goldrate;
