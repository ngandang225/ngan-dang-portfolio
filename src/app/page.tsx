'use client';

import * as React from 'react';
import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/AboutMe';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/Services';
import Testimonial from '@/components/home/Testimonial';
import Pricing from '@/components/home/Pricing';
import Partner from '@/components/home/Partner';
import Blog from '@/components/home/Blog';
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
  const { isSubContactOpen, updateIsSubContactOpen } = useContext(AppContext);

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
  return (
    <div>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Services />
      <Testimonial />
      <Pricing />
      <Partner />
      <Blog />
      <Contact />
      {isSubContactOpen && (
        <OutsideClickHandler onOutsideClick={() => updateIsSubContactOpen(false)}>
          <SubContact />
        </OutsideClickHandler>
      )}
      <div className="fixed bottom-12 right-12 w-12 h-12">
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
