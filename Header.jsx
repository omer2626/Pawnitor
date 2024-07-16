import React from "react";
import logo from '../assets/pawnitor.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center bg-[#f6fffd] shadow-md absolute top-0 sticky z-50">
      <div className="flex justify-between text-black w-4/5 py-4 items-center">
        <img src={logo} alt="Logo" className="w-[15%]" />
        <div className="flex gap-6">
          <div className="hover:text-blue-500 cursor-pointer">Our Services</div>
          <div className="hover:text-blue-500 cursor-pointer">About us</div>
          <div className="hover:text-blue-500 cursor-pointer">Contact</div>
        </div>
        <div className="flex gap-5">
          <Link to="/login" className="px-4 py-2 bg-[#753F00] text-white rounded hover:bg-[#753e00c8]">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-[#FFE55E] text-black rounded hover:bg-[#f8d72d]">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
