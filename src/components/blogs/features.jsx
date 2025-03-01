import React from 'react'

const Features = () => {
  const data = Array(10).fill({
    imgSrc: "sick.png",
    title: "Lorem Ipsum is simply dummy text of the printing.",
    description: "Lorem Ipsum is simplxt of the printing .......",
    time: "3:30PM",
    date: "December 12, 2024",
    author: "By Admin",
  });
  return (
    <div className="grid grid-cols-1 mx-auto  w-5/6 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 my-12">
    {data.map((item, index) => (
      <div key={index} className="border border-gray-200 rounded-lg">
        <img src={item.imgSrc} className="rounded-lg h-60 w-full" alt="Thumbnail" />
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
  )
}

export default Features