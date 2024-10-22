"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import add1 from '../../../public/RKImages/ADD1.PNG'
import add2 from '../../../public/RKImages/ADD3.PNG'

const MaxTamil = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); // Delay for animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-white bg-cover bg-center h-screen flex items-center">
            <img
                src={add1.src}
                alt="hero"
                className="hidden object-cover lg:block w-full h-full p-4 rounded" />

            <img
                src={add2.src}
                alt="RK"
                className='block lg:hidden w-screen h-screen object-cover p-4 rounded' />

            
        </div>
    );
};

export default MaxTamil;
