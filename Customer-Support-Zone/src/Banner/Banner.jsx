import React from "react";
import patImage from "../assets/vector1.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1280px] mx-auto mt-6 px-4">
      
      {/* In-Progress Card */}
      <div
        className="relative flex flex-col justify-center items-center rounded-lg p-6 text-white shadow-md overflow-hidden"
        style={{
          background: "linear-gradient(to right, #642fe3, #9c5ff1)",
        }}
      >
        {/* Background pattern image */}
        <img src={patImage} alt="pattern" className="absolute  inset-0 " />

        {/* Content */}
        <div className="relative z-10 text-center">
          <p className="text-lg font-medium">In-Progress</p>
          <p className="text-4xl font-bold mt-2">0</p>
        </div>
      </div>

      {/* Resolved Card */}
      <div
        className="relative flex flex-col justify-center items-center rounded-lg p-6 text-white shadow-md overflow-hidden"
        style={{
          background: "linear-gradient(to right, #54cf68, #00827a)",
        }}
      >
        {/* Background pattern image */}
        <img
          src={patImage}
          alt="pattern"
          className="absolute inset-0 object-cover"
        />
        {/* Content */}
        <div className="relative z-10 text-center">
          <p className="text-lg font-medium">Resolved</p>
          <p className="text-4xl font-bold mt-2">0</p>
        </div>
      </div>

    </div>
  );
};

export default Banner;
