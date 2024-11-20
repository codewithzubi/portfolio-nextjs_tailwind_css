"use client";

import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#170550] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Zubair
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-white text-lg hover:text-orange-500">Home</a>
          <a href="/About" className="text-white text-lg hover:text-orange-500">About Me</a>
          <a href="/Services" className="text-white text-lg hover:text-orange-500">Services</a>
          <a href="/Skill" className="text-white text-lg hover:text-orange-500">Skills</a>
          <a href="/Projects" className="text-white text-lg hover:text-orange-500">Projects</a>
          <a href="/Contact" className="text-white text-lg hover:text-orange-500">Contact</a>
        </nav>

        {/* Hire Me Button */}
        <button className="hidden md:block bg-white text-black px-6 py-1 rounded-full font-bold hover:bg-orange-500 transition">
          Hire me
        </button>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#170550] text-white py-4">
          <a href="/" className="block text-lg py-2 text-center hover:text-orange-500">Home</a>
          <a href="/About" className="block text-lg py-2 text-center hover:text-orange-500">About Me</a>
          <a href="/Services" className="block text-lg py-2 text-center hover:text-orange-500">Services</a>
          <a href="/Skill" className="block text-lg py-2 text-center hover:text-orange-500">Skills</a>
          <a href="/Projects" className="block text-lg py-2 text-center hover:text-orange-500">Projects</a>
          <a href="/Contact" className="block text-lg py-2 text-center hover:text-orange-500">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
