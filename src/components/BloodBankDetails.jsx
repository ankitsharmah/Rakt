import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BASE_URL } from "../main";

export const BloodBankDetails = () => {
  const [requestType, setRequestType] = useState("Whole Blood");
  const [bank, setSelectedBank] = useState(null);
  const [loading, isLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBloodBanks = async () => {
      console.log("calling");
      isLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/blood-bank/bank/${id}`); // Replace with actual API endpoint
        console.log(response);
        setSelectedBank(response.data.bank);
        isLoading(false);
      } catch (error) {
        console.error("Error fetching blood banks:", error);
        isLoading(false);
      }
    };

    fetchBloodBanks();
  }, [id]);

  const handleTypeChange = (event) => {
    setRequestType(event.target.value);
  };


  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen p-6">

      <NavLink
        to={"/blood-banks"}
        className={"mb-4 bg-red-600 text-white px-4 py-2 rounded"}
      >
        Back to List
      </NavLink>

      {loading ? (
        // Shimmer Effect Placeholder
        <div className="bg-white p-8 rounded-lg shadow-lg animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded mb-2 w-2/3"></div>
          <div className="h-6 bg-gray-200 rounded mb-2 w-1/2"></div>
          <div className="h-6 bg-gray-200 rounded mb-4 w-2/4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-full"></div>
          <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
          <div className="h-8 bg-gray-300 rounded mb-4 w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded mb-2 w-2/3"></div>
          <div className="h-6 bg-gray-300 rounded mb-4 w-1/4"></div>
        </div>
      ) : (
        // Actual Blood Bank Details
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">{bank.name}</h1>
          <p>
            <strong>Address:</strong> {bank.location.address}, {bank.location.city}, {bank.location.state} -{" "}
            {bank.location.pincode}
          </p>
          <p>
            <strong>Contact:</strong> {bank.contactInfo.phone.join(", ")}
          </p>
          <p>
            <strong>Email:</strong> {bank.contactInfo.email}
          </p>
          <p>
            <strong>Operating Hours:</strong> {bank.operatingHours.openTime} to{" "}
            {bank.operatingHours.closeTime} ({bank.operatingHours.days.join(", ")})
          </p>
          <p>
            <strong>Services:</strong> {bank.services.join(", ")}
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Available Inventory</h2>
          <ul className="list-disc list-inside">
            {bank.availableInventory.map((item) => (
              <li key={item._id}>
                {item.bloodGroup} ({item.type}) - {item.quantity} units (Last Updated:{" "}
                {new Date(item.lastUpdated).toLocaleDateString()})
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <label
              htmlFor="requestType"
              className="block font-medium text-gray-700 mb-2"
            >
              Select Request Type:
            </label>
            <select
              id="requestType"
              value={requestType}
              onChange={handleTypeChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            >
              <option value="Whole Blood">Whole Blood</option>
              <option value="RBC">RBC</option>
              <option value="Plasma">Plasma</option>
              <option value="Platelets">Platelets</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
