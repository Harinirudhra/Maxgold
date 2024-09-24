import React from 'react';

const Ourservices = ({ imageurl, title, para }) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 md:p-12 bg-white rounded-lg shadow-md">

      <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src={imageurl}
          alt="cash for gold"
          className="rounded-br-3xl rounded-tr-3xl rounded-bl-3xl rounded-tl-none  object-cover md:w-full md:h-full lg:w-full lg:h-5/6 sm:object-cover sm:w-full sm:h-full"
        />
      </div>

      <div className="md:w-1/2  flex flex-col justify-center px-4">

        <h1 className="text-5xl  font-bold mb-2 sm:p-6 ">{title}</h1>

        <p className="text-2xl  md:text-xl  text-gray-700  sm:p-6 ">
          {para}
        </p>
      </div>
    </div>
  );
};

export const ServicesContent = () => {
  return (
    <Ourservices
      imageurl="https://bsmedia.business-standard.com/_media/bs/img/misc/2022-02/17/full/gold-loan-gold-financing-gold-financier-1645084756-39982620.jpg?im=FeatureCrop,size=(826,465)"
      title="Our Services"
      para="Gold selling for cash should be a straightforward and stress-free experience, and thats precisely what we provide at Max Gold. Our well-established and streamlined process ensures that you can quickly turn your gold into cash without unnecessary complications. We prioritize efficiency and ease in every step of the transaction, ensuring that you receive the best value for your gold.
            At Max Gold, we believe that selling gold for cash should be a hassle-free and straightforward experience, and we have meticulously designed our process to ensure just that. We understand that when individuals decide to part with their gold items, they want a seamless and efficient transaction that provides them with the best value. That precisely what you can expect when you choose Max Gold for your cash-for-gold needs."
    />
  );
};

export default ServicesContent;
