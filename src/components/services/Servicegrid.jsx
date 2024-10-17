import React from 'react';
import { GiDoubleNecklace } from "react-icons/gi";
import { PiNotebookDuotone } from "react-icons/pi";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiHeartEarrings } from "react-icons/gi";

const Servicegrid = () => {
  const services = [
    {
      icon: <GiDoubleNecklace className="text-red-900 mb-3 bg-yellow-300 rounded-full p-2" size={50} />,
      title: "Buying Gold, Silver, and Platinum",
      text: "Whether you have jewelry, coins, bars, or other forms of precious metals, Max Gold provides a secure and efficient process to purchase your items at competitive market rates."
    },
    {
      icon: <GiBigDiamondRing className="text-red-900 mb-3 bg-yellow-300 rounded-full p-2" size={50} />,
      title: "Selling Gold, Silver, and Platinum",
      text: "If you’re looking to sell your precious metals, we offer a hassle-free experience with transparent pricing and immediate cash payments."
    },
    {
      icon: <PiNotebookDuotone className="text-red-900 mb-3 bg-yellow-300 rounded-full p-2" size={50} />,
      title: "Investment Guidance",
      text: "Our experts can assist you in making informed decisions about your investments in precious metals. We provide market insights and recommendations to help you diversify your portfolio effectively."
    },
    {
      icon: <GiHeartEarrings className="text-red-900 mb-3 bg-yellow-300 rounded-full p-2" size={50} />,
      title: "Custom Jewelry Services",
      text: "Max Gold also offers custom jewelry design and creation services. Our skilled artisans can turn your precious metals into unique, personalized pieces."
    }
  ];

  return (
    <div className=" px-4 py-8 min-h-screen bg-gradient-to-b from-[#800000] to-[#78081c]">
      <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
        <h1 className=' text-left text-yellow-400'>
          Cash for gold - Our Commitment to the Community:
        </h1>
        <p className=' text-left mt-3 text-gray-200'>
          Max Gold is not just a business; its a part of the community. We believe in giving back and supporting causes that matter. We actively participate in various charitable initiatives, supporting local organizations and contributing to the betterment of our community.
        </p>
        </div>
        <div className="mt-12 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-[#550000] transition hover:z-[1] hover:shadow-2xl">
              <div className="relative space-y-8 py-12 p-8"> 
                {service.icon}
                <div className="space-y-2">
                  <h5 className="text-lg md:text-xl font-semibold text-yellow-400 transition group-hover:text-secondary">{service.title}</h5>
                  <p className="text-gray-300 text-base sm:text-sm">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicegrid;
