"use client";
import React, { useState } from 'react';

const NewFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-cover text-white py-16 px-4 md:px-16"
      style={{ backgroundImage: 'url(./bgfaq.jpg)', }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="uppercase text-md text-[#efbf04] font-semibold tracking-wide mb-4">FAQ</h2>
        <h3 className="text-3xl md:text-4xl text-white font-bold mb-8">
          Check The Question Section To <br />
          <span>Get <span className="text-[#efbf04]">Resources, FAQs, & Guides</span></span>
        </h3>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-sm shadow-black overflow-hidden cursor-pointer transition-colors duration-300 ${openIndex === index ? 'bg-[#ffffff] text-black' : 'bg-[#ce3737] text-white'
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="md:p-7 p-4 flex justify-between gap-4 items-center">
                <h4 className="text-lg font-medium">{faq.question}</h4>
                <span>{openIndex === index ? '▲' : '▼'}</span>
              </div>
              {openIndex === index && (
                <div className="transition-colors duration-300 p-4 md:p-7 bg-[#ffffff] text-black">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  { question: 'Which is the best place to sell gold in chennai ?', answer: 'MaxGold Chennai is renowned as one of the premier destinations for selling gold in Chennai, offering competitive prices, convenience, and exceptional customer service. Customers can expect competitive prices for their gold as well as transparency and excellence in customer service. We are committed to providing a safe and secure gold-selling experience for all its customers. If you’re looking to sell gold in Chennai, MaxGold is a great option. Get the best price for your gold and enjoy an amazing selling experience at MaxGold, Chennai.' },
  { question: 'How can i sell gold for cash ?', answer: 'Visit MaxGold or call us at 1800 4123 0367 for the best price for your old gold.' },
  { question: 'How much will i get if i sell my gold in chennai ?', answer: 'You can expect approximately Rs. 85 lower than todays gold rate, though variations may occur based on market conditions. Our quotations are guaranteed to be competitive.' },
  { question: 'How much is the per gram gold rate today in chennai ?', answer: 'Kindly check today’s gold rate in chennai by clicking the link on top of our website.' },
  { question: 'Why should i choose MaxGold for selling old gold ?', answer: 'Because nowhere you can get the exact market price for your gold. Our commitment to providing market-competitive prices and transparent transactions makes us the preferred choice for selling gold.' },
  { question: 'Which is the best place to sell gold in chennai ?', answer: 'MaxGold Chennai is renowned as one of the premier destinations for selling gold in Chennai, offering competitive prices, convenience, and exceptional customer service. Customers can expect competitive prices for their gold as well as transparency and excellence in customer service. We are committed to providing a safe and secure gold-selling experience for all its customers. If you’re looking to sell gold in Chennai, MaxGold is a great option. Get the best price for your gold and enjoy an amazing selling experience at MaxGold, Chennai.' },
  { question: 'How can i sell gold for cash ?', answer: 'Visit MaxGold or call us at 1800 4123 0367 for the best price for your old gold.' },
  { question: 'How much will i get if i sell my gold in chennai ?', answer: 'You can expect approximately Rs. 85 lower than todays gold rate, though variations may occur based on market conditions. Our quotations are guaranteed to be competitive.' },
  { question: 'How much is the per gram gold rate today in chennai ?', answer: 'Kindly check today’s gold rate in chennai by clicking the link on top of our website.' },
  { question: 'Why should i choose MaxGold for selling old gold ?', answer: 'Because nowhere you can get the exact market price for your gold. Our commitment to providing market-competitive prices and transparent transactions makes us the preferred choice for selling gold.' },
];

export default NewFAQ;

