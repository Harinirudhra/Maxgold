import React from 'react';

const AboutHero = ({ title, description, imageurl }) => {
  return (
    <div className="relative">
      <img src={imageurl} className="object-cover w-screen h-screen" alt="hero background" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

<div className="absolute top-1/2 lg:top-0 left-0 w-full transform -translate-y-1/2 lg:translate-y-0 flex flex-col items-center justify-center md:items-start md:justify-end md:text-left lg:items-start lg:justify-end text-center lg:text-left p-4 md:mt-[300px] lg:mt-[300px] lg:gap-8 xl:mt-[350px] xl:gap-10">
  <h1 className="text-white bg-clip-text text-transparent md:lg:text-9xl md:text-8xl text-6xl py-3 lg:ml-14 md:ml-3">
    {title}
  </h1>
  <p className="text-white lg:text-3xl md:text-2xl text-2xl ml-5 lg:ml-14 lg:-mt-8 mt-4 lg:font-bold md:w-2/3">
    {description}
  </p>
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