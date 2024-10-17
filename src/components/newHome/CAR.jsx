"use client";

import React from "react";
import Link from "next/link"; // Import the Link component

const CAR = () => {
  const benefits = [
    {
      text: "Gold Rate in Chennai Today",
      url: "/goldratetoday", // Corresponding page URL
    },
    {
      text: "Which is better- 18k Vs 22k Gold?",
      url: "/whatisbetter",
    },
    {
      text: "Understand the gold weight changes when melting",
      url: "/goldweightchanges",
    },
    {
      text: "Gold Rate in Coimbatore",
      url: "/goldratecoimbatore",
    },
    {
      text: "Is it good to Sell Old Gold?",
      url: "/selloldgold",
    },
    {
      text: "Where to sell gold for cash in Chennai?",
      url: "/sellgoldcashchennai",
    },
    {
      text: "Get Instant Cash for Selling Old Gold in Chennai",
      url: "/instantcashsellgold",
    },
    {
      text: "Documents Required for Selling Old Gold",
      url: "/documentgold",
    },
    {
      text: "Purity Checking Process at Best Money Gold",
      url: "/purity",
    },
    {
      text: "Where can I get the highest price for selling old gold?",
      url: "/highest",
    },
    {
      text: "How to find a genuine gold buyer in Chennai?",
      url: "/genuine",
    },
    {
      text: "22k vs 24k Gold, Which is better? What is 916 gold?",
      url: "/where22vs24",
    },
    {
      text: "Selling gold vs Exchanging gold, which is better?",
      url: "/goldvsold",
    },
  ];

  return (
    <section className="py-12 px-5 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#efbf04] mb-8">Customer Assistance Repository</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Link href={benefit.url} key={index}>
              <div
                className="flex items-center p-4 bg-[#550000] text-white rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#800000] cursor-pointer"
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
