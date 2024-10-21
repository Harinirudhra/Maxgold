'use client'
import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
// import React from 'react'
import Image from 'next/image'
import bg from '../../../public/Logo/MaxGoldlogo.jpg'

const Aboutsecond = () => {
  const [scrolling, setScrolling] = useState(false);
  return (
    <section className="about-text  bg-gradient-to-b bg-[#7b071e] px-2 md:px-4 py-16">
      <ScrollTrigger onEnter={() => setScrolling(true)} onExit={() => setScrolling(false)}>
      <div className="container mx-auto">
        <div className={`flex flex-col gap-6 md:flex-row  mx-auto items-center transform transition-all duration-700 ${scrolling ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="md:w-1/2 pb-5 text-blue-50 ">
            <h2 className="mb-4 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#F7EF8A] to-[#E0AA3E] text-transparent bg-clip-text p-4">We create <em>signature moments</em></h2>
            <p className="mb-4 text-xl p-4">MaxGold started in year 2006 and in a short span of time has 1000s of happy customers in our list, growing by word of mouth advertising through customers who have used our services. We are leading cash for gold buyers in Chennai.</p>
            <p className="mb-4 text-xl text-white p-4">Looking for a gold buyer near you? You have reached the right destination. Yes, Max Gold is the most trusted old gold buyer in Chennai, offering the most competitive market rates for your gold jewellery. Max Gold is a leading name in the world of precious metals, specializing in buying and selling gold, silver, platinum, and other valuable items. Established with a commitment to integrity, trust, and exceptional service, we have become a trusted partner for individuals and businesses looking to turn their precious metals into cash or invest in tangible assets.</p>

            <a href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r hover:bg-white text-black hover:ring-2 hover:ring-offset-2 hover:ring-yellow-500 transition-all ease-out duration-300 ml-4">
              <span className="relative">Contact</span>
            </a>
          </div>
          <div className={`md:w-1/2  md:mb-0 text-center transform transition-all duration-700 ${scrolling ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <Image
              id="designups-symbol"
              src={bg}
              alt="DesignUps symbol glitch animation"
              className="w-screen h-screen"
            />
          </div>
        </div>
      </div>
      </ScrollTrigger>
    </section>
  )
}

export default Aboutsecond;
