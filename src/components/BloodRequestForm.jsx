import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const BloodRequestForm = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    quantity: "",
    bloodBank: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
      const response = await axios.post(
        "/api/requests",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Request raised successfully!");
        setFormData({ bloodGroup: "", quantity: "", bloodBank: "", type: "" });
      } else {
        toast.error(response.data.message || "Failed to raise request.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while raising the request.");
    }
  };

  return (
    <div className="h-[90vh] bg-red-50 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Blood Request Form</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
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

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-red-700"
          >
            Quantity (in units)
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          />
        </div>

       

        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-red-700"
          >
            Request Type
          </label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 p-1 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            required
          >
            <option value="">Select Request Type</option>
            <option value="Whole Blood">Whole Blood</option>
            <option value="RBC">RBC</option>
            <option value="Plasma">Plasma</option>
            <option value="Platelets">Platelets</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
