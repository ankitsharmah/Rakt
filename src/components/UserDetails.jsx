import React from "react";

const UserDetails = ({ user }) => {
    return (
      <div className="bg-gradient-to-b from-red-100 to-red-50 h-fit p-6 md:p-12 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-red-600 p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">User Details</h1>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-8">
              <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl">
                {user.fullName.charAt(0)}
              </div>
              <div className="ml-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">{user.fullName}</h2>
                <p className="text-sm text-gray-600">Role: {user.role}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-gray-700">Email:</p>
                <p className="text-gray-800 break-words">{user.email}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Contact:</p>
                <p className="text-gray-800">{user.contact}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Blood Group:</p>
                <p className="text-gray-800">{user.bloodGroup}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Last Donation Date:</p>
                <p className="text-gray-800">
                  {new Date(user.lastDonationDate).toLocaleDateString()}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="font-medium text-gray-700">Address:</p>
                <p className="text-gray-800 break-words">{user.address}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition">
                Update Information
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default UserDetails;