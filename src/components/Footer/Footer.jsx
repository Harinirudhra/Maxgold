import React from 'react';
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";


const Footer = () => {
  return (
    <div>
    <div className="bg-red-400 py-8 lg:py-12">
      <div className="text-center text-white mb-8 h-52 lg:h-44">
        <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold">Are you ready to get started?</h2>
        <p className="lg:text-2xl font-bold md:text-xl mt-2">We got you covered!</p>
        <button className="mt-9 bg-white text-red-600 px-4 py-2 md:px-6 md:py-3 rounded-full text-md md:text-lg font-bold">
          Sign Up — Free
        </button>
      </div>
      </div>

      <div className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">

            {/* Left Section */}
            <div className="mb-8 lg:mb-0">
              <h3 className="text-red-600 text-lg md:text-xl font-semibold">Max Gold</h3>
              <p className="mt-4 text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur</p>
              <p className="mt-1 text-gray-600 text-sm md:text-base"> adipiscing elit. Nullam dictum aliquet</p>
              <p className="mt-1 text-gray-600 text-sm md:text-base"> accumsan porta lectus ridiculus in mattis.</p>
              <p className="mt-1 text-gray-600 text-sm md:text-base"> Netus sodales in volutpat ullamcorper</p>
              <p className="mt-1 text-gray-600 text-sm md:text-base">  amet adipiscing fermentum.</p>

              <div className="flex space-x-4 mt-6">
                <a href="#"><CiTwitter className="fab fa-twitter text-gray-600 text-lg" /></a>
                <a href="#"><FaFacebookF className="fab fa-facebook text-gray-600 text-lg" /></a>
                <a href="#"><FaInstagram className="fab fa-instagram text-gray-600 text-lg" /></a>
                <a href="#"><IoLogoGithub className="fab fa-github text-gray-600 text-lg" /></a>
              </div>
            </div>

            {/* Company Section */}
            <div className="mb-8 lg:mb-0">
              <h4 className="text-red-400 font-bold text-lg">COMPANY</h4>
              <ul className="mt-8 space-y-7 text-gray-600 text-sm md:text-base">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="mb-8 lg:mb-0">
              <h4 className="text-red-400 font-bold text-lg">RESOURCES</h4>
              <ul className="mt-8 space-y-7 text-gray-600 text-sm md:text-base">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:mr-20">
              <h4 className="text-red-400 font-bold text-lg">CONTACT</h4>
              <ul className="mt-4 space-y-4 text-gray-600 text-sm md:text-base">
                <li className="flex items-start">
                  <BsTelephone className="mr-2" />
                  <div>
                    <span className="font-bold">Tel:</span>
                    <div className="text-red-500 mt-2">555-555-5555</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <MdOutlineEmail className="mr-2" />
                  <div>
                    <span className="font-bold">Mail:</span>
                    <div className="text-red-500 mt-2">hi@magicdesign.io</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <LuMapPin className="mr-2" />
                  <div>
                    <span className="font-bold">Address:</span>
                    <div className="text-red-500 mt-2">Wizard Ventures GmbH,</div>
                    <div className="text-red-500">Bugenhagenstr. 11,</div>
                    <div className="text-red-500">10551 Berlin</div>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Links */}
          <div className="mt-12 flex flex-col md:flex-row justify-between text-gray-600 text-sm mr-16">
            <div className="flex flex-wrap space-x-4 md:space-x-7 mb-4 md:mb-0">
              <a href="#">About us</a>
              <a href="#">Contact</a>
              <a href="#">Privacy policy</a>
              <a href="#">Sitemap</a>
              <a href="#">Terms of Use</a>
            </div>
            <p className="md:text-sm">&copy; 2023, All Rights Reserved</p>
            
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Footer;

