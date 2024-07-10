"use client"

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Typography } from "@material-tailwind/react";

const locations = [
  {
    name: "Store 1",
    description: "This is Store 1",
    image: "https://via.placeholder.com/150",
    position: { lat: 37.7749, lng: -122.4194 },
  },
  {
    name: "Store 2",
    description: "This is Store 2",
    image: "https://via.placeholder.com/150",
    position: { lat: 34.0522, lng: -118.2437 },
  },
  {
    name: "Store 3",
    description: "This is Store 3",
    image: "https://via.placeholder.com/150",
    position: { lat: 40.7128, lng: -74.0060 },
  },
];

const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleMarkerClick = (store) => {
    setSelectedStore(store);
  };

  return (
    <div className="w-10/12 mx-auto  py-12 my-10">
       <div className=" mb-10 lg:mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase text-[#b02027]"
        >
          Find Us
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Our Store Locations
        </Typography>
        
      </div>
      <div className='flex flex-wrap md:flex-nowrap gap-4'>
      <div className="w-full md:w-1/2 bg-black/25 overflow-hidden rounded-md min-h-[50vh]">
        <img src="https://westcanauto.com/wp-content/uploads/2023/05/map-area.png" alt="" className='h-full w-full object-cover origin-center'/>
      </div>
      <div className="w-full md:w-1/2">
        <section className="mx-auto max-w-screen-md">
          <img
            src={`https://westcanauto.com/wp-content/uploads/2023/05/Screenshot-6.png`}
            alt="team work"
            className="mb-4 h-[28rem] w-full rounded-xl object-cover"
          />
          
          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl leading-snug"
          >
            West Can Auto Parts - Abbotsford
          </Typography>
          <Typography className="font-normal text-gray-500">
          Our auto parts Abbotsford store features an exclusive range of quality industrial equipment, safety supplies, accessories, tools, and car parts that you can access anytime.
          
            <br />
            <br />
            33406 South Fraser Way Abbotsford, BC V2S 2B5
            <br />
            <br />
          </Typography>
          <Button variant='dark'>
            Know More
          </Button>
        </section>
      </div>
      </div>
    </div>
  );
};

export default StoreLocator;
