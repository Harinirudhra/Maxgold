import React from 'react';
import Image from 'next/image';
import cfg from '../../../public/aboutus img/cfg.webp'

// Reusable AboutUs component
const AboutUs = ({
  title,
  description,
  journeyTitle,
  journeyText,
  imageUrl,
  imageAlt
}) => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#cb161c] to-[#ec1a44] p-8 ">
        {/* Flex layout for responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Title and Description */}

          <div className="order-1 lg:order-none">
            <h1 className="text-4xl font-extrabold text-[#ffbe46] mb-5 lg:mb-10">About Us</h1>
            <h2 className="md:text-3xl text-2xl font-bold text-[#ffbe46] mb-2">{title}</h2>
            <p className="text-white text-xl font-medium mb-8">
              {description}
            </p>
            <h3 className="md:text-3xl text-2xl font-bold text-[#fcc71a] mb-2">{journeyTitle}</h3>
            <p className="text-white text-xl font-medium">{journeyText}</p>
          </div>

          {/* Image */}
          <div className="relative">
  <div className="flex justify-center order-3 lg:order-none relative">
    <img
      src={imageUrl}
      alt={imageAlt}
      className="rounded-3xl shadow-lg"
    />

{/* <img
      src={cfg.src}
      alt={imageAlt}
      className="rounded-3xl shadow-lg w-2/3"
    /> */}
    
    {/* Overlay text */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white font-black lg:text-6xl text-center z-10">cash for gold</h2>
    </div>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black opacity-10 rounded-3xl"></div>
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

// Main AboutUsSection content
const AboutUsSection = () => {
  return (
    <AboutUs
      title="Best gold buyer near me"
      description='Looking for "Gold buyer near me"? You have reached the right destination. Yes Max Gold is the most trusted Old gold buyer in Chennai offering most competitive market rates for your gold jewellery.'
      journeyTitle="Our Journey"
      journeyText="Max Gold's journey began with a vision to create a safe and reliable platform for individuals to navigate the intricate world of precious metals. Founded in 2006, we set out to offer a seamless and transparent experience in buying and selling gold, silver, and more. Over the years, our unwavering dedication to our core principles has earned us a reputation as a market leader in the industry."
      imageUrl="/RKImages/RAMYA.jpg"
      imageAlt="Max Gold Buyer"
    />
  );
};

export default AboutUsSection;
