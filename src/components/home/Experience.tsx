import CircularButton from '../circular-button/CircularButton';
import HeadingWithLine from '../heading-with-line/HeadingWithLine';
import { projectList } from '@/constants/projectList';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

export default function Experience() {
  const [activeProject, setActiveProject] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    sliderRef.current?.slickGoTo(0);
  }, [activeProject]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    className: "center",
    centerMode: screenWidth > 768 ? true : false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <section className="mt-36 py-36 bg-black" id="experience">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <HeadingWithLine text="My Experience" color="white" />
          <div className='w-full overflow-auto no-scrollbar'>
            <ul className="text-zinc-500 font-bold flex gap-6 lg:mt-0 justify-center lg:justify-end w-fit mx-auto lg:mr-0">
              {projectList.map((project, index) => (
                <li className={`relative hover:text-orange-500 border-black hover:border-orange-500 border-b-2 ${index===activeProject ? 'text-orange-500 border-orange-500' : ''}`} key={index} onClick={() => setActiveProject(index)}>
                  <button className='whitespace-nowrap'>{project.name}</button>
                  {index !== projectList.length - 1 && (
                    <span className="absolute mx-2 text-zinc-700">/</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            {projectList[activeProject].responsibilities.map((res, index) => (
              <div key={index} className='w-full h-full px-3 md:p-8 my-8 md:my-4 rounded-lg overflow-hidden relative'>
                <Image
                  alt={res.content}
                  width={2000}
                  height={2000}
                  src={res.image}
                  className="w-full h-full object-contain rounded-lg"
                />
                {!!res.content && (
                  <div className='md:absolute bottom-12 w-full left-0 right-0 flex justify-center'>
                    <span className='px-3 py-2 text-white md:w-1/2 bg-black bg-opacity-60 text-center rounded-lg overflow-hidden flex items-center justify-center'>
                      {res.content}
                    </span>
                  </div>
                )}
                {projectList[activeProject].image !== '' && (
                  <Image
                    alt={projectList[activeProject].company}
                    width={2000}
                    height={2000}
                    src={projectList[activeProject].image}
                    className="w-5 h-5 md:w-12 md:h-12 object-cover rounded-full absolute top-1 left-1 md:bottom-10 md:top-auto md:left-10"
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
        <CircularButton border={true} link={projectList[activeProject].link} text="View Site" position="mx-auto" />
      </div>
    </section>
  );
}
