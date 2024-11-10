import React from 'react'
import { FaPhoneAlt,FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='bg-[#1A0142] text-white font-sans'>
       <div className="container mx-auto py-16 px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Contact</h1>
            <div className="border-b-2 border-white w-24 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-6 mb-8 lg:mb-0">
                <div className="flex items-center space-x-4">
                <FaPhoneAlt className='text-2xl'/>
                    <div>
                        <p>+92 3183102960</p>
                        <p>+92 3483109899</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaRegEnvelope className='text-2xl'/>
                    <p>zubairahmedarain12@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                <FaLocationDot className='text-2xl'/>
                    <p>Pakistan Sindh,Sanghar</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white" />
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <input type="text" placeholder="Phone Number" className="w-full lg:w-1/2 p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white" />
                    <input type="text" placeholder="Subject" className="w-full lg:w-1/2 p-4 bg-[#3A2A5B] rounded-full text-white placeholder-white" />
                </div>
                <textarea placeholder="Your Message" className="w-full p-4 bg-[#3A2A5B] rounded-2xl text-white placeholder-white h-32"></textarea>
                <button className="w-full p-4 bg-[#3A2A5B] rounded-full text-white">Send</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
