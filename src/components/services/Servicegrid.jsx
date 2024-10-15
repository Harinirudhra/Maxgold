import React from 'react';
import { GiDoubleNecklace } from "react-icons/gi";
import { PiNotebookDuotone} from "react-icons/pi";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";

const InfoCard = ({ icon: Icon, title, text }) => {
  return (
    <div className="p-4">
      <div className="p-4 text-center">
        <Icon className="text-red-900 mx-auto mb-2 bg-yellow-300 rounded-full p-2" size={50} />
        <h3 className="text-yellow-400 text-center text-2xl font-semibold">{title}</h3>
        <p className="text-gray-50 text-base mt-2 mx-auto lg:max-w-[70%]">
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
      icon: GiDoubleNecklace,
    },
    {
      title: "Selling Gold, Silver, and Platinum",
      text: "If you’re looking to sell your precious metals, we offer a hassle-free experience with transparent pricing and immediate cash payments.",
      icon: GiBigDiamondRing,
    },
    {
      title: "Investment Guidance",
      text: "Our experts can assist you in making informed decisions about your investments in precious metals. We provide market insights and recommendations to help you diversify your portfolio effectively.",
      icon: PiNotebookDuotone,
    },
    {
      title: "Custom Jewelry Services",
      text: "Max Gold also offers custom jewelry design and creation services. Our skilled artisans can turn your precious metals into unique, personalized pieces.",
      icon: GiHeartEarrings,
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#800000] to-[#78081c] p-10">
      <div className='flex flex-col gap-3 text-center pb-10'>
        <h1 className=' text-yellow-400'>
          Cash for gold - Our Commitment to the Community:
        </h1>
        <p className=' text-gray-200'>
          Max Gold is not just a business; its a part of the community. We believe in giving back and supporting causes that matter. We actively participate in various charitable initiatives, supporting local organizations and contributing to the betterment of our community.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {cardsData.map((card, index) => (
          <InfoCard key={index} title={card.title} text={card.text} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default Servicegrid;
