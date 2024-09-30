"use client"
import React from 'react'

const Ourstory = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/RKImages/gold.webp')",
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          opacity: "20%"
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-red-100/80 to-red-300/40 z-10"></div>

      {/* Content Over Both Image and Gradient */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 md:px-16">
   
        <div className="text-left max-w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
            OUR STORY
          </h1>
          <p className="mt-6 text-xs lg:text-lg text-gray-900">
            At Joice Jewelry, our journey began with a simple yet profound passion for creating timeless beauty through exquisite jewelry. Founded in the heart of a vibrant artisan community, our brand was born from a love for intricate craftsmanship and the desire to bring unique, high-quality pieces to discerning customers around the world. Each piece in our collection is meticulously designed and handcrafted, reflecting our commitment to excellence and our deep appreciation for the art of jewelry making.
          </p>
          <p className="mt-6 text-xs lg:text-xl font-semibold text-gray-900">
            Our founder, Joice, has always been inspired by the elegance and allure of fine jewelry. With a background in design and a keen eye for detail, Joice set out to create a brand that would stand apart in an industry filled with mass-produced pieces. By collaborating with skilled artisans and sourcing the finest materials, we ensure that every item in our collection tells a story of dedication, artistry, and love. From classic styles to contemporary designs, Joice Jewelry offers something special for every occasion, making each moment memorable and extraordinary.
          </p>
          <p className="mt-6 text-xs lg:text-lg text-gray-900">
            At Joice Jewelry, we believe that jewelry is more than just an accessory; it's a form of self-expression and a way to celebrate life's precious moments. Our mission is to provide our customers with beautiful, high-quality pieces that they can cherish for a lifetime. We are proud to be a part of your journey, offering not only stunning jewelry but also exceptional service and a personalized shopping experience. Join us in celebrating the art of fine jewelry and discover the perfect piece that resonates with your unique style and story.
          </p>

        </div>
      </div>
    </div>



  );
}


export default Ourstory