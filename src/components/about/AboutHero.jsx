import React from 'react';

const AboutHero = ({ title, description, imageurl }) => {
  return (
    <div className="relative">
      
      <img src={imageurl} className="object-cover w-screen h-screen" alt="hero background" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-end text-center lg:text-left p-4 lg:mx-14 lg:gap-4">
      <h1 className="bg-gradient-to-r from-[#f44336] to-[#FFCE00] bg-clip-text text-transparent lg:text-9xl text-6xl lg:mt-">
  {title}
</h1>
  <p className="text-white lg:text-3xl text-2xl  lg:w-2/4">{description}</p>
</div>



    </div>
  
  );
};

const AboutHeroSection = () => {
  return (
    <AboutHero
      title="Max gold"
      description="We are the best choice for you to sell your precious gold jewelry and get instant cash"
      imageurl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f73bb61658493.5a75732e670c8.jpg"
    />
  );
};

export default AboutHeroSection;