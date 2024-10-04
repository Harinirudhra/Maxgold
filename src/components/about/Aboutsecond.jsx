import React from 'react'
import Image from 'next/image'
import bg from '../../../public/Logo/MaxGoldlogo.jpg'

const Aboutsecond = () => {
  return (
    <section className="about-text sig bg-gradient-to-b from-red-900 to-red-950 py-16">
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
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold">We create <em>signature moments</em></h2>
          <p className="mb-4">MaxGold started in year 2006 and in short span of time 1000's of Happy customers in our list & keeps growing by word of mouth advertisment through customers who used our services.We are leading cash for gold buyers in chennai</p>
          <p className="mb-4 text-white">Looking for "Gold buyer near me". You have reached the right destination. Yes! Max Gold is most trusted Old gold buyer in Chennai offering most competitive market rates for your gold jewellery.Max Gold is a leading name in the world of precious metals, specializing in buying and selling gold, silver, platinum, and other valuable items. Established with a commitment to integrity, trust, and exceptional service, we have become a trusted partner for individuals and businesses looking to turn their precious metals into cash or invest in tangible assets.</p>

          <a className="btn bg-yellow-600 text-white px-4 py-2 rounded" href="/contact/">Contact us</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutsecond