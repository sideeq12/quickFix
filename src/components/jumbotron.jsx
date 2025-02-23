import React from 'react'

const Jumbotron = ({title, subheader}) => {
  return (
    <div
    className='py-32 w-full text-center  bg-[url(/jumbotron.png)] bg-center bg-cover
     text-white'><h3 className='text-2xl'>{title}</h3>
     <div className='flex justify-center gap-2 mt-4'>{
      subheader.map((sub, index)=><div className='flex justify-center align-middle'>{sub} 
      { index !== subheader.length-1 ? <img src="/arrow.svg" className='h-4 ml-2 mt-1' alt="" /> : ""} 
          </div>)} </div>
     </div>
  )
}

export default Jumbotron