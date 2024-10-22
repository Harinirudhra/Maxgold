
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import bgmobile from '../../../public/HeroAbout/aboutmob.png'

const AboutHero = () => {
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
                src="/HeroAbout/about.jpg"
                alt="hero"
                className="hidden object-cover lg:block w-full h-full p-4 rounded" />

            <img
                src={bgmobile.src}
                alt="RK"
                className='block lg:hidden w-screen h-screen object-cover p-4 rounded' />

            <div className="absolute inset-0 flex flex-col justify-start lg:justify-center lg:items-start items-center p-4 lg:p-20">
                <div className="text-center lg:text-left">
                    <h1 className={` bg-gradient-to-tr from-amber-300 to-yellow-500 text-transparent bg-clip-text text-3xl md:text-3xl pt-12 lg:text-6xl  font-bold transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        Max gold <span className=" pt-6 px-2 md:px-6 lg:px-0 md:font-medium lg:font-bold text-2xl md:text-xl lg:w-1/2 block">we are the best choice for you to sell your precious gold jewelry and get instant cash</span> 
                    </h1>
                    <p className='text-white'> </p>
                </div>
                
            </div>
        </div>
    );
};

export default AboutHero;

