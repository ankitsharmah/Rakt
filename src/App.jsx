import { useEffect, useState } from 'react'
import React from 'react'
import Nav from './shared/Nav'
import Home from './components/Home'
import Header from './shared/Header'
import UserDetails from './components/UserDetails'
import { Route, Routes } from 'react-router-dom'
import { AddRequest } from './components/AddRequest'
import { BloodBankList } from './components/BloodBankList'
import axios from 'axios'
import { BloodBankDetails } from './components/BloodBankDetails'
import Camps from './components/Camps'
import { BASE_URL } from './main'
import BloodBankHomePage from './components/BloodBankHomPage'

function App() {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState(null);
  // const 
  useEffect(() => {
    const fetchBloodBanks = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/blood-bank/banks`); // Replace with actual API endpoint
        setBloodBanks(response.data.banks);
      } catch (error) {
        console.error("Error fetching blood banks:", error);
      }
    };

    fetchBloodBanks();
  }, []);
  const userData = {
    _id: "677e93cd95df1c05fd6cc9c4",
    fullName: "John Doe",
    email: "as7235740@gmail.com",
    password: "$2a$10$ytBzRQZIPmkfROblvBzp7.mzr5YdSWzvZM9Fnq9u4DYSkpB7RZYsq",
    role: "user",
    bloodGroup: "O+",
    contact: "1234567890",
    isAuthenticated: true,
    address: "123 Main Street, Cityville",
    lastDonationDate: "2024-12-15T00:00:00.000Z",
    createdAt: "2025-01-08T15:03:41.664Z",
    updatedAt: "2025-01-08T15:04:43.479Z",
    __v: 0,
  };
  return (
    <>
    <div className='max-w-7xl mx-auto'>

    <Routes>
      <Route path='/' element={<BloodBankHomePage />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/request' element={<AddRequest/>}/>
      <Route path='/profile' element={<UserDetails user={userData} />}/>
      <Route path='/camps' element={<Camps/>}/>
      <Route path='/blood-banks' element={<BloodBankList  bloodBanks={bloodBanks}/>}/>
      <Route path='/blood-bank/:id' element={<BloodBankDetails/>}/>
      
    </Routes>
      
    </div>

    </>
  );
};


export default App;
