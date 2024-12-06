'use client';

import { pricingList } from '@/constants/pricingList';
import HeadingWithLine from '../heading-with-line/HeadingWithLine';
import Image from 'next/image';
import * as React from 'react';

type PricingItemProps = {
  name: string;
  price: number;
  description: Array<string>;
};
function PricingItem(props: PricingItemProps) {
  const { name, price, description } = props;
  const [imageSrc, setImageSrc] = React.useState<string>('/assets/images/home/arrow-black.svg');

  const handleMouseEnter = () => {
    setImageSrc('/assets/images/home/arrow-white.svg');
  };

  const handleMouseLeave = () => {
    setImageSrc('/assets/images/home/arrow-black.svg');
  };
  return (
    <div
      className="p-12 border border-[#0f0e0e1a] item-wrapper hover:bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="font-bold hover-white-text">{name}</h3>
      <p className="font-bold mt-3 mb-1 hover-white-text">
        <span className="text-5xl">${price}</span> / Per Hours
      </p>
      <p className="text-light-gray hover-white-text">Or $199 Yearly</p>
      <div className="flex justify-between items-center my-6">
        <button className="py-[9px] w-[120px] bg-black text-white font-bold hover-white-bg">
          Includes
        </button>
        <Image alt="arrow" width={116} height={19} src={imageSrc} className="object-contain mb-3" />
      </div>
      <ul className="text-light-gray hover-white-text">
        {description.map((item, index) => (
          <li key={index} className="mb-4 flex items-center gap-2">
            <span className="w-[7px] h-[7px] bg-[#0f0e0e1a] rounded-full hover-white-bg"></span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <button className="py-[9px] w-full border border-black font-bold mt-6 hover-white-text hover-orange-bg">
        Pick This Package
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-28 bg-[#f3f3f3]">
      <div className="container relative">
        <HeadingWithLine text="Pricing" />
        <Image
          alt="shape-black"
          width={129}
          height={148}
          src="/assets/images/home/shape-black.svg"
          className="object-cover z-1 absolute right-0 top-0 rotate-180 -scale-x-100 -mr-16"
        />
        <div className="grid grid-cols-3 gap-12 mt-24">
          {pricingList.map((item, index) => (
            <PricingItem
              name={item.name}
              price={item.price}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
