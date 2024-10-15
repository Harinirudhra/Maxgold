import React from 'react';

const servicesData = [
  {
    title: 'Cash for Gold',
    description: 'In today’s dynamic financial landscape, many individuals are seeking ways to tap into the hidden potential of their gold assets, and one of the most effective ways to do so is through instant cash for gold services.Max Gold, a trusted and reputable name in the industry, is at the forefront of offering you a seamless and quick solution to transform your precious gold into instant cash.This guide provides a comprehensive overview of our instant cash for gold services at Max Gold, helping you understand the process, factors affecting the value of your gold, and why choosing us is a smart financial move.',
    image: '/AchieveSuccess/goldcoin.png',
    buttonText: 'View More',
  },
  {
    title: 'Door Step Services',
    description: 'In the fast-paced world we live in, convenience is key. Whether you’re looking to sell your gold jewelry, coins, or other gold items, Max Gold offers a solution that’s designed with your convenience in mind. Our doorstep services bring the expertise and trustworthiness of Max Gold right to your door, making the process of selling your precious gold easier and more accessible than ever. This comprehensive guide explores the benefits and steps involved in Max Gold’s doorstep services, so you can unlock the hidden value of your gold without leaving the comfort of your home.',
    image: '/AchieveSuccess/delivery.png',
    buttonText: 'View More',
  },
  {
    title: 'Release Pledged Gold',
    description: 'Gold, one of the most enduring forms of wealth, has been utilized as collateral for loans and financial transactions for centuries. Many individuals pledge their gold jewelry or assets as collateral for various reasons, whether it’s to secure a loan, obtain a credit line, or meet financial needs. However, there comes a time when you may want to release pledged gold and regain possession of your cherished assets. This comprehensive guide will walk you through the process of releasing pledged gold, explaining the steps involved, your rights, and providing valuable insights to make the process smoother.',
    image: '/AchieveSuccess/person.png',
    buttonText: 'View More',
  },
  {
    title: 'Add-On Services',
    description: 'At Max Gold, we take pride in going the extra mile to provide our customers with a comprehensive and satisfying experience. In addition to our core gold buying services, we offer a range of add-on services designed to meet various needs and enhance your overall journey with us. This guide delves into the diverse add-on services provided by Max Gold, ensuring that your experience with us is both convenient and rewarding.',
    image: '/AchieveSuccess/goldcoin.png',
    buttonText: 'View More',
  },
];

const ServiceCard = ({ title, description, image, buttonText, isReverse }) => {
  return (
    <div
      className={`flex md:gap-8 gap-0 flex-col md:flex-row items-center justify-center bg-white rounded-lg mb-6 md:mb-8 ${isReverse ? 'md:flex-row-reverse' : ''
        }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-auto rounded-md object-cover"
      />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-yellow-500 lg:text-2xl md:text-xl text-lg mb-4 border-b-2 border-black inline-block">
            {title}
          </h3>
          <p className="md:text-lg lg:text-xl text-base text-gray-600 mb-4 mr-0 lg:mr-32">{description}</p>
        </div>
        <div>
          {/* <button className="md:text-lg shadow-md text-sm text-white bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300">
            {buttonText}
          </button> */}
        </div>
      </div>
    </div>
  );
};

const Achievesucesses = () => {
  return (
    <div className="container mx-auto p-5 md:p-10">
      <h1 className="text-center mb-6 md:mb-24 font-bold lg:text-5xl md:text-3xl text-lg text-yellow-600">
        Preparing Students to Achieve Success
      </h1>
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
          buttonText={service.buttonText}
          isReverse={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Achievesucesses;
