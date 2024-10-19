"use client";
import React from "react";

// Define the card data as JSON
const cardData = [
  {
    title: "TRUST",
    description: "Backed by the most trusted people in the industry & in partnership with RBI approved institutions.",
    imageSrc: "/ourValueIcons/diamond.png",
    backgroundColor: "bg-red-400",
    roundedClass: "rounded-tr-[42px] rounded-b-xl text-white"
  },
  {
    title: "CONVENIENCE",
    description: "Our services are tech driven & designed to make your experience a tension-free one.",
    imageSrc: "/ourValueIcons/convenience.png",
    backgroundColor: "bg-gradient-to-b from-[#fbe8b4] to-[#f9d986]",
    roundedClass: "rounded-tl-[42px] rounded-b-xl text-black"
  },
  {
    title: "TRANSPARENCY",
    description: "What you see is what you get. Quite literally, no hidden charges and fees!",
    imageSrc: "/ourValueIcons/pay.png",
    backgroundColor: "bg-gradient-to-b from-[#fbe8b4] to-[#f9d986]",
    roundedClass: "rounded-br-[42px] rounded-t-xl "
  },
  {
    title: "SECURITY",
    description: "ISO certified, all your details and loan information is completely confidential.",
    imageSrc: "/ourValueIcons/security.png",
    backgroundColor: "bg-red-400",
    roundedClass: "rounded-bl-[42px] rounded-t-xl text-white"
  }
];

const OurValue = () => {
  return (
    <section className="px-4 py-10 md:py-12 bg-white ">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10">
          {/* Left side - Our Value Text */}
          <div className="flex flex-col justify-start relative items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
              <span className="text-red-500">Our</span> Value
            </h2>
            <img src="/road/waysz.png" alt="Arrows" className="h-96 w-full left-0 absolute bottom-0 lg:block hidden" />
          </div>

          {/* Right side - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10">
            {/* Map through the card data */}
            {cardData.map((card, index) => (
              <div key={index} className={`${card.backgroundColor} p-6 md:p-8 rounded-lg ${card.roundedClass} flex flex-col text-left`}>
                <img src={card.imageSrc} alt={card.title} className="mb-4 w-12 h-12" />
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{card.title}</h3>
                <p className=" text-sm md:text-base text-black">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-base md:text-xl mt-12 md:mb-14 text-gray-800 text-center font-normal mx-auto md:mx-20 lg:mx-60">
          At <span className="font-semibold">Max Gold</span>, our values are the bedrock of our business, shaping every
          aspect of our operations. Your search for a gold buyer near me comes to an end with us. We pride ourselves
          on these fundamental principles:
        </p>
      </div>
    </section>
  );
};

export default OurValue;