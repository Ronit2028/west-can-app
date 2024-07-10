"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = ({ title, description }) => {
  return (
    <div className='px-2 w-full rounded-md h-[50vh] mx-auto overflow-hidden'>
      <div className="rounded-md bg-black/25 flex flex-col justify-end p-10 text-white w-full h-full">
        <p className="text-4xl font-semibold mb-4">
          {title}
        </p>
        <p className="text-xl w-full lg:w-1/3">
          {description}
        </p>
      </div>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "8%",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <Header
          title="Find Parts That Fit Your Vehicle"
          description="Discover a world of automotive excellence with our unbeatable parts selection."
        />
        <Header
          title="Quality Parts for Your Car"
          description="Browse our extensive catalog to find the perfect fit for your car."
        />
        <Header
          title="Affordable Prices"
          description="Get the best deals on high-quality car parts."
        />
      </Slider>
    </div>
  );
};

export default Carousel;
