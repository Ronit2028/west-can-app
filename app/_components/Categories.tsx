import React from 'react'

const Categories = () => {
  return (
    <div className='flex w-10/12 mx-auto gap-5'>
      <div className="w-full lg:w-1/2 rounded-md overflow-hidden">
        <div className="overlay p-10 bg-[#00000080] flex flex-col justify-end text-white min-h-[75vh]">
          <p className="text-xl font-semibold mb-10">
            West Can Auto Parts
          </p>

          <p className="text-3xl font-semibold">
            CAR BATTERIES
          </p>
          <p className='text-lg mb-5'>
            Empowering Your Ride with Reliable Car Batteries.
          </p>

         <button className='bg-white rounded-md font-semibold w-fit text-black px-4 py-2'> MORE DETAILS</button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5 rounded-md overflow-hidden">
        <div className='w-full h-full bg-[#00000080]'></div>
        <div className='w-full h-full bg-[#00000080]'></div>
      </div>
    </div>
  )
}

export default Categories