"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu'; // Importing the Menu (hamburger) icon
import CloseIcon from '@mui/icons-material/Close'; // Importing the Close (X) icon

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false); // Close the menu on mobile after selecting a tab
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const tabs = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Our Services', href: '#our-services' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-500 to-amber-900 p-6">

      <div className="flex justify-between items-center">
        {/* Left Side: Max Gold */}
        <div className="text-yellow-400 text-4xl font-bold">Max Gold</div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="h-6 w-6 text-white" /> // Close icon when menu is open
          ) : (
            <MenuIcon className="h-6 w-6 text-white" /> // Menu icon when menu is closed
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-6">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link href={tab.href}>
                <span
                  className={`cursor-pointer px-4 py-2 text-white block ${
                    activeTab === tab.name ? 'text-yellow-200 underline' : ''
                  }`}
                  onClick={() => handleNavClick(tab.name)}
                >
                  {tab.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 mt-4">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link href={tab.href}>
                <span
                  className={`cursor-pointer px-4 py-2 text-white block ${
                    activeTab === tab.name ? 'text-yellow-300 underline' : ''
                  }`}
                  onClick={() => handleNavClick(tab.name)}
                >
                  {tab.name}
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
