import React from 'react'
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
            <div className="bg-gradient-to-b from-red-400 via-red-500  py-12">
                <div className="text-center text-white mb-8 h-52">
                    <h2 className="text-3xl font-bold">Are you ready to get started?</h2>
                    <p className="text-xl mt-2">We got you covered!</p>
                    <button className="mt-6 bg-white text-red-600 px-6 py-2 rounded-full text-lg font-bold">
                        Sign Up — Free
                    </button>
                </div>

                <div className="bg-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between">

                            {/* Left Section */}
                            <div className="mb-8 md:mb-0">
                                <h3 className="text-red-600 text-xl font-semibold">Max Gold</h3>
                                <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
                                <p className="mt-2 text-gray-600"> adipiscing elit. Nullam dictum aliquet</p>
                                <p className="mt-2 text-gray-600">   accumsan porta lectus ridiculus in mattis.</p>
                                <p className="mt-2 text-gray-600">   Netus sodales in volutpat ullamcorper</p>
                                <p className="mt-2 text-gray-600">     amet adipiscing fermentum.</p>
                                <div className="flex space-x-4 mt-9 mb-5">
                                    <a href="#">< CiTwitter className="fab fa-twitter text-gray-600" /></a>
                                    <a href="#">< FaFacebookF className="fab fa-facebook text-gray-600" /></a>
                                    <a href="#"><FaInstagram className="fab fa-instagram text-gray-600" /></a>
                                    <a href="#">< IoLogoGithub className="fab fa-github text-gray-600" /></a>
                                </div>
                            </div>

                            {/* Company Section */}
                            <div>
                                <h4 className="text-red-400 font-bold">COMPANY</h4>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li ><a href="#">About</a></li>
                                    <li className='mt-10'><a href="#">Features</a></li>
                                    <li className='mt-10'><a href="#">Works</a></li>
                                    <li className='mt-10'><a href="#">Career</a></li>
                                </ul>
                            </div>

                            {/* Resources Section */}
                            <div>
                                <h4 className="text-red-400 font-bold ">RESOURCES</h4>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li ><a href="#">Free eBooks</a></li>
                                    <li className='mt-10'><a href="#">Development Tutorial</a></li>
                                    <li className='mt-10'><a href="#">How to - Blog</a></li>
                                    <li className='mt-10'><a href="#">Youtube Playlist</a></li>
                                </ul>
                            </div>

                            {/* Contact Section */}
                            <div className='mr-20'>
                          
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-start ">
                                        <BsTelephone className="mr-2" /> {/* Icon */}
                                        <div>
                                            <span className="font-bold">Tel:</span> {/* Label */}
                                            <div className='text-red-500 mt-2'>555-555-5555</div> {/* Content */}
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <MdOutlineEmail className="mr-2 " /> {/* Icon */}
                                        <div>
                                            <span className="font-bold">Mail:</span> {/* Label */}
                                            <div  className='text-red-500 mt-2'>hi@magicdesign.io</div> {/* Content */}
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <LuMapPin className="mr-2" /> {/* Icon */}
                                        <div>
                                            <span className="font-bold ">Address:</span> {/* Label */}
                                            <div  className='text-red-500  '>Wizard Ventures GmbH,</div>
                                            <div  className='text-red-500  '>  Bugenhagenstr. 11,</div>
                                            <div  className='text-red-500 '>    10551 Berlin</div> 
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        {/* Bottom Links */}
                        <div className="mt-12 flex flex-col md:flex-row justify-between text-gray-600 text-sm mr-16">
                            <div className="flex space-x-7">
                                <a href="#">About us</a>
                                <a href="#">Contact</a>
                                <a href="#">Privacy policy</a>
                                <a href="#">Sitemap</a>
                                <a href="#">Terms of Use</a>
                            </div>
                            <p className="mt-4 md:mt-0">&copy; 2023, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
