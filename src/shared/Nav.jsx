import React from 'react'
import { useState } from 'react'
import viteLogo from '/vite.svg'

import { FaBell, FaCalendarAlt, FaEnvelope, FaHandHoldingHeart, FaHeart, FaHome, FaHospital, FaMapMarkerAlt, FaPhoneAlt, FaPlusCircle, FaRegHeart, FaSearch, FaTint, FaUser, FaUserPlus } from 'react-icons/fa'
import { BiDonateBlood } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import { FcHome } from 'react-icons/fc'
import { FaHouseMedical } from 'react-icons/fa6'

const Nav = () => {
    const navigate = useNavigate();
  return (
    <div>
       <nav className="fixed bottom-0 w-full bg-white z-50 flex justify-around py-3 shadow-md">
          <button className="flex flex-col items-center text-red-500" onClick={()=>{
            navigate("/home")
          }}>
            <FaSearch size={24} />
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center text-red-500" onClick={()=>{
            navigate("/blood-banks")
          }}>
            <BiDonateBlood size={24} />
            <span className="text-xs">Donate</span>
          </button>
         
          <button className="flex flex-col items-center text-red-500" onClick={()=>{
            navigate("/")
          }}>
            <FaHouseMedical size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-red-500" onClick={()=>{
            navigate("/profile")
          }}>
            <FaUser size={24} />
            <span className="text-xs">Profile</span>
          </button>
          <button className="flex flex-col items-center text-red-500">
            <FaBell size={24} />
            <span className="text-xs">Alerts</span>
          </button>
        </nav>
    </div>
  )
}

export default Nav
