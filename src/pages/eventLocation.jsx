import React, { useState } from "react";

const EventLocation = () => {
  const [selected, setSelected] = useState("First");
  const [details, setDetails] = useState("lorem ipsum hbjdbjsd sdjkfnksf sdjosdnksd sdpsflsd Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the rem Ipsum has been the industry's standard dummy text ever since then the industry's standard dummy text ever since the pslsdmp");
  const handleClick = (name, content) => {
    setSelected(name);
    setDetails(content);
  };

  return (
    <div className="border-2 border-gray-200 rounded-md">
      <div className="grid w-full grid-cols-3">
        <div
          className={`py-4 cursor-pointer text-xs md:text-sm ${
            selected === "First" ? "border-t-2 border-red-500  bg-white" : "border-none rounded-br-md bg-gray-200"
          }`}
          onClick={() => handleClick("First", "Content for First")}
        >
          Facilites
        </div>
        <div
          className={`py-4 cursor-pointer text-xs md:text-sm ${
            selected === "Second" ? "border-t-2 border-red-500  bg-white" : "border-none rounded-br-md bg-gray-200"
          }`}
          onClick={() => handleClick("Second", "Content for Second")}
        >
          Map Location
        </div>
        <div
          className={`py-4 cursor-pointer text-xs md:text-sm ${
            selected === "Third" ? "border-t-2 border-red-500  bg-white" : "border-none rounded-bl-md bg-gray-200"
          }`}
          onClick={() => handleClick("Third", "Content for Third")}
        >
          Contact Us.
        </div>
      </div>
      <div className="details my-4 text-left p-4">{details}</div>
    </div>
  );
};

export default EventLocation;
