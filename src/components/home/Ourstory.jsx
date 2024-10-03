"use client"
import React from 'react'

const Ourstory = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/RKImages/gold.webp')",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          opacity: "20%"
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-red-100/80 to-red-300/40 z-10"></div>

      {/* Content Over Both Image and Gradient */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 md:px-16">
   
        <div className="text-left max-w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
            Max Gold – Best gold buyer near me
          </h1>
          <p className="mt-6 text-xs lg:text-lg text-gray-900">
            Welcome to Max Gold, where your old gold transforms into instant cash. We understand the sentimental and monetary value your gold jewellery, and we are dedicated to providing a seamless and trustworthy experience for selling your precious Gold.          </p>
          <p className="mt-6 text-xs lg:text-xl font-semibold text-gray-900">
            Looking for "Gold buyer near me". You have reached the right destination. Yes! Max Gold is most trusted Old gold buyer in Chennai offering most competitive market rates for your gold jewellery.          </p>
          <p className="mt-6 text-xs lg:text-lg text-gray-900">
            Max Gold is a leading name in the world of precious metals, specializing in buying and selling gold, silver, platinum, and other valuable items. Established with a commitment to integrity, trust, and exceptional service, we have become a trusted partner for individuals and businesses looking to turn their precious metals into cash or invest in tangible assets.          </p>

        </div>
      </div>
    </div>



  );
}


export default Ourstory