import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap w-10/12 mx-auto gap-5'>
      <div className="w-full lg:w-1/2 rounded-md overflow-hidden" style={{backgroundImage:'url(https://img.freepik.com/free-photo/car-repair-garage_1170-1496.jpg?t=st=1720630527~exp=1720634127~hmac=f806692d5413c4947f91706f99652302d8f83079d3dd7a55639137b1485163c7&w=1060)',backgroundSize:"cover"}}>
        <div className="overlay p-10 bg-[#00000080] flex flex-col justify-end text-white h-auto lg:min-h-[75vh]">
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
      <div className="w-full lg:w-1/2 flex flex-col gap-5 rounded-md overflow-hidden" >
        <div className='h-full' style={{backgroundImage:'url(https://img.freepik.com/free-photo/spare-parts-car_1170-1344.jpg?t=st=1720630692~exp=1720634292~hmac=4d8e9fa7c9b83e21e15cb90e48439ac2538689a93d10a5bb7f1ec693759fabbd&w=2000)', backgroundSize:"cover"}}>
        <div  className='w-full h-full bg-[#00000080] flex flex-col justify-end text-white p-10'>
        <p className="text-xl font-semibold mb-10">
        Best Price


          </p>

          <p className="text-3xl font-semibold">
          GENUINE REPLACEMENT PARTS
          
          </p>
          <p className='text-lg mb-5'>
          Over 1 Million SKUs
          </p>
          <button className='bg-white rounded-md font-semibold w-fit text-black px-4 py-2'> MORE DETAILS</button>
        </div>
        </div>
        <div className='h-full' style={{backgroundImage:'url(https://img.freepik.com/free-photo/female-mechanic-pouring-oil-lubricant-into-car-engine_1170-1454.jpg?t=st=1720630743~exp=1720634343~hmac=1ebfb75e5d6f4409a7c8817b4a69369bae74e314836def153167c2cb4fdff1ba&w=2000)', backgroundSize:"cover"}}>
        <div className='w-full h-full bg-[#00000080] flex flex-col justify-end text-white p-10'>
        <p className="text-xl font-semibold mb-10">
        Mega Sale Offer


          </p>

          <p className="text-3xl font-semibold">
          FLUIDS, CHEMICALS & LUBRICANTS
          
          </p>
          <p className='text-lg mb-5'>
          We supply top quality brands
          </p>
          <button className='bg-white rounded-md font-semibold w-fit text-black px-4 py-2'> MORE DETAILS</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Categories