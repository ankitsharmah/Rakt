// import React from 'react'
// import bb from "../assets/rakt.png"
// import { useNavigate } from 'react-router-dom'
// const Header = () => {
//     const navigate = useNavigate()
//   return (
//     <div className='bg-red-0 p-2 sticky bg-white top-0 z-30'>
//       <div className='flex items-center gap-2'
//        onClick={()=>{
//         navigate("/")
//     }}>
//         <img src={bb} alt="" className='h-[3.2rem]'/>
//         <p className=' text-xl text-red-600 font-bold'>Rakt</p>
//       </div>
//     </div>
//   )
// }

// export default Header
import React, { useEffect, useState } from 'react';
import bb from '../assets/rakt.png';
import { FiBell } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi'; // Import the scroll-to-top icon

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const checkScrollTop = () => {
    // Show scroll-to-top button when scrolled down more than 400px
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <div className="bg-red-100 p-3 sticky top-0 z-50 shadow-md h-[10vh] flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={bb} alt="Rakt Logo" className="h-[3.2rem]" />
        <p className="text-xl text-red-600 font-bold">Rakt</p>
      </div>

      {/* Time */}
      <div className="text-red-600 text-sm">
        {time.toLocaleTimeString()} | {time.toLocaleDateString()}
      </div>

      {/* Notification Bell */}
      {/* <FiBell className="text-white text-2xl cursor-pointer" /> */}

      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-red-600 text-2xl p-3 rounded-full bg-white shadow-md fixed bottom-8 right-8"
        >
          <FiChevronUp />
        </button>
      )}
    </div>
  );
};

export default Header;


