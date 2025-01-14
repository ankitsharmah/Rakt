import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
// import { sendOtp, signUpUser,  } from '../operations/apiServices/authApi';
import OtpInput from 'react-otp-input';
import { BASE_URL } from '../main';
import toast from 'react-hot-toast';
import axios from 'axios';
export const VerifyEmail = () => {
    const {signupData,loading}= useState(false);
    const [otp, setOtp] = useState('');
    // const dispatch= useDispatch();
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
      e.preventDefault();
      
      const email = localStorage.getItem("userEmail");
      const payload = {
          email: email,
          otp: otp,
      };
  
      try {
        console.log("before")
          const response = await axios.post(`${BASE_URL}/api/v1/auth/verify-account`, payload);
          console.log("afterr")
          console.log("Server Response:", response);
          
          if (response.data && response.data.success) {

              toast.success("Account verified successfully!");

              navigate("/")
          } else {
              toast.error(response.data?.message || "Verification failed.");
          }
      } catch (error) {
          // Log detailed error for debugging
          console.error("Error during verification:", error);
  
          // Show an error toast to the user
          if (error.response && error.response.data) {
              // Handle API error responses
              toast.error(error.response.data.message || "An error occurred.");
          } else {
              // Handle other errors (e.g., network issues)
              toast.error("Failed to connect. Please try again later.");
          }
      } finally {
          console.log("Input OTP value:", otp);
      }
  }
  

    // const {fullname,username,email,password,favouriteGenre}=signupData
   
  return (
    <div className='  mx-auto place-items-center '>
    {
      loading ? (<div className=' spinner mx-auto mt-[20rem]'></div>) :

       ( <div className='w-11/12 flex flex-col items-center justify-center mt-[10rem] gap-2  mx-auto'>
            <h1 className="text-richblack-5 text-red-500 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email
          </h1>
          <p className="text-[1.125rem] text-center leading-[1.625rem] my-4 text-richblack-100">
            A verification code has been sent to you. Enter the code below
          </p>
          <form className='flex flex-col items-center gap-4 mt-4' onSubmit={handleSubmit}>
          <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputType='number'
              shouldAutoFocus={true}
              renderInput={(props) => (
                <input
                  
                  type='number'
                  required
                  {...props}
                  placeholder="_"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-red-500"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
                <button type='submit' className='mt-6 rounded-[8px] bg-red-50 py-[8px] px-[12px] font-medium text-red-500 w-[50%]'>Verify Email</button>
          </form>
          <div className="mt-6 flex items-center justify-between w-1/2">
            <Link to="/signup">
              <p className="text-richblack-5 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center disabled:cursor-not-allowed text-yellow-500 gap-x-2"
              disabled={true}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
          
    </div>
  )
}