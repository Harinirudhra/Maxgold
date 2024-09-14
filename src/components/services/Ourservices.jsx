import React from 'react';

const Ourservices = ({ imageurl, title, para }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 md:p-12 bg-white rounded-lg shadow-md">
      
      <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src={imageurl}
          alt="cash for gold"
          className="rounded-lg w-full h-auto object-cover md:object-cover sm: w-screen h-screen"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center lg:items-center md:items-center md:text-center sm:text-center px-4">

        <h1 className="text-5xl font-bold mb-4 md:pt-3 ">{title}</h1>

        <p className="text-xl text-gray-700 p-8 ml-7 sm:p-6  ">
          {para}
        </p>
      </div>
    </div>
  );
};


const ServicesContent = () => {
  return (
    <Ourservices
      imageurl="https://img.etimg.com/thumb/width-1200,height-1200,imgsize-564880,resizemode-75,msid-100435884/wealth/spend/how-much-gold-can-you-buy-in-cash-without-and-with-pan-aadhaar-proof.jpg"
      title="Our Services"
      para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    />
  );
};

export default ServicesContent;