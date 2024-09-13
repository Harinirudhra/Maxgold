"use client"; // Add this line at the top

import React, { useState } from "react";

const faqData = [
  {
    "question": "What is Aircove?",
    "answer": "Aircove is a router with built-in VPN capabilities."
  },
  {
    "question": "How is Aircove different from other routers?",
    "answer": "Aircove offers integrated ExpressVPN support for secure browsing."
  },
  {
    "question": "Where can I purchase Aircove?",
    "answer": "Aircove can be purchased online via the official website."
  },
  {
    "question": "Are there different Aircove models?",
    "answer": "Yes, Aircove comes in different models depending on your needs and preferences."
  },
  {
    "question": "Do I need an ExpressVPN subscription if I have an Aircove router?",
    "answer": "Yes, you need an active ExpressVPN subscription to use the VPN feature on Aircove."
  },
  {
    "question": "Do I need a separate subscription to use Threat Manager, ad blocker, or parental controls?",
    "answer": "No, these features are included in your ExpressVPN subscription."
  },
  {
    "question": "Can I use Aircove/Aircove Go's Threat Manager, ad blocker, and parental controls without the VPN?",
    "answer": "Yes, these features can be used without turning on the VPN."
  },
  {
    "question": "What is a portable/travel VPN router?",
    "answer": "A portable VPN router is a small, lightweight device that lets you secure your internet connection while on the go."
  },
  {
    "question": "Can I use Aircove with any internet service provider?",
    "answer": "Yes, Aircove is compatible with most internet service providers."
  },
  {
    "question": "How do I set up Aircove?",
    "answer": "Setting up Aircove is easy. You can follow the step-by-step guide provided in the user manual or online."
  }
  // Add more FAQs as needed
];

const AboutFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold mb-6">FAQ</h1>
      <div>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold text-black hover:text-red-500 transition-colors duration-200">{faq.question}</h2>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
            {activeIndex === index && (
              <div className="mt-2 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFAQ;
