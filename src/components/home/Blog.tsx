'use client';

import * as React from 'react';
import HeadingWithLine from '../heading-with-line/HeadingWithLine';
import Image from 'next/image';
import { blogList } from '@/constants/blogList';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CircularButton from '../circular-button/CircularButton';

export default function Blog() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="py-40" id="blog">
      <div className="container relative">
        <HeadingWithLine text="Latest Blog" />
        <Image
          alt="shape-black"
          width={129}
          height={148}
          src="/assets/images/home/shape-black.svg"
          className="object-cover z-1 absolute right-0 top-0 rotate-180 -scale-x-100 -mr-16"
        />
        <div className="my-12">
          {blogList.map((item, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              sx={{
                boxShadow: 'none',
              }}
            >
              <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                <div className="flex justify-between items-center w-full py-8">
                  <h3
                    className={`text-3xl font-bold w-1/2 ${expanded === `panel${index}` ? 'underline' : ''}`}
                  >
                    {item.name}
                  </h3>
                  <div className="font-bold py-1 px-10 text-center border w-fit">
                    <span className="text-3xl">22/</span>
                    <br />
                    Dec
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails className="relative flex justify-center items-center mb-8">
                <Image
                  alt="hi-icon"
                  width={1196}
                  height={400}
                  src="/assets/images/home/blog-thumbnail.png"
                />
                <div className="absolute">
                  <CircularButton text="View" position="" />
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <CircularButton text="View All" position="mx-auto" />
      </div>
    </section>
  );
}
