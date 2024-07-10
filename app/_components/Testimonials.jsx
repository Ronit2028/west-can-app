"use client"

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "John Doe",
    feedback: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉",
    image: "https://www.material-tailwind.com/img/avatar1.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Excellent customer service and a fantastic range of components that make development faster and easier. Highly recommend!",
    image: "https://www.material-tailwind.com/img/avatar2.jpg",
    rating: 4,
  },
  {
    name: "Sam Wilson",
    feedback: "A great tool for building modern web applications with ease. The components are well-designed and easy to use.",
    image: "https://www.material-tailwind.com/img/avatar3.jpg",
    rating: 4,
  },
  {
    name: "John Doe",
    feedback: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉",
    image: "https://www.material-tailwind.com/img/avatar1.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback: "Excellent customer service and a fantastic range of components that make development faster and easier. Highly recommend!",
    image: "https://www.material-tailwind.com/img/avatar2.jpg",
    rating: 4,
  },
  {
    name: "Sam Wilson",
    feedback: "A great tool for building modern web applications with ease. The components are well-designed and easy to use.",
    image: "https://www.material-tailwind.com/img/avatar3.jpg",
    rating: 4,
  },
];

const renderRating = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.386a1 1 0 00.95.69h3.561c.969 0 1.371 1.24.588 1.81l-2.881 2.094a1 1 0 00-.364 1.118l1.1 3.386c.3.921-.755 1.688-1.54 1.118l-2.881-2.094a1 1 0 00-1.175 0l-2.881 2.094c-.785.57-1.84-.197-1.54-1.118l1.1-3.386a1 1 0 00-.364-1.118L2.853 8.813c-.783-.57-.38-1.81.588-1.81h3.561a1 1 0 00.95-.69l1.1-3.386z" />
      </svg>
    );
  }
  return stars;
};

const Testimonials = () => {
  const settings = {// Adjust this value to control the visibility of the adjacent items
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  return (
    <div className='w-10/12 mx-auto py-12'>
      <Typography
        color="blue-gray"
        variant="lead"
        className="!font-semibold lg:!text-lg !text-base"
      >
        Know What People Think About Us
      </Typography>
      <Typography
        variant="h1"
        color="blue-gray"
        className="my-4 !text-2xl !leading-snug lg:!text-3xl"
      >
        Client's Testimonials
      </Typography>
      <Typography
        variant="lead"
        className=" w-full lg:w-1/2 !text-gray-500  mb-10"
      >
        From innovative startups to Fortune 500 companies, our client list spans a spectrum of
        sectors, each with unique challenges that we've successfully navigated.
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-2"> {/* Add padding to create a gap */}
            <Card shadow={true} className="w-full h-full">
              <CardBody className="pb-0 h-full">
                <div className="flex gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-[50px] h-[50px] object-cover object-center rounded-full mb-4" />
                  <div>
                    <Typography className="mb-2" color="blue-gray" variant="h5">
                      {testimonial.name}
                    </Typography>
                    <div className="flex mb-2">
                      {renderRating(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <Typography variant="p" className="mb-4">
                  {testimonial.feedback}
                </Typography>
                <Button variant="danger" className="flex-shrink-0 mb-4" href={"/"}>
                  Explore
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
