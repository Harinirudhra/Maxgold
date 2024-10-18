"use client";

import React from "react";
import Link from "next/link"; // Import Link for navigation

const CAR = () => {
  // Define all your benefit data here
  const benefits = [
    { id: 1, text: "Gold Rate in Chennai Today", detail: "Detailed information about the gold rate in Chennai today." },
    { id: 2, text: "Which is better- 18k Vs 22k Gold?", detail: "Comparing the advantages of 18k and 22k gold." },
    { id: 3, text: "Understand the gold weight changes when melting", detail: "Information about how gold weight changes when melting." },
    { id: 4, text: "Gold Rate in Coimbatore", detail: "Detailed information about the gold rate in Coimbatore." },
    { id: 5, text: "Is it good to Sell Old Gold?", detail: "Explaining whether it's good to sell old gold." },
    { id: 6, text: "Where to sell gold for cash in Chennai?", detail: "Where to sell gold for cash in Chennai." },
    { id: 7, text: "Get Instant Cash for Selling Old Gold in Chennai", detail: "How to get instant cash for selling old gold in Chennai." },
    { id: 8, text: "Documents Required for Selling Old Gold", detail: "Documents required to sell old gold." },
    { id: 9, text: "Purity Checking Process at Best Money Gold", detail: "Details about the purity checking process." },
    { id: 10, text: "Where can I get the highest price for selling old gold?", detail: "Finding the best price for selling old gold." },
    { id: 11, text: "How to find a genuine gold buyer in Chennai?", detail: "Tips on finding genuine gold buyers." },
    { id: 12, text: "22k vs 24k Gold, Which is better? What is 916 gold?", detail: "Understanding the differences between 22k and 24k gold." },
    { id: 13, text: "Selling gold vs Exchanging gold, which is better?", detail: "Comparison between selling and exchanging gold." },
  ];

  return (
    <section className="py-12 px-5 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#efbf04] mb-8">
          Customer Assistance Repository
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <Link href={`/benefits/${benefit.id}`} key={benefit.id}>
              <div className="flex items-center p-4 bg-[#550000] text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#800000] cursor-pointer">
                <span>{benefit.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CAR;
