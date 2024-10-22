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
              className={`rounded-lg shadow-sm shadow-black overflow-hidden cursor-pointer transition-colors duration-300 ${openIndex === index ? 'bg-gradient-to-tr from-amber-300 to-yellow-500 text-black' : 'bg-gradient-to-tr from-amber-300 to-yellow-500 text-black'
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="md:p-7 p-4 flex justify-between gap-4 items-center">
                <h4 className="text-lg font-semibold">{faq.question}</h4>
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
  { question: 'How can i sell gold for cash ?', answer: 'Visit MaxGold or call us at 044- 4545 4545 ,or via WhatsApp +91 9677406080 for the best price for your old gold.' },
  { question: 'How much will get if i sell my gold in Chennai?', answer: 'You can expect approximately Rs. 90 lower than today gold rate, though variations may occur based on market conditions. Our quotations are guaranteed to be competitive.' },
  { question: 'Why Shounld i choose Max Gold for selling old gold?', answer: 'Because nowhere you can get the exact market price for your gold. Our commitment to providing market-competitive prices and transparent transactions makes us the preferred choice for selling gold.' },
  { question: 'How does Max Gold Chennai protect clients', answer: 'We adhere to strict privacy policies to safeguard our clients personal information, ensuring lawful collection and usage for legitimate purposes only. We take steps to ensure that all information is protected from unauthorized access or modification, destruction or disclosure.' },
  { question: 'Can i buy back my gold ornaments later once sold', answer: 'Unfortunately, once sold, we are unable to return ornaments as they undergo immediate melting for purification. Hence, we advise clients to make informed decisions prior to selling.' },
  { question: 'How is antique jewelry evaluated', answer: 'Antique jewelry is evaluated based on age and gold quality. Testing may be required for pieces lacking karat stamps to ascertain their gold content. It helps to evaluate and offer the best price for your gold jewelry' },
  { question: 'Will my gold ornaments get damaged during testing?', answer: 'Our computer XREF testing method is non-invasive and will not cause any damage to your ornaments.' },
  { question: 'What you should know when you want sell Gold?', answer: 'If you are looking to sell your gold, you should select a buyer who is fulfilling following things. Business Expertise, Certified Buyer, Transparent & Simplified Work Process' },
  { question: 'How the Gold Buyers Calculate the value of Gold', answer: 'There are different factors while calculating the value. Weight, Purity, Market Status' },
  { question: 'What is the difference between 22 and 24 karat Gold?', answer: 'The value of gold is measured by its purity which is denoted in karat (k) or carat (Ct). Higher karat signifies higher gold purity. Among Indians, 22K and 24K gold is quite a popular choice. At 99.99% purity, 24 Carat gold is used to make coins and bars. It is also used in the manufacturing of electronics, medical devices, and other gold articles. At 91.6% purity, 22 Carat gold is mostly used for making jewellery. Most of the gold sold in shops are either 22 Carat or 18 Carat gold.' },
  { question: 'What is the Documentation required to sell the gold', answer: 'You require to bring in Original ID/Address proof, One Cheque Leaf, Purchase Invoice of the gold ornaments, Local address proof, Professional ID card. In case it is pledged gold, you need to bring the Pledged gold slip.' },
  { question: 'Is there an age limit to sell Gold with BMG?', answer: 'Yes. You should have completed 26 years of age on the date of selling gold.' },
];

export default NewFAQ;

