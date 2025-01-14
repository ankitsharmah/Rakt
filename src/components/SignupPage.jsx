import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../main";
import { useNavigate } from "react-router-dom";
import { setSignUpData } from "../redux/authSlice";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    bloodGroup: "",
    contact: "",
    address: "",
    lastDonationDate: "",
  });
const navigate = useNavigate();
const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("called")
    dispatch(setSignUpData(formData));
    localStorage.setItem("userEmail",formData.email);
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/auth/register`, formData);


      if (response.data.success) {
        toast.success("Registered successfully! OTP sent to your email.");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          role: "",
          bloodGroup: "",
          contact: "",
          address: "",
          lastDonationDate: "",
        });
        navigate("/verify")

      } else {
        toast.error(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <div className="min-h-[90vh] bg-red-50 flex flex-col items-center  px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6 mt-3">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-red-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-red-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-red-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 p-1 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>

          {/* <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-red-700"
            >
              Role
            </label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            >
              <option value="">Select Role</option>
              <option value="Donor">Donor</option>
              <option value="Recipient">Recipient</option>
            </select>
          </div> */}

          <div>
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-red-700"
            >
              Blood Group
            </label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-red-700"
            >
              Contact
            </label>
            <input
              type="tel"
              name="contact"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-red-700"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="lastDonationDate"
              className="block text-sm font-medium text-red-700"
            >
              Last Donation Date
            </label>
            <input
              type="date"
              name="lastDonationDate"
              id="lastDonationDate"
              value={formData.lastDonationDate}
              onChange={handleChange}
              className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 mt-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
