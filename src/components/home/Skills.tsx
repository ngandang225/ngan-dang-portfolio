'use client';

import * as React from 'react';
import HeadingWithLine from '../heading-with-line/HeadingWithLine';
import { servicesList } from '@/constants/servicesList';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CircularButton from '../circular-button/CircularButton';
import Image from 'next/image';

export default function Skills() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="pt-28" id="skills">
      <div className="container relative">
        <HeadingWithLine text="My Skills" />
        <Image
          alt="shape-black"
          width={129}
          height={148}
          src="/assets/images/home/shape-black.svg"
          className="object-contain z-1 absolute right-0 top-0 rotate-180 -scale-x-100 -mr-16"
        />
        <div className="my-12">
          {servicesList.map((item, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              sx={{ paddingBottom: '0.8rem', paddingTop: '1.2rem', boxShadow: 'none' }}
            >
              <AccordionSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="relative"
              >
                <p className="text-8xl font-bold">{item.summary}</p>
                {expanded === `panel${index}` ? (
                  <div className="absolute right-0">
                    <CircularButton text="View" position="" />
                  </div>
                ) : null}
              </AccordionSummary>
              <AccordionDetails className="-mt-4">
                {item.content.map((subItem, subIndex) => (
                  <p key={subIndex} className="text-2xl mt-4">
                    + {subItem}
                  </p>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        <CircularButton text="View All" position="mx-auto" />
      </div>
    </section>
  );
}
