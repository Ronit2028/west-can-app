"use client"
import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

const PopularCategories = () => {

  const categories = [
    {
      name: "Brake Parts",
      link: "/brake-parts",
      image: "/images/brake-parts.jpg",
      unsplashUrl: "https://images.unsplash.com/photo-1707406766955-c99768ee2fd8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Oil & Lubricants",
      link: "/oil-lubricants",
      image: "/images/oil-lubricants.jpg",
      unsplashUrl: "https://westcanauto.com/wp-content/uploads/2023/06/LubricatingOil-1-300x300.jpg"
    },
    {
      name: "Filters",
      link: "/filters",
      image: "/images/filters.jpg",
      unsplashUrl: "https://westcanauto.com/wp-content/uploads/2023/06/car-filters-300x300.jpg"
    },
    {
      name: "Batteries",
      link: "/batteries",
      image: "/images/batteries.jpg",
      unsplashUrl: "https://westcanauto.com/wp-content/uploads/2023/06/1c1a31a046158babd79cf07898faba9a92f01d60-300x300.jpg"
    },
    {
      name: "Suspension Part",
      link: "/suspension-part",
      image: "/images/suspension-part.jpg",
      unsplashUrl: "https://images.unsplash.com/photo-1669136048337-5daa3adef7b2?q=80&w=3342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Automotive Lighting",
      link: "/automotive-lighting",
      image: "/images/automotive-lighting.jpg",
      unsplashUrl: "https://westcanauto.com/wp-content/uploads/2023/06/29_07_2022-car_headlights_covor_image_22934624-300x300.jpg"
    },
    {
      name: "Automotive Service Tools",
      link: "/automotive-service-tools",
      image: "/images/automotive-service-tools.jpg",
      unsplashUrl: "https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Safety",
      link: "/safety",
      image: "/images/safety.jpg",
      unsplashUrl: "https://westcanauto.com/wp-content/uploads/2023/06/1571393347094-600x600.jpg"
    }
  ];

  return (
    <section className="py-8 w-10/12 mx-auto">
      <div className="mb-10 lg:mb-20 text-center">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase text-[#b02027]"
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
              <img src={category.unsplashUrl} alt={category.name} className="min-w-[280px] w-full mb-4 h-[25vh] object-cover object-center" />
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
