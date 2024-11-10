import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="bg-[#170550] p-4 flex justify-around items-center">
         <div className="text-2xl font-bold">Zubair</div>
         <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/About" className="hover:text-orange-500">About Me</a>
          <a href="Services" className="hover:text-orange-500">Services</a>
          <a href="/Skill" className="hover:text-orange-500">Skills</a>
          <a href="/Projects" className="hover:text-orange-500">Projects</a>
          <a href="/Contact" className="hover:text-orange-500">Contact</a>
         </nav>
         <button className="bg-white text-black px-6 py-1 rounded-full font-bold hover:bg-orange-500 transition">Hire me</button>
      </header>
    </div>
  )
}

export default Header
