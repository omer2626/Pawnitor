import React from "react";
import leftimg from '../assets/left-img.png' 

const Features = () => {
  return (
    <div className="bg-[#ffffff] py-7">
    <div className="w-[80%] flex justify-center gap-12 items-center mx-auto">
      <div className="w-[50%] ml-[-50px]">
        <img src={leftimg} alt="" className="w-full h-auto " />
      </div>
      <div className="w-[50%] space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Features</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-700">SMART CAMERAS</h3>
            <p className="text-gray-600">
              High-resolution cameras with night vision, housed in weatherproof enclosures and installed in designated pet relief areas and common spots of violations.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold text-gray-700">AI IMAGE RECOGNITION</h3>
            <p className="text-gray-600">
              Real-time identification of pets and waste (feces and urine) using an object detection model trained on open-source datasets.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-700">PET IDENTIFICATION</h3>
            <p className="text-gray-600">
              Use of distinctive color pattern collars for easy, tech-free visual identification.
            </p>
            <p className="text-gray-600">
              Advanced image recognition to identify unique pet markings and pair pets with their owners in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Features;
