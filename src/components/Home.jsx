import React from "react";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";

const Home = ({ scrollToWork }) => {
  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center"
    >
      <div className="max-w-[1000px] px-4 sm:px-4 text-center">
        <p className="text-blue-600 text-lg sm:text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] leading-none mt-2 sm:mt-4">
          SALL ALY
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0] mb-6">
          I'm a Front-end Developer.
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-4 sm:space-y-0 mb-8 sm:mb-12">
          {/* Bouton Contact */}
          <button
            className="text-white border-2 border-transparent px-6 py-3 flex items-center justify-center rounded-full bg-[#4f5ad1] hover:text-gray-50 transition duration-300"
            onClick={handleContactClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            CONTACT ME
            <span
              className={`group-hover:rotate-180 transition-transform duration-300 transform ${
                isHovered ? "rotate-90" : ""
              }`}
            >
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
