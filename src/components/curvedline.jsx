// CurvedLine.jsx
import React from "react";

const CurvedLine = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 1440" // Adjusts canvas size for vertical orientation
    className="absolute left-0 h-3/4 w-full"
  >
    <path
      fill="none"
      stroke="#FF6F61" // Change stroke color to match your theme
      strokeWidth="3"
      d="M0,100  C800,480 100,960 -500,1440"// Creates the vertical curve
    />
  </svg>
  );
};

export default CurvedLine;
