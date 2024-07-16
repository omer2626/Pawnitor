import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const JoinUs = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(email);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f6faf9] flex flex-col items-center justify-center  py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Join us for a clean community!</h2>
      {!submitted ? (
        <form
          className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4"
          onSubmit={handleSubmit}
        >
          <FaEnvelope className="text-gray-500 text-2xl" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-500 text-lg font-semibold mt-4">Thank you for joining us!</p>
      )}
    </div>
  );
};

export default JoinUs;
