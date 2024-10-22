
// 'use client';
// import React from 'react';

// const ServicesHeroz = ({ title, description, imageurl }) => {
//   return (
//     <div className="relative flex justify-center text-center">
//       <img src={imageurl} className="object-cover w-screen h-screen" alt="hero background" />
//       <div className="absolute left-0 w-full h-full bg-black opacity-40"></div>

//       <div className="absolute justify-center items-center top-36 md:top-30 p-8 lg:w-1/3">
//     <h1 className="text-white bg-clip-text text-7xl pb-4 animate-fade-up">
//         {title}
//     </h1>
//     <p className="text-white text-2xl animate-fade-up w-full md:w-3/4 lg:w-full">
//         {description}
//     </p>
// </div>

      
//       <style jsx>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-up {
//           animation: fadeInUp 0.7s ease-out forwards;
//         }

//         .animate-fade-up:nth-child(1) {
//           animation-delay: 0.2s; /* Delay for the h1 */
//         }

//         .animate-fade-up:nth-child(2) {
//           animation-delay: 0.2s; /* Delay for the p */
//         }
//       `}</style>
//     </div>
//   );
// };

// const ServicesHero = () => {
//   return (
//     <ServicesHeroz
//       title="Turning Treasures into Trust"
//       description="Transform your gold into cash, ensuring value and fostering trust. Every transaction helps uplift both you and our community"
//       imageurl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f73bb61658493.5a75732e670c8.jpg"
//     />
//   );
// };

// export default ServicesHero;

"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import hero from '../../../public/ServiceHero/Servicespage1.jpg'
import heromob from '../../../public/ServiceHero/Servicespage.jpg'


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
                src={heromob.src}
                alt="hero"
                className="hidden object-cover lg:block w-full h-full p-4 rounded" />

            <img
                src={hero.src}
                alt="RK"
                className='lg:hidden  w-screen h-screen object-cover p-4 rounded' />

            <div className="absolute inset-0 flex flex-col justify-start lg:justify-center lg:items-start items-center p-4 lg:p-20">
                <div className="text-center lg:text-left">
                    <h1 className={` bg-gradient-to-tr from-amber-300 to-yellow-500 text-transparent bg-clip-text text-3xl md:text-3xl pt-12 lg:text-6xl  font-bold transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    Turning Treasures <br/> into Trust <span className=" pt-6 px-2 hidden md:flex md:px-6 lg:px-0 md:font-medium lg:font-bold text-2xl md:text-xl lg:w-1/2 block">Transform your gold into cash, ensuring value and fostering trust. Every transaction helps uplift both you and our community</span> 
                    </h1>
                   
                </div>
                
            </div>
        </div>
    );
};

export default ServicesHero;



