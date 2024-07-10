"use client"
import React from 'react'
import { Button, Typography } from "@material-tailwind/react";
import sideImage from '@/sideimage.png'
const CallToAction = () => {
  return (
    <section className="py-8 ">
      <div className="w-10/12 mx-auto  lg:bg-white text-white lg:text-black border shadow-md rounded-lg bg-no-repeat lg:bg-contain bg-cover bg-right" style={{backgroundImage:`url(${sideImage.src})`,}}>
        <div className='p-10 bg-[#00000080] lg:bg-[#00000000] w-full'>
        <Typography
          variant="small"
          color=""
          className="font-bold mb-2"
        >
          Upcoming Events
        </Typography>
        <Typography variant="h3" className='text-xl font-bold lg:text-3xl'>
         In Store Shopping, In Store Pickup, Delivery
        </Typography>
        <Typography
          className="mt-2 mb-6 !text-base font-normal "
        >
          We realize the sense of urgency when your car needs a repair job, so we have made the procurement process quick & easy for you.
        </Typography>
        <Button variant="danger" className="flex-shrink-0 bg-[#b02027]">
          Explore
        </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction