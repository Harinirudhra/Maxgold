import React from 'react';

const AboutHero = ({ title, description, imageurl }) => {
  return (
    <div className="relative flex justify-center items-start ">
      <img src={imageurl} className="object-cover w-screen h-screen" alt="hero background" />
      <div className="absolute  left-0 w-full h-full bg-black opacity-40"></div>

     <div className="absolute justify-start items-start left-0 p-8 lg:w-1/3">
       <h1 className="text-white bg-clip-text text-7xl pb-4">
    {title}
  </h1>
  <p className="text-white text-3xl ">
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