import React from 'react'
import Image from 'next/image'
import bg from '../../../public/Logo/MaxGoldlogo.jpg'

const Aboutsecond = () => {
  return (
    <section className="about-text sig bg-gradient-to-b bg-[#550000] py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:flex-row max-w-screen-lg mx-auto items-center">
          <div className="md:w-1/3 mb-5 md:mb-0 text-center">
            <Image
              id="designups-symbol"
              src={bg}
              alt="DesignUps symbol glitch animation"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 md:ml-8 text-blue-50">
            <h2 className="mb-4 text-3xl md:text-3xl font-semibold bg-gradient-to-r from-[#F7EF8A] to-[#E0AA3E] text-transparent bg-clip-text p-4">We create <em>signature moments</em></h2>
            <p className="mb-4 text-xl p-4">MaxGold started in year 2006 and in short span of time 1000s of Happy customers in our list & keeps growing by word of mouth advertisment through customers who used our services.We are leading cash for gold buyers in chennai</p>
            <p className="mb-4 text-xl text-white p-4">Looking for Gold buyer near me. You have reached the right destination. Yes Max Gold is most trusted Old gold buyer in Chennai offering most competitive market rates for your gold jewellery.Max Gold is a leading name in the world of precious metals, specializing in buying and selling gold, silver, platinum, and other valuable items. Established with a commitment to integrity, trust, and exceptional service, we have become a trusted partner for individuals and businesses looking to turn their precious metals into cash or invest in tangible assets.</p>

            <a href="#_" class="relative rounded px-5 py-2.5 overflow-hidden group bg-white hover:bg-gradient-to-r hover:from-white hover:to-gray-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-yellow-500 transition-all ease-out duration-300 ml-4">
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutsecond