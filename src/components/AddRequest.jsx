import axios from "axios";
import React,{ useState } from "react";

export const AddRequest = () => {
    const [formData, setFormData] = useState({
      bloodGroup: "",
      quantity: "",
      bloodBank: "",
      type: "",
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = "YOUR_AUTH_TOKEN"; // Replace with actual token
        const response = await axios.post(
          "/api/requests",
          { ...formData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.data.success) {
          alert("Request raised successfully!");
        }
      } catch (error) {
        console.error("Error raising request:", error);
      }
    };
  
    return (
      <div className="bg-gradient-to-b from-red-50 to-red-100 min-h-screen p-6 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        >
          <h2 className="text-2xl font-bold text-red-600 text-center mb-6">Raise a Request</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Blood Bank</label>
            <input
              type="text"
              name="bloodBank"
              value={formData.bloodBank}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-6 rounded-lg w-full hover:bg-red-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    );
  };