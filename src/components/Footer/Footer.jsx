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
                <div className="text-center text-white mb-8">
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
                                <h3 className="text-red-600 text-xl font-bold">Max Gold</h3>
                                <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur</p>
                                <p className="mt-2 text-gray-600"> adipiscing elit. Nullam dictum aliquet</p>
                                <p className="mt-2 text-gray-600">   accumsan porta lectus ridiculus in mattis.</p>
                                <p className="mt-2 text-gray-600">   Netus sodales in volutpat ullamcorper</p>
                                <p className="mt-2 text-gray-600">     amet adipiscing fermentum.</p>
                                <div className="flex space-x-4 mt-4">
                                    <a href="#">< CiTwitter className="fab fa-twitter text-gray-600"/></a>
                                    <a href="#">< FaFacebookF className="fab fa-facebook text-gray-600"/></a>
                                    <a href="#"><FaInstagram className="fab fa-instagram text-gray-600"/></a>
                                    <a href="#">< IoLogoGithub  className="fab fa-github text-gray-600"/></a>
                                </div>
                            </div>

                            {/* Company Section */}
                            <div>
                                <h4 className="text-gray-900 font-bold">COMPANY</h4>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className='mt-2'><a href="#">About</a></li>
                                    <li className='mt-7'><a href="#">Features</a></li>
                                    <li className='mt-7'><a href="#">Works</a></li>
                                    <li className='mt-7'><a href="#">Career</a></li>
                                </ul>
                            </div>

                            {/* Resources Section */}
                            <div>
                                <h4 className="text-gray-900 font-bold">RESOURCES</h4>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li><a href="#">Free eBooks</a></li>
                                    <li><a href="#">Development Tutorial</a></li>
                                    <li><a href="#">How to - Blog</a></li>
                                    <li><a href="#">Youtube Playlist</a></li>
                                </ul>
                            </div>

                            {/* Contact Section */}
                            <div>
                                <ul className="mt-4 space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <BsTelephone className="mr-2" />
                                        Tel: 555-555-5555
                                    </li>
                                    <li className="flex items-center">
                                        <MdOutlineEmail className="mr-2" />
                                        Mail: hi@magicdesign.io
                                    </li>
                                    <li className="flex items-center">
                                        <LuMapPin className="mr-2" />
                                        Address: Wizard Ventures GmbH, Bugenhagenstr. 11, 10551 Berlin
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Links */}
                        <div className="mt-12 flex flex-col md:flex-row justify-between text-gray-600 text-sm">
                            <div className="flex space-x-4">
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
