import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://img.freepik.com/free-vector/donate-blood-save-lives-concept-poster-world-blood-donor-day_1017-38607.jpg?t=st=1736679158~exp=1736682758~hmac=281915708aab66b543b80dca85e05a4489ee3a987bbc33e480e44cf9c7d0db1b&w=1380",
    alt: "Donate Blood Save Lives",
    caption: "Every drop of blood counts!",
  },
  {
    src: "https://www.shutterstock.com/image-vector/creative-professional-design-blood-drop-260nw-1969536496.jpg",
    alt: "Blood Donation Camp",
    caption: "Join our upcoming blood donation camp.",
  },
  {
    src: "https://www.shutterstock.com/image-vector/creative-professional-design-blood-drop-260nw-1969536496.jpg",
    alt: "Be a Hero",
    caption: "You can save up to 3 lives with one donation.",
  },
];

const BloodBankHomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Image Carousel */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover"
              />
              {index === currentImageIndex && (
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
                  <p>{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Why Donate Blood?</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Blood donation is a vital part of healthcare. Each unit of blood you donate can help save up to three lives.
          It helps patients undergoing surgeries, cancer treatments, and those with chronic illnesses.
          Join us in making a difference by becoming a regular donor.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-8 px-4 bg-red-50">
        <h2 className="text-2xl font-bold text-red-600 text-center mb-6">
          Benefits of Donating Blood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Saves Lives</h3>
            <p className="text-gray-600">
              Your blood can save lives of accident victims, surgeries, and those in need of transfusions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Improves Health</h3>
            <p className="text-gray-600">
              Regular donation improves heart health by reducing iron levels in the body.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Community Impact</h3>
            <p className="text-gray-600">
              Be a hero in your community by ensuring blood is available in times of need.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 px-4 text-center bg-red-100">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Ready to Make a Difference?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Sign up for our blood donation drives or visit our center to donate blood today. Together, we can save lives.
        </p>
        <button className="bg-red-600 mb-11 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700">
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default BloodBankHomePage;
