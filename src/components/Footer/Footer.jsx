import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import backimg from '../../../public/BackgroundImg/goldencoins.jpg'

import Link from 'next/link';


const Footer = () => {
  return (
    <div>
      <div className="bg-red-100 flex flex-col lg:flex-row items-center justify-between w-full px-8 py-16 lg:py-24 lg:px-32">

        {/* Left Section */}
        <div className="lg:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Why connect us?
          </h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-center">
              <div className="w-4 h-4 bg-[#550000] rounded-full mr-4"></div>
              Having problem handling finance?
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-[#550000] rounded-full mr-4"></div>
              Having revenue problem?
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 bg-[#550000] rounded-full mr-4"></div>
              In the needs of professional advice?
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 mt-8 lg:mt-0 lg:text-right">
          <h1 className="text-lg text-gray-900 mb-4">Contact us now</h1>
          <button className="bg-[#550000] text-white py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300">
            Contact
          </button>
        </div>
      </div>

      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">

            {/* Left Section */}
            <div className="mb-8 lg:mb-0 lg:ml-20">
              <h3 className="text-red-600 text-lg md:text-xl font-semibold pm-6">Max Gold</h3>
              <p className="mt-4 pm-6 text-gray-600 text-sm md:text-base w-50 lg:w-96">Max Gold has been growing tremendously at a fast pace with its comprehensive services. Max Gold, recognized as the top-notch and trustworthy place to Sell your used Gold in Tamil Nadu. We offer best cash for your Old Gold Jewelry as per the market rate.</p>
              <h2 className='font-semibold text-red-600 mt-8'>7 days, 10 AM - 8 PM</h2>

              {/* 
            <div className="flex space-x-4 mt-6 lg:mt-20">
              <a href="#"><CiTwitter className="fab fa-twitter text-gray-600 text-lg" /></a>
              <a href="#"><FaFacebookF className="fab fa-facebook text-gray-600 text-lg" /></a>
              <a href="#"><FaInstagram className="fab fa-instagram text-gray-600 text-lg" /></a>
              <a href="#"><FaYoutube className="fab fa-instagram text-gray-600 text-lg" /></a>
            </div> */}
            </div>


            {/* Company Section */}
            <div className="mb-8 lg:mb-0 mr-20">
              <h4 className="text-red-600 font-bold text-lg">COMPANY</h4>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm md:text-base">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Service</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>






          </div>

          {/* Bottom Links */}
          <div className="mt-12 flex flex-col md:flex-row justify-between text-gray-600 text-sm mr-16 lg:ml-20">
            <div className="flex flex-wrap  space-x-4 md:space-x-4 mb-4 md:mb-0 ">
              <a href="#">Privacy policy</a>
              <a href="#">Terms of Use</a>
            </div>
            <p className="md:text-sm">&copy; 2023, All Rights Reserved</p>

          </div>
        </div>
      </div>

    </div >
  );
};

export default Footer;

