import React from "react";
import Image from "next/image";
import bg from '../../../public/aboutus img/handgold.webp'

const AboutUs = () => {
  return (
    <section className="bg-red-900 text-white py-16 px-4">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
        {/* Masked Image Section */}
        <div className="relative w-full lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 32 32">
              <defs>
                <clipPath id="hero-clip-desktop" clipPathUnits="objectBoundingBox">
                  <path d="M0.53,0.505 c0.044,0.006,0.089,0.009,0.133,0.009 c0.261,0,0.399,-0.115,0.309,-0.257 C0.882,0.115,0.597,0,0.336,0 S-0.063,0.115,0.028,0.257 c0.068,0.107,0.247,0.199,0.442,0.238 c-0.044,-0.006,-0.089,-0.009,-0.133,-0.009 c-0.261,0,-0.399,0.115,-0.309,0.257 c0.09,0.142,0.375,0.257,0.636,0.257 s0.399,-0.115,0.309,-0.257 c-0.068,-0.107,-0.247,-0.199,-0.442,-0.238"/>
                </clipPath>
              </defs>

              {/* Using <image> tag instead of <Image /> */}
              <image
                href={bg.src}
                alt="DesignUps HQ"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                style={{ clipPath: "url(#hero-clip-desktop)" }}
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 mt-0">
          <svg
            id="icon"
            className="mb-3 w-8 h-8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33084 15.6666C1.14769 15.6679 0.999915 15.8168 0.999919 15.9999C0.999922 16.1831 1.1477 16.3319 1.33085 16.3332C5.29419 16.3618 9.4599 17.976 12.9989 20.5931C16.5371 23.2097 19.4242 26.8107 20.8469 30.7791C20.9087 30.9516 21.0983 31.0418 21.2712 30.9811C21.4441 30.9203 21.5355 30.7314 21.4758 30.5581C20.1112 26.5949 20.4807 23.054 22.1302 20.5084C23.7769 17.9671 26.735 16.3617 30.669 16.3332C30.8521 16.3319 30.9999 16.1831 30.9999 15.9999C30.9999 15.8168 30.8521 15.6679 30.669 15.6666C26.7057 15.6381 22.5399 14.0239 19.0009 11.4067C15.4627 8.79012 12.5757 5.18912 11.153 1.22076C11.0911 1.0482 10.9015 0.957979 10.7286 1.0188C10.5557 1.07963 10.4643 1.26867 10.5241 1.44196C11.8913 5.40507 11.5218 8.9458 9.87168 11.4914C8.22435 14.0327 5.26484 15.6381 1.33084 15.6666Z"
              fill="#DCEB2F"
              stroke="#DCEB2F"
              strokeWidth="0.67"
              strokeLinejoin="round"
            />
          </svg>
          <h3 className="text-yellow-400 mb-4 text-lg">About Us</h3>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            <em className="italic">Max gold</em> 
          </h1>
          <p className="text-2xl">
          Max Gold is a gold, silver and diamond jewellery buyers based on the purity of precious metals and offer best market price than anyone else like banks, pawn brokers and other financers. We buy all type of unused and second-hand diamond, gold & bars, silver, platinum, gold coins, silver coins, rings, chains, bangles and other jewelry; and offer immediate cash on your gold jewelry through cash payment, cheque or NEFT/RTGS transfer as per customer request.
          Kindly reach us on 044 - 45454545 for detailed query.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
