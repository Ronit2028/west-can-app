"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@material-tailwind/react';

const Header = ({ title, description, image }) => {
  return (
    <div className='w-full px-2'>
      <div className=' w-full rounded-md h-[50vh] mx-auto overflow-hidden' style={{backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundPosition:"center center"}}>
      <div className="rounded-md bg-black/50 flex flex-col justify-end p-10 text-white w-full h-full">
        <p className="text-2xl lg:text-4xl font-semibold mb-4">
          {title}
        </p>
        <p className="text-md lg:text-xl w-full lg:w-1/3">
          {description}
        </p>
        <button className='bg-[#b02027] text-white text-lg lg:text-xl w-fit px-4 py-2 rounded-md mt-4'> Know More</button>
      </div>
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
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <Header
          title="Find Parts That Fit Your Vehicle"
          description="Discover a world of automotive excellence with our unbeatable parts selection."
          image="https://img.freepik.com/free-photo/different-car-accessories-arrangement_23-2149030406.jpg?t=st=1720630950~exp=1720634550~hmac=260aed20007e545745e36364bb591df2d846fa5ff7b84a714cd617de4730079b&w=2000"
        />
        <Header
          title="Quality Parts for Your Car"
          description="Browse our extensive catalog to find the perfect fit for your car."
          image="https://img.freepik.com/free-photo/female-mechanic-fixing-gear_1170-1422.jpg?t=st=1720631038~exp=1720634638~hmac=f16418da68cff157f77ba91e00edefd65fb1c3f0a35fc77f1790bee592d0a9ed&w=2000"
        />
        <Header
          title="Affordable Prices"
          description="Get the best deals on high-quality car parts."
          image="https://img.freepik.com/free-photo/white-sedan-driving-highway-accross-forest_114579-4392.jpg?t=st=1720630820~exp=1720634420~hmac=11c3ac5dae57d135a5b9dbe37a0882ce855ede428293c614d8571c7af75621e5&w=2000"
        />
      </Slider>
    </div>
  );
};

export default Carousel;
