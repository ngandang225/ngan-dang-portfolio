'use client';
import * as React from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

export default function Testimonial() {
  const [imageList, setImageList] = React.useState<number[]>([1, 2, 3]);

  const handleToLeft = () => {
    const newImageList = [...imageList];
    const firstItem = newImageList.shift();
    if (firstItem !== undefined) {
      newImageList.push(firstItem);
    }
    setImageList(newImageList);
  };

  const handleToRight = () => {
    const newImageList = [...imageList];
    const lastItem = newImageList.pop();
    if (lastItem !== undefined) {
      newImageList.unshift(lastItem);
    }
    setImageList(newImageList);
  };
  return (
    <div className="py-20" id="testimonial">
      <div className="container px-4">
        <span className="text-5xl lg:text-[160px] leading-[1.25] font-bold testimonial-heading text-white">
          Testimonial
        </span>
        <Image
          alt="quate"
          width={104}
          height={76}
          src="/assets/images/home/testimonial/quate.png"
          className="mt-4 lg:-mt-4"
        />
        <div className="grid grid-cols-12 mt-10">
          <div className="col-span-12 lg:col-span-7 lg:pr-10 flex flex-col justify-between">
            <p className="text-2xl font-bold">
              I had an amazing experience working with Ngan on a website project. She consistently strives to follow best practices in web development and actively contributes to creating a positive and enjoyable work environment.
            </p>
            <div>
              <div className="grid grid-cols-12">
                <div className="col-span-3 lg:col-span-5">
                  <Image
                    alt="style"
                    width={140}
                    height={129}
                    src="/assets/images/home/style.svg"
                    className="object-cover scale-75 mx-auto"
                  />
                </div>
                <div className="col-span-9 lg:col-span-7 flex gap-4 lg:gap-10">
                  <Image
                    alt="image"
                    width={196}
                    height={274}
                    src={`/assets/images/home/testimonial/image${imageList[0]}.jpg`}
                    className="mt-4 lg:-mt-4 object-cover testimonial-sub-image"
                  />
                  <Image
                    alt="image"
                    width={196}
                    height={274}
                    src={`/assets/images/home/testimonial/image${imageList[1]}.jpg`}
                    className="mt-4 lg:-mt-4 object-cover testimonial-sub-image"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 my-4 lg:mt-14 lg:mb-0">
                <div className="col-span-5">
                  <Image
                    alt="arrow"
                    width={236}
                    height={45}
                    src="/assets/images/home/lg-arrow.svg"
                  />
                </div>
                <div className="col-span-7 flex gap-4 justify-end lg:justify-start">
                  <button
                    onClick={handleToLeft}
                    className="text-white bg-black p-4 rounded-full hover:bg-white border border-black hover:border-orange-500 hover:text-black"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleToRight}
                    className="text-white bg-black p-4 rounded-full hover:bg-white border border-black hover:border-orange-500 hover:text-black"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt="image"
            width={526}
            height={673}
            src={`/assets/images/home/testimonial/image${imageList[2]}.jpg`}
            className="col-span-12 lg:col-span-5 object-cover lg:px-4"
          />
        </div>
      </div>
      {/* <div className="scroll-container mt-28">
        <h2 className="text-6xl font-bold scroll-text">
          <span>
            <span className="border-text">User Interface _ </span>
            <span>Branding _ Marketing </span>
            <span className="border-text">User Experience _ </span>
          </span>
          <span>
            <span>User Interface _ </span>
            <span className="border-text">Branding _ Marketing </span>
            <span>User Experience _ </span>
          </span>
          <span>
            <span className="border-text">User Interface _ </span>
            <span>Branding _ Marketing </span>
            <span className="border-text">User Experience</span>
          </span>
        </h2>
      </div> */}
    </div>
  );
}
