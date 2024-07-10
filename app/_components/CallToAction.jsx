"use client"
import React from 'react'
import { Button, Typography } from "@material-tailwind/react";
import sideImage from '@/sideimage.png'
const CallToAction = () => {
  return (
    <section className="py-8 ">
      <div className="w-10/12 mx-auto p-10 rounded-l-xl border shadow-md bg-[url('/image/gradient-bg-1.png')] rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right" style={{backgroundImage:`url(${sideImage.src})`}}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-bold mb-2"
        >
          Upcoming Events
        </Typography>
        <Typography variant="h3" color="blue-gray">
          IN-STORE SHOPPING, 
          IN-STORE PICK UP, 
          DELIVERY
        </Typography>
        <Typography
          className="mt-2 mb-6 !text-base font-normal text-gray-500"
        >
          We realize the sense of urgency when your car needs a repair job, so we have made the procurement process quick & easy for you.
        </Typography>
        <Button variant="danger" className="flex-shrink-0">
          Explore
        </Button>
      </div>
    </section>
  )
}

export default CallToAction