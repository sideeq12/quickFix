import React, { useState } from 'react';
import { FcNext , FcPrevious} from "react-icons/fc";


const Features = () => {
  const data = Array(20).fill({ 
    imgSrc: "sick.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description: "Lorem Ipsum is simplxt of the printing .......",
    time: "3:30PM",
    date: "December 12, 2024",
    author: "By Admin",
  });

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full p-3 lg:w-5/6 mx-auto my-4">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-12">
        {displayedData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <img src={item.imgSrc} className="rounded-lg h-40 lg:h-60 w-full" alt="Thumbnail" />
            <div className="p-2 text-left">
              <h3 className="text-sm text-left font-semibold mt-3">{item.title}</h3>
              <div className="flex gap-2 text-xs my-1 align-bottom justify-between">
                <p className="w-3/4">{item.description}</p>
                <div className="mt-auto text-red-500">{item.time}</div>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="w-1/2 border-r py-1">{item.date}</span>
                <span className="mt-auto font-semibold">{item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-4">
        <FcPrevious 
          onClick={handlePrev} 
          disabled={currentPage === 1} 
          className=""
          size={20}
        
        />
        <span className="px-4 ">Page {currentPage} of {totalPages}</span>
        <FcNext 
          onClick={handleNext} 
          size={20}
          disabled={currentPage === totalPages} 
          className=""
        />
      </div>
    </div>
  );
};

export default Features;
