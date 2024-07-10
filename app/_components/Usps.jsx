import React from 'react';
import { TruckIcon, CubeIcon, ShieldCheckIcon, BuildingStorefrontIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Speed and Efficiency',
    description: 'Because our stores and warehouses are strategically located, our products are delivered in less than 45 minutes.',
    icon: TruckIcon,
  },
  {
    name: 'Wide Selection',
    description: 'Our Canadian distribution network provides access to more than two million products.',
    icon: CubeIcon,
  },
  {
    name: 'Unparalleled Quality',
    description: 'We source products from the original equipment market (OEM) and from 330 suppliers across Canada.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'From the Manufacturer to the Customer',
    description: '11 Locations, 200,000 square feet of space serving 1,000 repair centers.',
    icon: BuildingStorefrontIcon,
  },
];

export default function Usps() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="w-full">
              <h2 className="text-base font-semibold leading-7 text-[#b02027]">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">West Can Auto Parts</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                West Can Auto Parts is the leading Canada auto parts distributor & wholesaler. It is a reputable and well-established auto parts supplier serving customers in the western region of Canada. With a rich history spanning several decades, the company has built a strong reputation for its commitment to providing high-quality automotive parts and excellent customer service.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-[#b02027]" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://img.freepik.com/free-photo/female-mechanic-servicing-car_1170-1233.jpg?t=st=1720631877~exp=1720635477~hmac=8666926305d147dcebcfc540c27aefba6412602bfbf65a3105980fe6f205a6b8&w=2000"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
