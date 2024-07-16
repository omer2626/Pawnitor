import React, { useState } from "react";
import bg from '../assets/back.png';
import logo from '../assets/pawnitor.png';
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    mobile: "",
    block: "",
    flat: "",
  });
  const [errors, setErrors] = useState({});
  const [petImage, setPetImage] = useState(null);
  const [ownerImage, setOwnerImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let error = "";
    if (name === "mobile" && value.length !== 10) {
      error = "Mobile no must be exactly 10 digits";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.ownerName) {
      newErrors.ownerName = "Owner name is required";
      formIsValid = false;
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      newErrors.mobile = "Mobile no must be exactly 10 digits";
      formIsValid = false;
    }
    if (!petImage) {
      newErrors.petImage = "Pet image is required";
      formIsValid = false;
    }
    if (!ownerImage) {
      newErrors.ownerImage = "Owner image is required";
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

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      if (name === "petImage") {
        setPetImage(files[0]);
      } else if (name === "ownerImage") {
        setOwnerImage(files[0]);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="absolute top-3 left-3 w-[13%]">
        <img src={logo} alt="Logo" />
      </div>
      <form
        className="p-8 bg-white rounded-xl shadow-xl max-w-lg w-full bg-opacity-90"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign Up
        </h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-1 min-w-[45%] mb-[-25px]">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="ownerName"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              onChange={handleChange}
              value={formData.ownerName}
              className="form-input mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="text-red-500 text-xs h-6">{errors.ownerName}</p>
          </div>
          <div className="flex-1 min-w-[45%] mb-[-25px]">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="mobile"
            >
              Mobile No
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              pattern="\d{10}"
              onChange={handleChange}
              value={formData.mobile}
              className="form-input mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="text-red-500 text-xs h-6">{errors.mobile}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-1 min-w-[45%]">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="block"
            >
              Block
            </label>
            <select
              id="block"
              name="block"
              onChange={handleChange}
              value={formData.block}
              className="form-select mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Block
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div className="flex-1 min-w-[45%]">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="flat"
            >
              Flat
            </label>
            <select
              id="flat"
              name="flat"
              onChange={handleChange}
              value={formData.flat}
              className="form-select mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Flat
              </option>
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-1 min-w-[45%] mb-[-25px]">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="petImage"
            >
              Pet Image
            </label>
            <input
              type="file"
              id="petImage"
              name="petImage"
              onChange={handleFileChange}
              className="form-input mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="text-red-500 text-xs h-6">{errors.petImage}</p>
          </div>
          <div className="flex-1 min-w-[45%] mb-[-25px]">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="ownerImage"
            >
              Owner Image
            </label>
            <input
              type="file"
              id="ownerImage"
              name="ownerImage"
              onChange={handleFileChange}
              className="form-input mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <p className="text-red-500 text-xs h-6">{errors.ownerImage}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-3 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-6"
        >
          Register
        </button>
        <div className="text-center text-sm text-blue-600 hover:text-blue-800 mt-4 cursor-pointer">
          Admin? {"   "}
          <Link to="/login">Login Here</Link>
        </div>
      </form>
      <div className="absolute bottom-2 right-2 text-sm">All rights reserved ©Pawnitor 2024</div>
    </div>
  );
};

export default Signup;
