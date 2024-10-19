"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu (hamburger) icon
import CloseIcon from "@mui/icons-material/Close"; // Importing the Close (X) icon
import Image from "next/image"; // Importing Image component for the logo
import maxigold from "../../../public/Logo/MaxGoldlogo.jpg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen); // Toggle services dropdown
  };

  const closeMenu = () => {
    setIsOpen(false); // Close menu on link click
  };

  return (
    <nav className="bg-gradient-to-br from-amber-300 to-yellow-500 p-6 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Side: Max Gold logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={maxigold}
              alt="Max Gold Logo"
              className="h-auto w-[150px] md:w-[200px] lg:w-[250px] lg:ml-10" // Responsive sizes
            />
          </Link>
        </div>

        {/* Hamburger Icon for small and tablet screens */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="h-6 w-6 text-white" /> // Close icon when menu is open
          ) : (
            <MenuIcon className="h-6 w-6 text-white" /> // Menu icon when menu is closed
          )}
        </div>

        {/* Desktop Navigation (hidden for small and tablet screens) */}
        <ul className="hidden lg:flex lg:space-x-6 text-xl">
          <li>
            <Link href="/">
              <span
                className="cursor-pointer px-4 py-2 font-bold text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className="cursor-pointer px-4 py-2 font-bold text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                About
              </span>
            </Link>
          </li>
          <li className="relative">
            <span
              className="cursor-pointer px-4 py-2 font-bold text-black block hover:text-[#7b071e] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toggleServicesDropdown();
              }}
              style={{ textUnderlineOffset: "7px" }}
            >
              <div className="flex flex-1">
                <Link href="/services" className="block font-bold text-black hover:text-[#7b071e] hover:underline">
                  Our Services
                </Link>
              </div>
            </span>
          </li>
          <li>
            <Link href="/contact">
              <span
                className="cursor-pointer px-4 py-2 font-bold text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                Contact Us
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile and Tablet Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-2 mt-4">
          <li>
            <Link href="/" onClick={closeMenu}>
              <span
                className="cursor-pointer px-4 py-2 text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              <span
                className="cursor-pointer px-4 py-2 text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                About
              </span>
            </Link>
          </li>
          <li className="relative">
            <span
              className="cursor-pointer px-4 py-2 text-black block hover:text-[#7b071e] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toggleServicesDropdown();
              }}
              style={{ textUnderlineOffset: "7px" }}
            >
              <div className="flex flex-1">
                <Link href="/services" className="block text-black " onClick={closeMenu}>
                  Our Services
                </Link>
              </div>
            </span>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              <span
                className="cursor-pointer px-4 py-2 text-white block hover:text-[#eeaf39] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
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
