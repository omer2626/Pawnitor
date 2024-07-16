import React from "react";
import heroimg from "../assets/heroimg.png";

const Hero = () => {
  return (
    <div className="bg-[#fffae5] min-h-[88vh] flex items-center">
      <div className="w-[80%] flex justify-center gap-8 items-center mx-auto">
        <div className="w-[50%] space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Pawnitor: Smart Pet Monitoring</h1>
          <p className="text-lg text-gray-600">Ensuring a clean and healthy community for everyone!</p>
          <button className="px-6 py-3 bg-[#753F00] text-white rounded-md hover:bg-[#753e00e2] transition duration-300">
            Explore More
          </button>
        </div>
        <div className="w-[50%]">
          <img src={heroimg} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
