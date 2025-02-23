import React from "react";

const HorizontalScroll = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="text-left ml-10 my-4">
            <h1 className='text-2xl font-bold'>Latest News & Articles</h1>
        </div>
      <div className={`flex space-x-4 p-4 `}  >
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-80 h-80  p-4 flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center
             rounded-lg shadow-lg flex items-end justify-center text-white text-xl font-bold"
          >
          <div className="bg-white w-full  rounded-lg ">
            <div className="bg-red-500 -mt-4 py-1 px-4 text-sm font-light rounded-lg w-fit ">
                December 12, 2024
            </div>
            <div className="text-black   text-sm">
               How Young People Volunteering to...
                <div className="flex bg-yellow-700 text-black font-light text-xs rounded-b-lg ">
                        <div className="border-r border-black  py-1 px-2"> By Admin</div>
                        <div className="px-2 py-1">Fitness</div>
                </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
