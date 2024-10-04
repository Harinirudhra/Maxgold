import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { TbView360Arrow } from "react-icons/tb";


const InfoCard = ({ title, text }) => {
  return (
    <div className="p-4">
     
      <div className="p-4 text-center">
        <h3 className="text-yellow-500 text-center text-2xl font-semibold">{title}</h3>
        <p className="text-gray-700 text-base mt-2 mx-auto lg:max-w-[70%]">
          {text}
        </p>
      </div>
    </div>
  );
};




const Servicegrid = () => {
  const cardsData = [
    {
      title: "Buying Gold, Silver, and Platinum:",
      text: "Whether you have jewelry, coins, bars, or other forms of precious metals, Max Gold provides a secure and efficient process to purchase your items at competitive market rates.",
    },
    {
      title: "Selling Gold, Silver, and Platinum",
      text: "If you’re looking to sell your precious metals, we offer a hassle-free experience with transparent pricing and immediate cash payments.",
    },
    {
      title:"Investment Guidance",
      text: "Our experts can assist you in making informed decisions about your investments in precious metals. We provide market insights and recommendations to help you diversify your portfolio effectively.",
    },
    {
      title:"Custom Jewelry Services",
      text: "Max Gold also offers custom jewelry design and creation services. Our skilled artisans can turn your precious metals into unique, personalized pieces.",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#cb161c] to-[#ec1a44] p-10">
       <div className='flex flex-col gap-3 text-center md:text-start'>
       <h1>
      Cash for gold - Our Commitment to the Community:
      </h1>
      <p>
      Max Gold is not just a business; it’s a part of the community. We believe in giving back and supporting causes that matter. We actively participate in various charitable initiatives, supporting local organizations and contributing to the betterment of our community.
      </p>
       </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {cardsData.map((card, index) => (
        <InfoCard key={index} title={card.title} text={card.text} />
      ))}
      </div>
     
    </div>
  );
};

export default Servicegrid;
