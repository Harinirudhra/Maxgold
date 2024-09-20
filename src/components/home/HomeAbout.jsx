import React from 'react'
import Image from 'next/image'
import aboutrk from '../../../public/RKImages/About rk.jpeg'

// Sample JSON data for the reusable component
const cardData = [
  {
    category: "Evaluation",
    title: "Professional Gold Assessment",
    description: "At Max Gold, we prioritize accuracy and fairness in our evaluations. Using cutting-edge technology, our experts meticulously evaluate the purity and weight of your gold, ensuring you receive a transparent and accurate assessment for maximum value."
  },
  {
    category: "Transparent Pricing",
    title: "Fair Market-Based Offers",
    description: "We pride ourselves on offering competitive rates that reflect current market prices. There are no hidden charges, and we ensure complete transparency in our pricing, giving you the confidence to sell your gold with peace of mind."
  },
  {
    category: "Quick Payment",
    title: "Instant Cash Payout",
    description: "We value your time. Once the evaluation process is complete, Max Gold ensures immediate payment, either in cash or via your preferred method, without any delays. Our process is designed to be fast, secure, and hassle-free."
  }
];

const AboutText = [

  {
    heading: "About Us",
    content: "In the fast-paced world of gold transactions, Max Gold is the trusted name for individuals seeking a seamless and reliable solution to exchange their precious gold for cash. As a premier choice among gold buyers, strategically located in your vicinity, we excel in providing a swift and hassle-free process for selling gold and receiving cash in return. If you’ve ever wondered, “Where can I sell gold near me?” or “Where can I find the best cash-for-gold locations near me?” – the answer is simple: Max Gold.We serve as your go-to destination for selling gold and transforming your valuable items into cash. With years of experience catering to individuals eager to exchange their gold for cash in their local area, we prioritize not only the profitability of your transaction but also its safety and security.",
    button: "Read more",
    reverse:false
  }
]

// Reusable Card Component
const Card = ({ category, title, description }) => (
  <div className="text-sm w-full sm:w-[300px] md:w-[390px]">
    <p className="text-red-500">{category}</p>
    <h1 className="font-bold pt-1 text-black">{title}</h1>
    <h3 className="text-sm pt-1 text-gray-800">{description}</h3>
  </div>
);

const HomeAbout = (() => {
  return (
    <div id="brush-section">
      {/* Static Section */}
      <div className="flex flex-col items-center sm:items-start px-6 md:px-8 lg:px-10">
        {AboutText.map((itemz, index) => (
          <div
            className={`flex flex-col items-start justify-center gap-8 ${itemz.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            key={index}
          >
            <div className="w-full sm:w-1/2 md:w-1/2 pt-5">
              <Image
                src={aboutrk}
                alt="Sample"
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Ensures responsive loading based on screen size
                priority={true} // Optimize image loading
              />
            </div>
            <div className="w-full pt-5 sm:w-1/2 md:w-1/2 flex flex-col gap-4 justify-between">
              <h1 className="text-red-600">{itemz.heading}</h1>
              {Array.isArray(itemz.content) ? (
                itemz.content.map((liitem, index) => (
                  <p className="text-gray-500" key={index}>
                    {liitem}
                  </p>
                ))
              ) : (
                <p className="text-gray-500">{itemz.content}</p>
              )}
              <button className="w-40 text-gray-500 text-sm border rounded-3xl border-pink-500 p-2 hover:bg-red-500 hover:text-white transition duration-300">
                {itemz.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reusable Cards Section */}
      <div className="flex flex-col md:flex-row gap-x-7 gap-y-10 sm:ml-10 p-5 md:ml-10 mr-7 mt-10 mb-10 lg:ml-20">
        {cardData.map((item, index) => (
          <Card
            key={index}
            category={item.category}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
})

export default HomeAbout;
