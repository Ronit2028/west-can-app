"use client"

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Typography } from "@material-tailwind/react";

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
    <div className="w-10/12 mx-auto flex gap-4 py-12 my-10">
      <div className="w-full md:w-1/2 bg-black/25 h-[50vh] overflow-hidden rounded-md">
        <MapContainer center={[37.7749, -122.4194]} zoom={4} scrollWheelZoom={false} className="h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((store, index) => (
            <Marker
              key={index}
              position={[store.position.lat, store.position.lng]}
              onClick={() => handleMarkerClick(store)}
            >
              <Popup>
                <div className="w-64">
                  <h2 className="text-xl font-bold mb-2">{store.name}</h2>
                  <p className="text-gray-700 mb-2">{store.description}</p>
                  <img src={store.image} alt={store.name} className="w-full h-auto rounded-lg" />
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="w-full md:w-1/2">
        <section className="mx-auto max-w-screen-md">
          <img
            src={`https://www.material-tailwind.com/img/content2.jpg`}
            alt="team work"
            className="mb-4 h-[28rem] w-full rounded-xl object-cover"
          />
          <Typography
            variant="small"
            className="font-medium text-blue-500"
          >
            #blog #post
          </Typography>
          <Typography
            variant="h2"
            color="blue-gray"
            className="my-4 font-black text-4xl leading-snug"
          >
            The Castle Looks Different at Night...
          </Typography>
          <Typography className="font-normal text-gray-500">
            This is the paragraph where you can write more details about your
            product. Keep your user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn't
            scroll to get here. Add a button if you want the user to see more. We
            are here to make life better.
            <br />
            <br />
            And now I look and look around and there's so many Kanyes I've been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound... and thank you for turning my personal jean
            jacket into a couture piece.
          </Typography>
        </section>
      </div>
    </div>
  );
};

export default StoreLocator;
