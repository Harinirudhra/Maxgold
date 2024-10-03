// GoldProtection.jsx
import React from 'react';

const Extra3= () => {
  return (
    <div className="relative overflow-visible w-full font-sans text-base font-medium">
      {/* Main Content Section */}
      <main className="w-full px-5 lg:px-0 lg:py-16 py-5">
        {/* Page Padding and Home Content */}
        <section className="flex flex-col justify-between items-start gap-8">
          <div className="w-full gap-10 flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-[80vw] lg:h-auto">
              <img
                src="/gold.jpg" // Replace with actual image path
                alt="Gold"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-5xl lg:text-[5.5em] leading-[0.8] font-semibold tracking-[-0.03em]">
                Made from Gold to protect your Gold.
              </h1>
              <p className=" pt-8">
                Apeel is composed entirely of purified monoglycerides and diglycerides, edible compounds that can be found in a variety of foods. They are safe to eat as verified by regulatory authorities around the world, including Health Canada, the United States Food and Drug Administration (FDA), and the World Health Organization (WHO). In fact, they are so safe they can be found in products designed for the most sensitive populations, including infant formula and nutrition shakes for the elderly.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Extra3;
