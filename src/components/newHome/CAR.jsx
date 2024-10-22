"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import Image from "next/image";
import ScrollTrigger from 'react-scroll-trigger';
import mainbg from "../../../public/RKImages/ramyazzx.png"


const CAR = () => {
  // Define all your benefit data here
  const benefits = [
    { id: 1, text: "Which is better- 18k Vs 22k Gold?" },
    { id: 2, text: "Understand the gold weight changes when melting", },
    { id: 3, text: "Explaining whether it's good to sell old gold.", },
    { id: 4, text: "Where to sell gold for cash in Chennai." },
    { id: 5, text: "Documents required to sell old gold" },
    { id: 6, text: "How to get instant cash for selling old gold in Chennai" },
    { id: 7, text: "Finding the best price for selling old gold." },
    { id: 8, text: "Comparison between selling and exchanging gold" }
  ];


  const [imageVisible, setImageVisible] = useState(false);

  const handleEnterViewport = () => {
    setImageVisible(true);
  };

  return (
    <section className="py-12 px-5 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#efbf04] mb-8">
          Customer Assistance Repository
        </h2>
        <ScrollTrigger onEnter={handleEnterViewport}>
          <div
            className={`relative w-full h-full mb-8 transition-transform duration-700 ease-out ${imageVisible ? 'translate-x-0' : '-translate-x-full overflow-x-hidden overflow-y-hidden'}`}
          >
            <Image
              className=""
              src={mainbg.src}
              alt="Why Choose Us"
              width={1000}
              height={100}
              priority={true}
            />
          </div>
        </ScrollTrigger>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <Link href={`/benefits/${benefit.id}`} key={benefit.id}>
              <div className="flex items-center p-4 bg-[#550000] text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#800000] cursor-pointer">
                <span>{benefit.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAR;
