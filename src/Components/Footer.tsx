import React from "react";
import { FaLinkedin ,FaGithubSquare,FaFacebookSquare ,FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are a company dedicated to providing the best services and
              products to our customers. Our mission is to enhance the lives of
              our users through innovative solutions.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#Home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#Services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#About" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#Contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaLinkedin/>
              </a>
              <a href="#"  className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaTwitterSquare/>
              </a>
              <a href="#"  className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaGithubSquare/>
              </a>
              <a href="#"  className="text-gray-400 text-2xl transition-all duration-200 hover:text-blue-500 transform hover:scale-150 ">
                <FaFacebookSquare/>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2023 My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


export default Footer;









