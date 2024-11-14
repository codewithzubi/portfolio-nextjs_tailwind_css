"use client";

import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-[#170550] p-4 flex justify-evenly items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Zubair</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-orange-500">
            Home
          </a>
          <a href="/About" className="text-white hover:text-orange-500">
            About Me
          </a>
          <a href="/Services" className="text-white hover:text-orange-500">
            Services
          </a>
          <a href="/Skill" className="text-white hover:text-orange-500">
            Skills
          </a>
          <a href="/Projects" className="text-white hover:text-orange-500">
            Projects
          </a>
          <a href="/Contact" className="text-white hover:text-orange-500">
            Contact
          </a>
        </nav>

        {/* Hire Me Button */}
        <button className="bg-white text-black px-6 py-1 rounded-full font-bold hover:bg-orange-500 transition">
          Hire me
        </button>
      </header>
    </div>
  );
};

export default Header;
