
'use client';
import React from 'react';

const ServicesHeroz = ({ title, description, imageurl }) => {
  return (
    <div className="relative flex justify-center text-center">
      <img src={imageurl} className="object-cover w-screen h-screen" alt="hero background" />
      <div className="absolute left-0 w-full h-full bg-black opacity-40"></div>

      <div className="absolute justify-center items-center top-36 md:top-30 p-8 lg:w-1/3">
    <h1 className="text-white bg-clip-text text-7xl pb-4 animate-fade-up">
        {title}
    </h1>
    <p className="text-white text-2xl animate-fade-up w-full md:w-3/4 lg:w-full">
        {description}
    </p>
</div>

      
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-fade-up:nth-child(1) {
          animation-delay: 0.2s; /* Delay for the h1 */
        }

        .animate-fade-up:nth-child(2) {
          animation-delay: 0.2s; /* Delay for the p */
        }
      `}</style>
    </div>
  );
};

const ServicesHero = () => {
  return (
    <ServicesHeroz
      title="Turning Treasures into Trust"
      description="Transform your gold into cash, ensuring value and fostering trust. Every transaction helps uplift both you and our community"
      imageurl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f73bb61658493.5a75732e670c8.jpg"
    />
  );
};

export default ServicesHero;

