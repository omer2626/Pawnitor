import React from "react";
import gradback1 from '../assets/gradback1.png';
import howitworks from '../assets/howitworks.png'

const HowItWorks = () => {
  return (
    <div
      className="py-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${gradback1})` }}
    >
      <div className="w-[80%] flex flex-row-reverse justify-center gap-12 items-center mx-auto">
        <div className="w-[40%]">
          <img src={howitworks} alt="" className="w-full h-auto" />
        </div>
        <div className="w-[50%] space-y-8 bg-opacity-80 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800">How it Works?</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-700">Pet Waste Detection</h3>
              <p className="text-gray-600">
                Our platform uses advanced scanning technology to detect pet waste in common areas.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-semibold text-gray-700">Owner Notification</h3>
              <p className="text-gray-600">
                Once pet waste is identified, the system immediately notifies the pet owner via our mobile app.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-700">Prompt Cleanup</h3>
              <p className="text-gray-600">
                Our innovative auto-cleanup device can autonomously clean up detected pet waste, ensuring prompt and efficient waste removal.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-700">Compliance Reporting</h3>
              <p className="text-gray-600">
                The system generates reports on compliance, helping community management track and ensure cleanliness standards are maintained.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
