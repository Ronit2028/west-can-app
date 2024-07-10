"use client"
import React from 'react'
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const PopularCategories = () => {
  const categories = [
    {
      name: "Brake Parts",
      link: "/brake-parts",
      image: "/images/brake-parts.jpg"
    },
    {
      name: "Oil & Lubricants",
      link: "/oil-lubricants",
      image: "/images/oil-lubricants.jpg"
    },
    {
      name: "Filters",
      link: "/filters",
      image: "/images/filters.jpg"
    },
    {
      name: "Batteries",
      link: "/batteries",
      image: "/images/batteries.jpg"
    },
    {
      name: "Suspension Part",
      link: "/suspension-part",
      image: "/images/suspension-part.jpg"
    },
    {
      name: "Automotive Lighting",
      link: "/automotive-lighting",
      image: "/images/automotive-lighting.jpg"
    },
    {
      name: "Automotive Service Tools",
      link: "/automotive-service-tools",
      image: "/images/automotive-service-tools.jpg"
    },
    {
      name: "Safety",
      link: "/safety",
      image: "/images/safety.jpg"
    }
  ];

  return (
    <section className="py-8 w-10/12 mx-auto">
      <div className="mb-10 lg:mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Products
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Our Popular Categories
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto !text-gray-500"
        >
          Choose From The Best
        </Typography>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Card key={index} shadow={true} className="">
            <CardBody className="pb-0">
              <img src={category.image} alt={category.name} className="min-w-[280px] w-full mb-4" />
              <Typography className="mb-2" color="blue-gray" variant="h5">
                {category.name}
              </Typography>
              <Button variant="danger" className="flex-shrink-0 mb-4" href={category.link}>
                Explore 
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
