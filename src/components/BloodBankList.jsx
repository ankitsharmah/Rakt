import React from "react";
import { useNavigate } from "react-router-dom";

export const BloodBankList = ({ bloodBanks, onSelect }) => {

    const navigate = useNavigate();
        function onSelect(id){
            navigate(`/blood-bank/${id}`)
    }
    return (
      <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Blood Banks</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodBanks.map((bank) => (
            <div
              key={bank._id}
              className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-50 cursor-pointer"
              onClick={() => onSelect(bank._id)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{bank.name}</h2>
              <p className="text-gray-600">{bank.location.address}, {bank.location.city}</p>
              <p className="text-gray-600">Contact: {bank.contactInfo.phone[0]}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };