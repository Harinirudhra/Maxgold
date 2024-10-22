"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import hero from '../../../public/ServiceHero/Serviceshero.jpg'
import heromob from '../../../public/ServiceHero/Servicesmobile.jpg'


const ServicesHero = () => {
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
                src={hero.src}
                alt="hero"
                className="hidden object-cover lg:block w-full h-full p-4 rounded" />

            <img
                src={heromob.src}
                alt="RK"
                className='lg:hidden  w-screen h-screen object-cover p-4 rounded' />

            <div className="absolute inset-0 flex flex-col justify-start lg:justify-center lg:items-start items-center p-4 lg:p-20">
                <div className="text-center lg:text-left">
                    <h1 className={` bg-gradient-to-tr from-amber-300 to-yellow-500 text-transparent bg-clip-text text-3xl md:text-3xl pt-12 lg:text-6xl  font-bold transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    Turning Treasures <br/> into Trust </h1> <br />
                    <h1 className={` bg-gradient-to-tr from-amber-300 to-yellow-500 text-transparent bg-clip-text text-3xl md:text-3xl pt-8 lg:text-6xl  font-bold transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    Service All Over India</h1>
                   
                </div>
                
            </div>
        </div>
    );
};

export default ServicesHero;



