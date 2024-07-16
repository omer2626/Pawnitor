import React from 'react';
import cardone from '../assets/cardone.png';
import cardtwo from '../assets/cardtwo.png';
import cardthree from '../assets/cardthree.png';
import gradback from '../assets/gradback.png';

const WhyChooseUs = () => {
  return (
    <div
      className="bg-[#F6FFFD] py-7 bg-cover bg-center"
      style={{ backgroundImage: `url(${gradback})` }}
    >
      <div className="w-4/5 mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="flex gap-6 justify-center">
          <div className="group relative">
            <img
              src={cardone}
              alt="Card One"
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src={cardtwo}
              alt="Card Two"
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="group relative">
            <img
              src={cardthree}
              alt="Card Three"
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
