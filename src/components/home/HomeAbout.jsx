import React from 'react'
import Image from 'next/image'
import samplepic from "../home/goldsamplepic.jpg"

// Sample JSON data for the reusable component
const cardData = [
  {
    category: "Development",
    title: "How to deal with subjective Feedback from client",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur atque"
  },
  {
    category: "Marketing",
    title: "How to pretend you know something you really don't",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur atque"
  },
  {
    category: "Development",
    title: "What software is our favorite and why",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur atque"
  }
];

const AboutText = [
  {
    heading1: "Welcome to Max Gold - Cash for Gold",
    content1: "In the fast-paced world of gold transactions, Max Gold is the trusted name for individuals seeking a seamless and reliable solution to exchange their precious gold for cash. As a premier choice among gold buyers, strategically located in your vicinity, we excel in providing a swift and hassle-free process for selling gold and receiving cash in return. If you’ve ever wondered, “Where can I sell gold near me?” or “Where can I find the best cash-for-gold locations near me?” – the answer is simple: Max Gold.",
    content2: "We serve as your go-to destination for selling gold and transforming your valuable items into cash. With years of experience catering to individuals eager to exchange their gold for cash in their local area, we prioritize not only the profitability of your transaction but also its safety and security.",
    button: "read more",
    reverse:false
  },
  {
    heading2: "Max Gold - A Trusted Partner for Selling Gold",
    content3: "We understand that parting with your gold can be a significant decision. Whether you’ve inherited jewellery that no longer serves your needs or you simply wish to convert your gold assets into cash, Max Gold is here to make the process as convenient and secure as possible. As prominent gold buyers near you, we take pride in our ability to offer a convenient and trustworthy solution to meet your needs.",
    button: "read more",
    reverse:true
  },
  {
    heading: "Selling Gold for Cash: A Hassle-Free process at Max Gold",
    content: "Gold selling for cash should be a straightforward and stress-free experience, and that’s precisely what we provide at Max Gold. Our well-established and streamlined process ensures that you can quickly turn your gold into cash without unnecessary complications. We prioritize efficiency and ease in every step of the transaction, ensuring that you receive the best value for your gold.",
    content4: "At Max Gold, we believe that selling gold for cash should be a hassle-free and straightforward experience, and we have meticulously designed our process to ensure just that. We understand that when individuals decide to part with their gold items, they want a seamless and efficient transaction that provides them with the best value. That’s precisely what you can expect when you choose Max Gold for your cash-for-gold needs.",
    button: "read more",
    reverse:false
  },
  {
    heading: "About Us",
    content: "In the fast-paced world of gold transactions, Max Gold is the trusted name for individuals seeking a seamless and reliable solution to exchange their precious gold for cash. As a premier choice among gold buyers, strategically located in your vicinity, we excel in providing a swift and hassle-free process for selling gold and receiving cash in return. If you’ve ever wondered, “Where can I sell gold near me?” or “Where can I find the best cash-for-gold locations near me?” – the answer is simple: Max Gold.We serve as your go-to destination for selling gold and transforming your valuable items into cash. With years of experience catering to individuals eager to exchange their gold for cash in their local area, we prioritize not only the profitability of your transaction but also its safety and security.",
    button: "read more",
    reverse:true
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


const HomeAbout = () => {
  return (
    <div>
      {/* Static Section */}
      <div className="flex flex-col items-center sm:items-start sm:px-5 md:px-10 lg:px-20 ">

        {AboutText.map((itemz, index) => (
          <div className={`flex flex-col items-center justify-center ${itemz.reverse ? 'md:flex-row-reverse': 'md:flex-row'}`} key={index}>
          <Image
          src={samplepic}
          width={700}
          height={100}
          style={{ height: '450px' }}
          className="p-3 w-full sm:w-1/2 md:w-1/2 lg:1/4 pt-7"
        />
          < div className="ml-0 sm:ml-5 md:ml-3 lg:ml-10 pr-5 pt-0 md:pr-0 lg:pr-2 mt-0 sm:mt-0 md:mt-0 sm:w-1/2 md:w-1/2 p-3">
            <h1 className="text-red-600 pt-3 text-2xl sm:text-3xl md:text-3xl md:pt-1 lg:text-4xl font-bold lg:mt-5">{itemz.heading}</h1>
            <h1 className="text-red-600 pt-3 text-2xl sm:text-3xl md:text-3xl md:pt-5 lg:text-4xl font-bold lg:mt-2">{itemz.heading1}</h1>
            <p className=" text-gray-500 text-justify md:mt-1 lg:mt-3 xl:mt-3">
              {itemz.content1}
            </p>
            <p className="mt-6 text-gray-500 text-justify md:mt-1 lg:mt-3 xl:mt-3">
              {itemz.content2}
            </p>
            



            <h1 className="text-red-600 pt-0 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold lg:mt-0">{itemz.heading2}</h1>
            <p className="mt-6 text-gray-500 text-justify md:mt-1 lg:mt-6 xl:mt-10">
              {itemz.content3}
            </p>
            
           
            
            
            <p className="mt-6 text-gray-500 text-justify md:mt-1 lg:mt-3 xl:mt-3">
              {itemz.content}
            </p>
            

            <button className="mt-0 text-gray-500 text-sm border rounded-3xl border-pink-500 p-2 px-7 hover:bg-red-500 hover:text-white transition duration-300 md:mt-0 lg:mt-5 xl:mt-5">
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
    </div >
  );
}

export default HomeAbout;
