"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    {
      id: 1,
      title: "Fully edible",
      content: "Apeel is made from edible plant oils and composed entirely of mono and diglycerides. Apeel products are non-GMO, include no animal-derived inputs and do not contain wheat, soybean, peanuts, tree nuts (almond nuts, brazil nuts, cashew nuts, hazelnuts, macadamia nuts, pecan nuts, pine nuts, pistachio nuts or walnuts) sesame seeds, mustard, sulfites, or inputs from milk, eggs, fish, shellfish, or crustacea. We are committed to ensuring the highest standards of purity for our products in accordance with food regulations in your country.",
      image: "/gold.jpg",
    },
    {
      id: 2,
      title: "Invisible",
      content: "Apeel is colorless, odorless, and tasteless on produce. Just like the cuticle “peel” on the outside of plants, Apeel’s peel is tiny. And even though the ingredient is safe to eat in much higher quantities, the amount of Apeel on the surface of produce is exceptionally low. Even if all of the produce you consumed was treated with Apeel, the contribution of monoglycerides and diglycerides to your daily dietary fat intake would equal less than 1%.",
      image: "/AchieveSuccess/delivery.png",
    },
    {
      id: 3,
      title: "Non-GMO",
      content: "Apeel products are non-GMO, include no animal-derived inputs and do not contain wheat, soybean, corn, peanuts, tree nuts (almond nuts, brazil nuts, cashew nuts, hazelnuts, macadamia nuts, pecan nuts, pine nuts, pistachio nuts or walnuts) sesame seeds, mustard, sulfites, or inputs from milk, eggs, fish, shellfish, or crustacea. We are committed to ensuring the highest standards of purity for our products in accordance with food regulations in your country.",
      image: "/AchieveSuccess/goldcoin.png",
    },
  ];

  const scrollRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight } = scrollRef.current;
      const index = Math.floor(scrollTop / clientHeight); // Each section takes the full height of the viewport
      if (index !== activeIndex && index < sections.length) {
        setActiveIndex(index);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  useEffect(() => {
    // GSAP animation for image change
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        // Change the image source when opacity is 0
        imageRef.current.src = sections[activeIndex].image;
        gsap.to(imageRef.current, {
          opacity: 1,
          duration: 0.3,
        });
      },
    });
  }, [activeIndex]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-green-400 px-4 md:px-10 py-4 justify-center items-center overflow-hidden">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
        <img
          ref={imageRef}
          src={sections[activeIndex].image}
          alt={sections[activeIndex].title}
          className="rounded-xl w-full h-60 md:h-96 object-cover max-w-sm shadow-lg"
        />
      </div>
      <div
        ref={scrollRef}
        className="w-full md:w-1/2 overflow-y-auto"
        style={{ height: '100vh', scrollbarWidth: 'none' }} // For Firefox
      >
        <style>
          {`
            /* Hide scrollbar for Chrome, Safari and Opera */
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            /* Hide scrollbar for IE and Edge */
            .scrollbar-hide {
              -ms-overflow-style: none; 
            }
            /* Hide scrollbar for Firefox */
            .scrollbar-hide {
              scrollbar-width: none; 
            }
          `}
        </style>
        <div className="scrollbar-hide">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`h-screen flex justify-center items-center transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="text-left px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{section.title}</h2>
                <p className="text-sm md:text-base lg:text-lg font-medium">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
