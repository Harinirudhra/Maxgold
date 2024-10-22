"use client";

import Image from "next/image";
import React, { useState, useCallback } from "react";
import ScrollTrigger from 'react-scroll-trigger';

const NewWhy = () => {
  const benefits = [
    "No Service Charges",
    "Transparent Service",
    "Quick Response & Seamless Process",
    "Best Market Rates",
    "Final Quote Provided Over the Phone",
    "Fulfillment of Promised Quote",
    "Doorstep Service Available",
    "Highly Experienced Team",
    "90+ Years in Business",
    "200+ Branches in Tamil Nadu",
    "5 Star Rated Gold Buyer",
    "Over 500,000 Satisfied Customers",
  ];

  const [imageVisible, setImageVisible] = useState(false);

  const handleEnterViewport = useCallback(() => {
    setImageVisible(true);
  }, []);

  return (
    <section className="py-12 px-5 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#efbf04] mb-8">WHY CHOOSE US?</h2>
        
        <ScrollTrigger onEnter={handleEnterViewport}>
          <div
            className={`relative w-full h-full mb-8 transition-transform duration-700 ease-out ${imageVisible ? 'translate-x-0' : '-translate-x-full overflow-x-hidden overflow-y-hidden'}`}
          >
            <Image
              className=""
              src="/whyChoose/WHYCHOOSE.png"
              alt="Why Choose Us"
              width={1000}
              height={100}
              priority={true}
            />
          </div>
        </ScrollTrigger>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex items-center p-4 bg-[#550000] text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#800000]`}
              style={{
                animation: `slideInLeft 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2}s`, // Delay each item
              }}
            >
              <svg
                className="w-6 h-6 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default React.memo(NewWhy);
