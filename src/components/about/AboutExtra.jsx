import React from 'react';

const AboutExtra = () => {
  return (
    <section className="min-h-screen bg-white text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-black text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">
      The Max Gold Instant Cash for Gold Process
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-indigo-600 ml-3 w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="text-black text-2xl md:text-3xl xl:text-3xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
      Max Gold’s instant cash for gold process is designed to be swift and efficient, allowing you to sell your gold and receive cash without delay. Here’s a step-by-step guide to what you can expect:
      </h1>
      <div className="grid text-left  sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#ff6666] p-10 relative transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/50">
          <div
            className="absolute inset-0 z-0 hidden md:flex "
            style={{
              backgroundImage: "url('https://wallpapercave.com/wp/wp8149661.jpg')",
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              clipPath: 'circle(calc(6.25rem + 7.5vw) at 100% 100%)',
            }}
          />
          <div className="relative lg:pr-52 z-10">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-playfair">Evaluation and Appraisal</h2>
            <p className=" transition-colors duration-300 text-white">
            Upon visiting Max Gold, your gold items will undergo a meticulous evaluation and appraisal by our team of experts. They will consider factors such as karat, weight, and condition to determine the value of your items.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#ff8080] p-10 relative transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/50">
          <div
            className="absolute inset-0 z-0 hidden md:flex"
            style={{
              backgroundImage: "url('https://wallpapercave.com/wp/wp8149661.jpg')",
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              clipPath: 'circle(calc(6.25rem + 7.5vw) at 0% 100%)',
            }}
          />
          <div className="relative lg:pl-48 z-10">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-playfair">Offer and Negotiation</h2>
            <p className=" transition-colors duration-300 text-white">
            Based on the appraisal, you will receive an offer for your gold items. Our offers are competitive and reflective of current market prices, ensuring you receive the best value for your gold.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#ff9999] p-10 relative transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/50">
          <div
            className="absolute inset-0 z-0 hidden md:flex"
            style={{
              backgroundImage: "url('https://wallpapercave.com/wp/wp8149661.jpg')",
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              clipPath: 'circle(calc(6.25rem + 7.5vw) at 100% 0%)',
            }}
          />
          <div className="relative lg:pr-44 z-10 ">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-playfair">Acceptance and Documentation</h2>
            <p className=" transition-colors duration-300 text-white">
            Should you accept the offer, the transaction progresses to the documentation stage. You will likely need to provide identification and sign the necessary paperwork to complete the sale.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-[#ff4d4d] p-10 relative transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/50">
          <div
            className="absolute inset-0 z-0 hidden md:flex "
            style={{
              backgroundImage: "url('https://wallpapercave.com/wp/wp8149661.jpg')",
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
              clipPath: 'circle(calc(6.25rem + 7.5vw) at 0% 0%)',
            }}
          />
          <div className="relative lg:pl-48 z-10">
            <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-playfair">Payment</h2>
            <p className=" transition-colors duration-300 text-white">
            Once the documentation is complete, you will receive your payment. We offer various payment options, including instant cash, checks, or bank transfers, allowing you to select the method that suits your preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExtra;

