import React from 'react';
import ben1 from '../assets/ben1.png';
import ben2 from '../assets/ben2.png';
import ben3 from '../assets/ben3.png';
import ben4 from '../assets/ben4.png';
import ben5 from '../assets/ben5.png';

const Benefits = () => {
  return (
    <div className="bg-[#F6FFFD] py-12">
      <div className="w-[80%] flex flex-col justify-center items-center mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Benefits</h2>
        <div className="flex gap-5 justify-center flex-wrap">
          {[ben1, ben2, ben3, ben4, ben5].map((img, index) => (
            <div key={index} className="group relative w-[180px] h-[180px] flex items-center justify-center">
              <img
                src={img}
                alt={`Benefit ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
              />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
