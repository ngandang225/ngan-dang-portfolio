'use client';
import AppContext from '@/contexts/appContext';
import Link from 'next/link';
import { useContext } from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

const Navbar = () => {
  const { activeNav, updateActiveNav, updateIsSubContactOpen } = useContext(AppContext);
  
  const isHomeActive = activeNav === 'hero';
  const isAboutMeActive = activeNav === 'about-me';
  const isExperienceActive = activeNav === 'experience';
  const isSkillsActive = activeNav === 'skills';
  const isTestimonialActive = activeNav === 'testimonial';
  // const isBlogActive = activeNav === 'blog';
  const isContactActive = activeNav === 'contact';

  return (
    <header className="h-20 lg:h-[88px] fixed bg-white z-50 w-screen">
      {/* Desktop Navbar */}
      <div className="max-w-[1560px] h-full mx-auto">
        <div className="flex items-center h-full justify-between font-[500] mx-auto border-b">
          <Link href="/" className="text-3xl font-bold px-4 lg:px-10 h-full flex items-center lg:border-r">
            P<span className="text-orange-500">o</span>
            rtfolio
          </Link>
          <ul className="gap-4 justify-start items-center h-full font-bold hidden lg:flex">
            <li className="p-4 home relative">
              <Link
                href={'/'}
                onClick={() => updateActiveNav('hero')}
                className={`cursor-pointer font-bold ${
                  isHomeActive ? 'nav-link-text-active' : 'nav-link-text-inactive'
                } `}
              >
                Home
              </Link>
              {/* <div className="hover-home absolute w-[250px] z-50 bg-white top-full left-0 shadow-lg text-black text-sm">
                <ul className="p-1">
                  <li className="p-3 hover:pl-6 hover:text-orange-500 border-b">
                    <Link href={'#'} className="w-full block font-bold">
                      Home One
                    </Link>
                  </li>
                  <li className="p-3 hover:pl-6 hover:text-orange-500">
                    <Link href={'#'} className="w-full block font-bold">
                      Home Two
                    </Link>
                  </li>
                </ul>
              </div> */}
            </li>
            <li className="p-4">
              <Link
                href={'#about-me'}
                onClick={() => updateActiveNav('about-me')}
                className={`font-bold ${isAboutMeActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
              >
                About Me
              </Link>
            </li>
            <li className="p-4">
              <Link
                href={'#experience'}
                onClick={() => updateActiveNav('experience')}
                className={`font-bold ${isExperienceActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
              >
                Experience
              </Link>
            </li>
            <li className="p-4">
              <Link
                href={'#skills'}
                onClick={() => updateActiveNav('skills')}
                className={`font-bold ${isSkillsActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
              >
                Skills
              </Link>
            </li>
            <li className="p-4">
              <Link
                href={'#testimonial'}
                onClick={() => updateActiveNav('testimonial')}
                className={`font-bold ${isTestimonialActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
              >
                Testimonial
              </Link>
            </li>
            {/* <li className="p-4">
              <Link
                href={'#blog'}
                onClick={() => updateActiveNav('blog')}
                className={`font-bold ${isBlogActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
              >
                Blog
              </Link>
            </li> */}
            <li className="p-4">
              <Link
                href={'#contact'}
                onClick={() => updateActiveNav('contact')}
                className={`font-bold ${isContactActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="h-full flex items-center gap-4 border-l">
            {/* <Link href="#" className="font-bold px-12 hover:text-orange-500">
              Let&apos;s Talk <span className="text-lg">&#8599;</span>
            </Link> */}
            <button className="px-9 h-full bg-black" onClick={() => updateIsSubContactOpen(true)}>
              <RiMenu5Fill size={28} color="white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
