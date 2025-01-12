import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../main";

const Camps = () => {
  const [camps, setCamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/camp/camps`);
        setCamps(response.data.camps);
      } catch (err) {
        setError("Failed to fetch camps data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCamps();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upcoming Camps</h1>
      {camps.length === 0 ? (
        <p>No camps available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {camps.map((camp) => (
            <div
              key={camp._id}
              className="border rounded-md p-4 shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold">{camp.name}</h2>
              <p>
                <strong>Location:</strong> {camp.location}
              </p>
              <p>
                <strong>Date:</strong> {camp.startDate} - {camp.endDate}
              </p>
              <p>
                <strong>Time:</strong> {camp.startTime} - {camp.endTime}
              </p>
              {/* <p>
                <strong>Participants:</strong> {camp.participants.length}
              </p> */}
              <p className="text-gray-500 text-sm">
                Created At: {new Date(camp.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Camps;
