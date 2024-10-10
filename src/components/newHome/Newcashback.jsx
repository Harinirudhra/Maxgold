import React from 'react'
import i from "../../../public/Newcashback/z.png"

const Newcashback = () => {
    return (
        <div className='w-auto h-auto py-5 md:py-16'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='px-10 md:px-6 lg:px-10 pt-14 text-center md:text-start'>
          <h1 className='text-red-600 text-xl md:text-base lg:text-3xl'>Max Gold’s History Since - 2006</h1>
          <p className='pt-5 text-2xl md:text-xl lg:text-2xl md:!leading-8'>We are the best choice for you to sell your precious gold jewelry and get instant cash.</p>
        </div>



        <div className='pt-5 md:pt-0 justify-center flex'>
          <img src={i.src} className='w-auto md:w-40 lg:w-auto' alt="Cashback image" />
        </div>

        <div className='pt-10 md:pt-14 text-center md:text-start px-10 md:px-6 lg:px-10'>
          <p className="text-base md:text-sm lg:text-2xl font-thin md:!leading-7">
            Looking to sell your gold jewelry? We offer a safe, reliable, and efficient service to get you instant cash. Whether it’s a necklace, earrings, or other pieces, we ensure you receive top value based on current market rates.
          </p>
        <button className="bg-red-600 text-white mt-5 py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300">
          Contact
        </button>
      
        </div>


      </div>
    </div>
    )
}

export default Newcashback
