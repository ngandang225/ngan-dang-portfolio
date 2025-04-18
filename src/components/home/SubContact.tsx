import AppContext from '@/contexts/appContext';
import { useContext } from 'react';
import { FaFacebookF, FaRegEnvelope, FaGithub, FaLinkedinIn,  } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import Link from 'next/link';

type SubContactProps = {
  closeSubContact: () => void;
};

export default function SubContact(props: SubContactProps) {
  const { closeSubContact } = props;
  const { isSubContactOpen, updateActiveNav, activeNav } = useContext(AppContext);

  const isHomeActive = activeNav === 'hero';
  const isAboutMeActive = activeNav === 'about-me';
  const isExperienceActive = activeNav === 'experience';
  const isSkillsActive = activeNav === 'skills';
  const isTestimonialActive = activeNav === 'testimonial';
  // const isBlogActive = activeNav === 'blog';
  const isContactActive = activeNav === 'contact';

  const handleClick = (activeNav: string) => {
    updateActiveNav(activeNav);
    closeSubContact();
  }

  return (
    <div
      className={`fixed top-0 right-0 bg-[#f3f3f3] p-6 pt-12 lg:pt-20 z-50 w-5/6 sm:w-3/5 md:w-1/3 xl:w-[25%] h-screen ${isSubContactOpen ? 'sub-contact-animation' : 'sub-contact-animation-hide'}`}
    >
      <IoIosClose className='absolute top-2 right-2 cursor-pointer rounded-full hover:bg-gray-200' size={32} onClick={closeSubContact} />
      <div className='hidden lg:block'>
        <p className="text-2xl font-bold mb-5">
          <span className="text-orange-500">D</span>ang <span className="text-orange-500">T</span>hi{' '}
          <span className="text-orange-500">T</span>hanh <span className="text-orange-500">N</span>gan
        </p>
        <p className="text-sm text-justify">
          With a high enthusiasm in software development, I am looking for a software engineer
          position where I can apply my knowledge to create attractive interfaces and userfriendly
          application.
        </p>

        <div className="mt-12">
          <p className="uppercase text-orange-500 font-bold text-sm">Address</p>
          <p className="mt-1">Binh Thanh, Ho Chi Minh</p>
        </div>

        <div className="mt-6">
          <p className="uppercase text-orange-500 font-bold text-sm">Email</p>
          <p className="mt-1">dang.thanhngan225@gmail.com</p>
        </div>

        <div className="mt-6">
          <p className="uppercase text-orange-500 font-bold text-sm">Call now</p>
          <p className="mt-1">+84 837 884 986</p>
        </div>

        <ul className="flex gap-4 mt-10">
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/dangthanhngan225/"
              className="w-[45px] aspect-square flex justify-center items-center rounded-full border bg-orange-500 text-white hover:text-black hover:bg-white"
            >
              <FaFacebookF size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dangthithanhngan/"
              target="_blank"
              className="w-[45px] aspect-square flex justify-center items-center rounded-full border bg-orange-500 text-white hover:text-black hover:bg-white"
            >
              <FaLinkedinIn size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ngandang225"
              target="_blank"
              className="w-[45px] aspect-square flex justify-center items-center rounded-full border bg-orange-500 text-white hover:text-black hover:bg-white"
            >
              <FaGithub size={22} />
            </a>
          </li>
          <li>
            <a
              href="mailto:dang.thanhngan225@gmail.com"
              target="_blank"
              className="w-[45px] aspect-square flex justify-center items-center rounded-full border bg-orange-500 text-white hover:text-black hover:bg-white"
            >
              <FaRegEnvelope size={22} />
            </a>
          </li>
        </ul>

        <div className="w-full p-2 mt-8 bg-black hover:bg-orange-500 cursor-pointer text-white rounded flex justify-center items-center">
          <Link href={'#contact'} onClick={() => handleClick('contact')}>
            Let&apos;s Talk <span className="text-xl">&#8599;</span>
          </Link>
        </div>
      </div>
      <div className='lg:hidden'>
        <ul className="justify-center items-start h-full font-bold flex flex-col">
          <li className="p-4 py-5 home relative w-full border-b border-orange-200">
            <Link
              href={'/'}
              onClick={() => handleClick('hero')}
              className={`cursor-pointer font-bold ${
                isHomeActive ? 'nav-link-text-active' : 'nav-link-text-inactive'
              } `}
            >
              Home
            </Link>
          </li>
          <li className="p-4 py-5 w-full border-b border-orange-200">
            <Link
              href={'#about-me'}
              onClick={() => handleClick('about-me')}
              className={`font-bold ${isAboutMeActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
            >
              About Me
            </Link>
          </li>
          <li className="p-4 py-5 w-full border-b border-orange-200">
            <Link
              href={'#experience'}
              onClick={() => handleClick('experience')}
              className={`font-bold ${isExperienceActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
            >
              Experience
            </Link>
          </li>
          <li className="p-4 py-5 w-full border-b border-orange-200">
            <Link
              href={'#skills'}
              onClick={() => handleClick('skills')}
              className={`font-bold ${isSkillsActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
            >
              Skills
            </Link>
          </li>
          <li className="p-4 py-5 w-full border-b border-orange-200">
            <Link
              href={'#testimonial'}
              onClick={() => handleClick('testimonial')}
              className={`font-bold ${isTestimonialActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
            >
              Testimonial
            </Link>
          </li>
          <li className="p-4 py-5 w-full border-b border-orange-200">
            <Link
              href={'#contact'}
              onClick={() => handleClick('contact')}
              className={`font-bold ${isContactActive ? 'nav-link-text-active' : 'nav-link-text-inactive'} `}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
