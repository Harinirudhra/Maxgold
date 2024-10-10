"use client";

import React from "react";

const CAR = () => {
  const benefits = [
    "Gold Rate in Chennai Today",
    "Which is better- 18k Vs 22k Gold?",
    "Understand the gold weight changes when melting",
    "Gold Rate in Coimbatore",
    "Is it good to Sell Old Gold?",
    "Where to sell gold for cash in chennai?",
    "Get Instant Cash for Selling Old Gold in Chennai",
    "Documents Required for Selling Old Gold",
    "Purity Checking Process at Best Money Gold",
    "Where can I get the highest price for selling old gold?",
    "How to find a genuine gold buyer in chennai?",
    "22k vs 24k Gold, Which is better? What is 916 gold?",
    "Selling gold vs Exchanging gold, which is better?",
  ];


  return (
    <section className="py-12 px-5 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-8">Customer Assistance Repository</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-red-600 text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-red-400"
              style={{
                opacity: "0", // Start hidden
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2}s`, // Delay each item
              }}
            >
              <svg
                className="w-6 h-6 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAR;
