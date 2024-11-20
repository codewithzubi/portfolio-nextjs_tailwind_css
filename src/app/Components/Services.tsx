import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRegChartBar } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="bg-[#31065A] py-10 md:py-16 px-4 md:px-16" id="Services">
      <div className="text-center py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          My <span className="text-orange-500">Services</span>
        </h1>
        <div className="w-16 h-1 bg-gray-300 mb-8 mx-auto"></div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Web Development */}
          <div className="bg-white text-center text-purple-900 p-8 rounded-lg shadow-lg max-w-xs w-full">
            <FaLaptopCode className="text-6xl text-orange-500 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold mb-4">Web Development</h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected humour.
            </p>
          </div>
          {/* Apps Development */}
          <div className="bg-white text-center text-purple-900 p-8 rounded-lg shadow-lg max-w-xs w-full">
            <FaMobileAlt className="text-6xl text-orange-500 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold mb-4">Apps Development</h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected humour.
            </p>
          </div>
          {/* Digital Marketing */}
          <div className="bg-white text-center text-purple-900 p-8 rounded-lg shadow-lg max-w-xs w-full">
            <FaRegChartBar className="text-6xl text-orange-500 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold mb-4">Digital Marketing</h2>
            <p className="text-sm md:text-base">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected humour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
