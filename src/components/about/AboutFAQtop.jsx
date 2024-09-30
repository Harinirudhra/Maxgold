import React from 'react'

const AboutFAQtop = () => {
  return (
    <div className='w-auto h-auto'>
    <div className=' justify-center items-center'>
        <div className='flex flex-col items-center'> {/* Add this div to center the heading */}
            <h1 className='text-center py-5 md:lg:py-10 font-bold'>Frequently Asked Questions</h1>
        </div>
        <div className='px-10 md:lg:px-16 '>
            <img src='/Faq/faq.jpg' alt="FAQ" className='rounded-2xl'/>
        </div>
    </div>
</div>

  )
}

export default AboutFAQtop