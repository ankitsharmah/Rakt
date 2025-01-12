import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../main";
import axios from "axios";

export const BloodBankList = ({   }) => {
  const navigate = useNavigate();
    const[bloodBanks,setBloodBank] = useState(null);
    const[isLoading,setLoading] = useState(true);

  const onSelectHandler = (id) => {
    navigate(`/blood-bank/${id}`);
  };

  useEffect(() => {
    const fetchBloodBanks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/blood-bank/banks`); // Replace with actual API endpoint
        setBloodBank(response.data.banks);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching blood banks:", error);
      }
    };

    fetchBloodBanks();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">Blood Banks</h1>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Shimmer placeholders */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse shadow-lg rounded-lg p-6"
            >
              <div className="h-6 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodBanks.map((bank) => (
            <div
              key={bank._id}
              className="bg-white shadow-lg rounded-lg p-6 hover:bg-red-50 cursor-pointer"
              onClick={() => onSelectHandler(bank._id)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{bank.name}</h2>
              <p className="text-gray-600">
                {bank.location.address}, {bank.location.city}
              </p>
              <p className="text-gray-600">Contact: {bank.contactInfo.phone[0]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
