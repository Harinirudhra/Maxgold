"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // Close (X) icon
import Image from "next/image"; // For the logo
import maxigold from "../../../public/Logo/MaxGoldlogo.jpg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles menu and ensures services dropdown closes when menu closes
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu on link click
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-br from-amber-300 to-yellow-500 p-6 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left Side: Max Gold logo */}
        <div>
          <Link href="/" passHref>
            <Image
              src={maxigold}
              alt="Max Gold Logo"
              className="h-auto w-[150px] md:w-[200px] lg:w-[250px] lg:ml-10 cursor-pointer"
              priority
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

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:space-x-6 text-xl">
          <li>
            <Link href="/" passHref>
              <span
                className="cursor-pointer px-4 py-2 font-bold text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                Home
              </span>
            </Link>
          </li>
          {["About", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase()}`} passHref>
                <span
                  className="cursor-pointer px-4 py-2 font-bold text-black block hover:text-[#7b071e] hover:underline"
                  style={{ textUnderlineOffset: "8px" }}
                >
                  {item === "Services" ? "Our Services" : item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile and Tablet Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-2 mt-4">
          <li>
            <Link href="/" passHref>
              <span
                onClick={closeMenu}
                className="cursor-pointer px-4 py-2 text-black block hover:text-[#7b071e] hover:underline"
                style={{ textUnderlineOffset: "8px" }}
              >
                Home
              </span>
            </Link>
          </li>
          {["About", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase()}`} passHref>
                <span
                  onClick={closeMenu}
                  className={`cursor-pointer px-4 py-2 text-black block hover:text-[#7b071e] hover:underline ${item === "Contact" && "text-white hover:text-[#eeaf39]"}`}
                  style={{ textUnderlineOffset: "8px" }}
                >
                  {item === "Services" ? "Our Services" : item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
