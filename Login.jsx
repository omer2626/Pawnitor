import React, { useState } from "react";
import bg from '../assets/back.png';
import logo from '../assets/pawnitor.png';
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
      formIsValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Submit form logic here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute top-3 left-3 w-[13%]">
        <img src={logo} alt="Logo" />
      </div>
      <form
        className="p-8 bg-white rounded-xl shadow-xl max-w-lg w-full bg-opacity-90"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="form-input mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <p className="text-red-500 text-xs h-6">{errors.username}</p>
        </div>
        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="form-input mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <p className="text-red-500 text-xs h-6">{errors.password}</p>
        </div>

        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-6"
        >
          Login
        </button>
        <div className="text-center text-sm text-blue-600 hover:text-blue-800 mt-4 cursor-pointer">
          Resident? {"    "}
          <Link to="/signup">Register Here</Link>
        </div>
      </form>
      <div className="absolute bottom-2 right-2 text-sm">All rights reserved ©Pawnitor 2024</div>
    </div>
  );
};

export default Login;
