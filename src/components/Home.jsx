import React from 'react'
import { useState } from 'react'

import viteLogo from '/vite.svg'
import AutoDynamicPlaceholderWithTailwind from "./DynamicPlaceholderInput";

import { FaBell, FaCalendarAlt, FaEnvelope, FaHandHoldingHeart, FaHeart, FaHospital, FaMapMarkerAlt, FaPhoneAlt, FaPlusCircle, FaRegHeart, FaSearch, FaTint, FaUser, FaUserPlus } from 'react-icons/fa'
import { BiDonateBlood } from 'react-icons/bi'
const Home = () => {
  return (
    <div>

       <div className="bg-gray-100 h-screen flex flex-col items-center justify-start max-w-7xl mx-auto space-y-5 pb-20 pt-10">
    <div className="w-11/12 bg-white rounded-2xl shadow-lg p-5 text-center">

      <h1 className="text-xl font-bold text-red-500 mb-3">Blood Bank</h1>
 <AutoDynamicPlaceholderWithTailwind />

      <div className="flex justify-around mt-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-black">33</p>
          <p className="text-xs text-gray-500">Donors</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-black">33</p>
          <p className="text-xs text-gray-500">Requests</p>
        </div>
      </div>
    </div>

    <div className="w-11/12 bg-white rounded-2xl shadow-lg p-5">
      <button className="w-full bg-red-500 text-white py-2 rounded-lg text-lg font-bold flex items-center justify-center space-x-2 mb-4">
        <FaHeart size={20} />
        <span>Donate as Donor</span>
      </button>
      <button className="w-full bg-gray-200 text-black py-2 rounded-lg text-lg font-bold flex items-center justify-center space-x-2 mb-4">
        <FaRegHeart size={20} />
        <span>Register as Donor</span>
      </button>
      <button className="w-full bg-red-500 text-white py-2 rounded-lg text-lg font-bold flex items-center justify-center space-x-2 mb-4">
        <FaSearch size={20} />
        <span>Request Blood</span>
      </button>
    </div>

    <div className="w-11/12 bg-white rounded-2xl shadow-lg p-5 text-center">
      <h2 className="text-lg font-bold text-red-500">Nearby Blood Banks</h2>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
          <div>
            <p className="font-bold">City Blood Bank</p>
            <p className="text-sm text-gray-500 flex items-center"><FaMapMarkerAlt className="mr-1" /> 2.5 km away</p>
          </div>
          <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm">Contact</button>
        </div>
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
          <div>
            <p className="font-bold">LifeSaver Blood Bank</p>
            <p className="text-sm text-gray-500 flex items-center"><FaMapMarkerAlt className="mr-1" /> 5.0 km away</p>
          </div>
          <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm">Contact</button>
        </div>
      </div>
    </div>

    <div className="w-11/12 bg-white rounded-2xl shadow-lg p-5 text-center">
      <h2 className="text-lg font-bold text-red-500">Donation Statistics</h2>
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <FaTint size={40} className="text-red-500 mx-auto" />
          <p className="text-lg font-bold">120L</p>
          <p className="text-sm text-gray-500">Blood Donated</p>
        </div>
        <div className="text-center">
          <FaHeart size={40} className="text-red-500 mx-auto" />
          <p className="text-lg font-bold">89</p>
          <p className="text-sm text-gray-500">Active Donors</p>
        </div>
      </div>
    </div>

    <div className="w-11/12 bg-white rounded-2xl shadow-lg p-5 text-center">
      <h2 className="text-lg font-bold text-red-500">Upcoming Blood Donation Events</h2>
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
          <div>
            <p className="font-bold">Blood Drive at Community Hall</p>
            <p className="text-sm text-gray-500 flex items-center"><FaCalendarAlt className="mr-1" /> 12th Jan, 10:00 AM</p>
          </div>
          <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm">Join</button>
        </div>
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
          <div>
            <p className="font-bold">Health Check-up and Blood Drive</p>
            <p className="text-sm text-gray-500 flex items-center"><FaCalendarAlt className="mr-1" /> 15th Jan, 2:00 PM</p>
          </div>
          <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm">Join</button>
        </div>
      </div>
    </div>

    <div className="w-11/12 bg-white rounded-2xl shadow-lg p-5 text-center">
      <h2 className="text-lg font-bold text-red-500">Contact Us</h2>
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-red-500" />
          <span className="text-gray-600">+1 234 567 890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-red-500" />
          <span className="text-gray-600">support@bloodbank.com</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Home
