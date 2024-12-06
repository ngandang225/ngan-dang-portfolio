import AppContext from '@/contexts/appContext';
import { useContext } from 'react';
import { FaFacebookF, FaRegEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function SubContact() {
  const { isSubContactOpen } = useContext(AppContext);

  return (
    <div
      className={`fixed top-0 right-0 bg-[#f3f3f3] p-6 pt-20 z-50 w-[22%] h-screen ${isSubContactOpen ? 'sub-contact-animation' : 'sub-contact-animation-hide'}`}
    >
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
        <p className="mt-1">+84 0332 197 131</p>
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

      <div className="w-full p-2 mt-8 bg-orange-500 text-white rounded flex justify-center items-center">
        <Link href="#" className="">
          Let&apos;s Talk <span className="text-xl">&#8599;</span>
        </Link>
      </div>
    </div>
  );
}
