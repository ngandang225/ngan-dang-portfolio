import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaRegEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { logoList } from '@/constants/logoList';
import { useContext } from 'react';
import AppContext from '@/contexts/appContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useWindowWidth } from '@react-hook/window-size';

type LogoItemProps = {
  src: string;
  name: string;
  percentage: number;
};
function LogoItem(props: LogoItemProps) {
  const { src, name, percentage } = props;
  return (
    <div className="px-7 py-6 mx-20 sm:mx-3 rounded-2xl border">
      <div className="p-10 bg-gray-100 rounded-full flex items-center justify-center">
        <Image
          alt={name}
          width={60}
          height={60}
          src={src}
          className="object-contain max-w-16 max-h-16 aspect-square"
        />
      </div>
      <p className="text-center mt-12 font-bold text-2xl">{name}</p>
      {/* <p className="text-center uppercase text-gray-600 mt-1 mb-12">{name}</p> */}
    </div>
  );
}

export default function Hero() {
  const screenWidth = useWindowWidth();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: screenWidth > 1500 ? 7 : screenWidth > 1200 ? 5 : screenWidth > 640 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const { updateActiveNav } = useContext(AppContext);
  
  return (
    <section className="pt-20 mt-[103px] p-3 relative" id="hero">
      <div className="container">
        <div className="bg-line"></div>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 text-xl font-bold">
              <p>Hi there!</p>
              <Image
                alt="hi-icon"
                width={20}
                height={20}
                src="https://creativemela.com/themeforest_html/pertest_html_with_product/images/hero/hi.svg"
              />
              <p>I&apos;m</p>
            </div>
            <h1 className="text-[92px] mt-2 font-bold">Dang Thi Thanh Ngan</h1>
          </div>
          <div className="relative w-fit h-fit flex justify-center items-center">
            <Image
              className="contact-me-rotate"
              alt="contact-me"
              width={128}
              height={128}
              src="/assets/images/home/contact-me-txt.svg"
            />
            <Link href="#" className="absolute">
              <Image
                alt="arrow"
                width={74}
                height={74}
                src="/assets/images/home/contact-me-arrow.svg"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-6 text-xl font-bold mt-6 mb-12 text-gray-600">
            I believe collaboration and innovation are key to progress. I am dedicated to delivering
            fresh ideas and effective solutions in every project I undertake.
          </div>
          <div className="col-span-2"></div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8 font-semibold flex gap-4 z-[1] relative">
            <Link href="#contact" className="px-8 py-4 bg-black text-white rounded-full" onClick={() => updateActiveNav('contact')}>
              Let&apos;s Talk <span className="text-xl">&#8599;</span>
            </Link>
            <Link
              href="#"
              className="px-8 py-4 bg-white text-black border border-black rounded-full"
            >
              Download CV <span className="text-xl">&#8599;</span>
            </Link>
            <Image alt="arrow" width={133} height={20} src="/assets/images/home/lg-arrow.svg" />
            <ul className="flex gap-4">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/dangthanhngan225/"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full bg-gray-100"
                >
                  <FaFacebookF size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dangthithanhngan/"
                  target="_blank"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full bg-gray-100"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ngandang225"
                  target="_blank"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full bg-gray-100"
                >
                  <FaGithub size={22} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:dang.thanhngan225@gmail.com"
                  target="_blank"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full bg-gray-100"
                >
                  <FaRegEnvelope size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 relative z-0">
          <div className="col-span-4"></div>
          <span className="col-span-8 absolute -right-20 left-1/3 text-[65px] leading-[1.25] font-bold profession text-white">
            SOFTWARE DEVELOPER
          </span>
        </div>
        <div className="absolute -left-[220px] top-52">
          <Image
            alt="arrow"
            width={652}
            height={594}
            src="/assets/images/home/profile-pic.png"
            className="relative bottom-0 right-0"
          />
        </div>
      </div>
      <div className="slider-container mt-96">
        <Slider {...settings}>
        {logoList.map((item, index) => (
          <LogoItem key={index} src={item.src} name={item.name} percentage={item.percentage} />
        ))}
        </Slider>
      </div>
    </section>
  );
}
