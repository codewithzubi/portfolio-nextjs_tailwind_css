import React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <section className="text-center py-10 px-4 bg-[#31065A]" id="Home">
        <div className="flex justify-center items-center">
          <div className=" text-left">
            <h1 className="text-4xl font-bold text-orange-500">Hi, Its me</h1>
            <h2 className="text-5xl font-bold mt-2">Zubair Ahmed</h2>
            <p className="text-xl mt-2">
              And Im a{" "}
              <span className="text-orange-500">Frontend Developer</span>
            </p>
            <p className="mt-4 max-w-xl mx-auto">
              I specialize in crafting clean, responsive, and visually engaging
              websites. With a keen eye for detail and a commitment to quality,
              I transform ideas into seamless digital experiences that captivate
              and connect.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaFacebook className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400" />
              <FaLinkedin className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400" />
              <FaTwitter className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400" />
              <FaGithub className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400" />
            </div>
            <button className="bg-orange-500 text-white px-6 py-1 mt-4 rounded-full hover:bg-orange-600">
              Download CV
            </button>
          </div>
          <div className="bg-pi600">
            <Image
              src="/img2.png" // Path ko slash se start karna hoga
              alt="Your Image Description"
              width={500}
              height={200}
              className="mt-8 mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
