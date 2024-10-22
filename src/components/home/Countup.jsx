"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const data = {
  rightContent: [
    {
      heading: "Tranparence",
      counter: {
        value: 100,
        duration: 2.5,
        suffix: "%"
      }
    },
    {
      heading: "Happy Customer",
      counter: {
        value: 5,
        duration: 2.5,
        suffix: " L+"
      }
    }
  ]
};

const Countup = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <section className="bg-[#7b071e] p-8 lg:p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

          {/* Left Content */}
          <div className="md:w-1/3 text-center md:text-left">
           <h1 className="text-white">Customer Experience</h1>
            <p className="text-xl lg:text-lg font-semibold text-white mt-2">
            Our commitment to excellence is reflected  in our successful rate 
            </p>
            <button className="mt-8 text-[#7b071e] text-sm lg:text-base font-semibold py-3 px-6 rounded-md bg-white transition">
              DISCOVER NOW
            </button>
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 bg-white shadow-md rounded-md px-7 py-10 flex flex-col md:flex-row justify-between items-center h-auto">
            <div className="w-full md:w-1/2 text-left px-4 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-black">{data.rightContent[0].heading}</h3>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7b071e] mt-4">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={data.rightContent[0].counter.value}
                    duration={data.rightContent[0].counter.duration}
                    suffix={data.rightContent[0].counter.suffix}
                  />
                )}
              </div>
            </div>

            {/* Horizontal border on mobile and vertical on larger screens */}
            <div className="w-44 h-px bg-[#7b071e] md:hidden my-6"></div>
            <div className="hidden md:block h-28 lg:px-6 border-l-2 border-[#7b071e] mb-4 md:mb-0"></div>

            <div className="w-full md:w-1/2 text-left px-4">
              <h3 className="text-xl font-semibold text-black">{data.rightContent[1].heading}</h3>
              <p className="text-sm text-gray-700 mt-2">{data.rightContent[1].paragraph}</p>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7b071e] mt-4">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={data.rightContent[1].counter.value}
                    duration={data.rightContent[1].counter.duration}
                    suffix={data.rightContent[1].counter.suffix}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Countup;
