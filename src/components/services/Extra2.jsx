"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Adjust the width as per your breakpoint
  const sections = [
    {
      id: 1,
      title: "Fully edible",
      content:
        "Apeel is made from edible plant oils and composed entirely of mono and diglycerides. Apeel products are non-GMO, include no animal-derived inputs and do not contain wheat, soybean, peanuts, tree nuts...",
      image: "/AchieveSuccess/person.png",
    },
    {
      id: 2,
      title: "Invisible",
      content:
        "Apeel is colorless, odorless, and tasteless on produce. Just like the cuticle “peel” on the outside of plants, Apeel’s peel is tiny...",
      image: "/AchieveSuccess/delivery.png",
    },
    {
      id: 3,
      title: "Non-GMO",
      content:
        "Apeel products are non-GMO, include no animal-derived inputs and do not contain wheat, soybean, corn, peanuts, tree nuts...",
      image: "/AchieveSuccess/goldcoin.png",
    },
  ];

  const scrollRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // Skip if not desktop

    const handleScroll = () => {
      const { scrollTop, clientHeight } = scrollRef.current;
      const scrollPosition = scrollTop / (clientHeight / 2); // Sensitivity increased

      const index = Math.floor(scrollPosition);
      if (index !== activeIndex && index < sections.length) {
        setActiveIndex(index);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement.addEventListener("scroll", handleScroll);
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, isDesktop]);

  useEffect(() => {
    if (!isDesktop) return; // Skip if not desktop

    // GSAP animation for image change
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.1, // Faster transition
      onComplete: () => {
        imageRef.current.src = sections[activeIndex].image;
        gsap.to(imageRef.current, {
          opacity: 1,
          duration: 0.1, // Faster transition
        });
      },
    });
  }, [activeIndex, isDesktop]);

  return (
    <div className="flex flex-col lg:flex-row-reverse lg:h-screen bg-red-400 px-4 md:px-10 gap-12 py-4 justify-center items-center overflow-hidden">
      {/* Content Section */}
      <div className="w-full flex flex-col lg:w-1/2 overflow-hidden" style={{ height: isDesktop ? "100vh" : "auto" }}>
        {isDesktop ? (
          <div ref={scrollRef} className="h-full overflow-y-auto scrollbar-hide">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`h-screen flex justify-center items-center transition-opacity duration-200 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-left px-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg font-medium">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-7 py-5">
            {sections.map((section) => (
              <div key={section.id} className="mb-4 flex flex-col items-center md:gap-4">
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-md w-full h-auto object-cover mb-2 md:mb-0 lg:w-1/2"
                />
                <div className="text-left px-4 ">
                  <h2 className="text-3xl mt-5 md:text-4xl lg:text-5xl font-bold mb-2">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg font-medium">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Section for Desktop */}
      {isDesktop && (
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            ref={imageRef}
            src={sections[activeIndex].image}
            alt={sections[activeIndex].title}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>
      )}

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
    </div>
  );
};

export default ScrollSection;
