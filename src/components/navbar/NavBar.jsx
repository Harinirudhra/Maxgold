"use client";

import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu (hamburger) icon
import CloseIcon from "@mui/icons-material/Close"; // Importing the Close (X) icon
import Image from "next/image"; // Importing Image component for the logo
import maxigold from "../../../public/Logo/MaxGoldlogo.jpg";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen); // Toggle services dropdown
  };

  return (
    <nav className="bg-white p-6 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Side: Max Gold logo */}
        <div className="flex items-center">
          <Image src={maxigold} alt="Max Gold Logo" className="h-auto w-auto"/>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="h-6 w-6 text-black" /> // Close icon when menu is open
          ) : (
            <MenuIcon className="h-6 w-6 text-black" /> // Menu icon when menu is closed
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-6 text-xl">
          {/* Home tab */}
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                Home
              </span>
            </Link>
          </li>

          {/* About tab */}
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-800 hover:underline">
                About
              </span>
            </Link>
          </li>

          {/* Blog tab */}
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                Blog
              </span>
            </Link>
          </li>

          {/* Our Services tab with static dropdown */}
          <li className="relative z-40">
            <span
              className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline"
              onClick={toggleServicesDropdown}
            >
              Our Services <ArrowDropDownOutlinedIcon/>
            </span>
            {isServicesOpen && (
              <ul className="absolute bg-white shadow-lg mt-2 w-40">
                <li className="hover:bg-gray-200">
                  <Link href="#" className="block px-4 py-2 text-black">
                    Service 1
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="#" className="block px-4 py-2 text-black">
                    Service 2
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="#" className="block px-4 py-2 text-black">
                    Service 3
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contact Us tab */}
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4">
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                Blog
              </span>
            </Link>
          </li>
          <li className="relative">
            <span
              className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline"
              onClick={toggleServicesDropdown}
            >
              Our Services  <ArrowDropDownOutlinedIcon/>
            </span>
            {isServicesOpen && (
              <ul className="mt-2">
                <li className="hover:bg-gray-200">
                  <Link href="#" className="block px-4 py-2 text-black">
                    Service 1
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="#" className="block px-4 py-2 text-black">
                    Service 2
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="#" className="block px-4 py-2 text-black">
                    Service 3
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="#">
              <span className="cursor-pointer px-4 py-2 text-black block hover:text-red-700 hover:underline">
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
