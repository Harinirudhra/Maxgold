"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); // Delay for animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-red-100 bg-cover bg-center h-screen flex items-center">
            <img
                src="/RKImages/ramyamain.jpg"
                alt="hero"
                className="hidden object-cover lg:block w-full h-full p-4 rounded" />

            <img
                src="/RKImages/ramyamobile.jpg"
                alt="RK"
                className='block lg:hidden w-screen h-screen object-cover p-4 rounded' />

            <div className="absolute inset-0 flex flex-col justify-start lg:justify-end lg:items-start items-center p-4 lg:p-20">
                <div className="text-center lg:text-left">
                    <h1 className={`text-white text-3xl md:text-3xl pt-12 lg:text-6xl lg:w-1/3 font-bold transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        You deserve valuable price in<span className="block">market</span>
                    </h1>
                </div>
                <div className="flex flex-row float-start lg:flex-row gap-4 lg:gap-6 -mt-1 lg:mt-8 p-6">
                    <Link href="/contact" smooth={true} duration={800} className="scroll-link">
                        <button className={`bg-[#efbf04] text-black font-bold py-3 px-6 -ml-5 rounded-xl hover:bg-red-500 hover:text-white transition-transform duration-500 ease-in-out ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-4 opacity-0'}`}>
                            Sell Gold
                        </button>
                    </Link>

                    <Link href="/about">
                        <button className={`bg-opacity-30 backdrop-blur-sm border border-white text-white font-bold py-3 px-6 rounded-xl hover:bg-red-500 transition-transform duration-500 ease-in-out ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-4 opacity-0'}`}>
                            Know more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
