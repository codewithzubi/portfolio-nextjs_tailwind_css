import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRegChartBar } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="bg-[#31065A] py-10 p-20">
      <div className="flex flex-col items-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          My <span className="text-orange-500">Services</span>
        </h1>
        <div className="w-16 h-1 bg-gray-300 mb-8"></div>
        <div className="flex space-x-8">
          <div className="bg-white text-center text-purple-900 p-8 rounded-lg shadow-lg">
            <FaLaptopCode className='className="fas fa-laptop-code text-6xl text-orange-500 mb-4"' />
            <h2 className="text-2xl font-bold mb-4">Web Development</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          <div className="bg-white text-center text-purple-900 p-8 rounded-lg shadow-lg">
            <FaMobileAlt className="fas fa-mobile-alt text-6xl text-orange-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Apps Development</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
          <div className="bg-white text-center text-purple-900 p-8 rounded-lg shadow-lg">
            <FaRegChartBar className="text-6xl text-orange-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Digital Marketing</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
