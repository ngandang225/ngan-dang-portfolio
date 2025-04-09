'use client';

import * as React from 'react';
import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/AboutMe';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Testimonial from '@/components/home/Testimonial';
import Contact from '@/components/home/Contact';
import SubContact from '@/components/home/SubContact';
import { FaArrowUpLong } from 'react-icons/fa6';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { useContext } from 'react';
import AppContext from '@/contexts/appContext';

export default function Home() {
  const [percentage, setPercentage] = React.useState<number>(0);
  const { isSubContactOpen, updateIsSubContactOpen, updateActiveNav } = useContext(AppContext);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.clientHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Calculate percentage
      const scrollableHeight = fullHeight - windowHeight;
      const scrolledPercentage = (scrollTop / scrollableHeight) * 100;

      setPercentage(Math.min(Math.max(scrolledPercentage, 0), 100)); // Clamp to [0, 100]
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateActiveNav('hero');
  }

  return (
    <div>
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Testimonial />
      {/* <Pricing /> */}
      {/* <Partner /> */}
      {/* <Blog /> */}
      <Contact />
      {isSubContactOpen && (
        <OutsideClickHandler onOutsideClick={() => updateIsSubContactOpen(false)}>
          <SubContact closeSubContact={() => updateIsSubContactOpen(false)} />
        </OutsideClickHandler>
      )}
      <div className="fixed bottom-3 lg:bottom-12 right-3 lg:right-12 w-12 h-12 cursor-pointer z-40" onClick={handleClickScrollToTop}>
        <CircularProgressbarWithChildren
          value={percentage}
          strokeWidth={4}
          styles={{
            path: {
              stroke: '#f97316',
            },
            trail: {
              stroke: '#ffe1cc',
            },
          }}
        >
          <FaArrowUpLong className="text-orange-500" />
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}
