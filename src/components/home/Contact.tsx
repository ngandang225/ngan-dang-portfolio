import AppContext from '@/contexts/appContext';
import { sendEmail } from '@/utils/sendEmail';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaFacebookF, FaRegEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const { updateActiveNav } = useContext(AppContext);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendEmail(contactForm);
    alert(res.message);
  }

  return (
    <section className="pt-14 lg:pt-40 bg-black" id="contact">
      <div className="scroll-container">
        <h2 className="text-5xl font-bold contact-scroll-text">
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
          <span>
            <span className="white-border-text"> dang.thanhngan225@gmail.com _ </span>
            <span className="text-white"> (+84) 837 884 986 _ </span>
          </span>
        </h2>
      </div>
      <div className="container py-24 px-4">
        <div className="grid grid-cols-2">
          <div className="lg:px-3 col-span-2 lg:col-span-1">
            <h2 className="text-white text-4xl lg:text-8xl font-bold">Let’s Contact!</h2>
            <p className="text-light-gray mt-5 mb-9">
              I am always open to discussing new projects, creative ideas, or opportunities to be a
              part of your vision. Feel free to reach out through.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 text-white gap-6">
                <div className="flex flex-col gap-3">
                  <label className="font-bold" htmlFor='firstName'>
                    First Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    onChange={handleChange}
                    className="border-b border-[#ffffff33] py-1 bg-transparent outline-0 focus:border-white"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold" htmlFor='lastName'>
                    Last Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name='lastName'
                    id='lastName'
                    required
                    onChange={handleChange}
                    className="border-b border-[#ffffff33] py-1 bg-transparent outline-0 focus:border-white"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold" htmlFor='email'>
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name='email'
                    id='email'
                    required
                    onChange={handleChange}
                    className="border-b border-[#ffffff33] py-1 bg-transparent outline-0 focus:border-white"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="font-bold" htmlFor='phoneNumber'>
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name='phoneNumber'
                    id='phoneNumber'
                    required
                    onChange={handleChange}
                    className="border-b border-[#ffffff33] py-1 bg-transparent outline-0 focus:border-white"
                  />
                </div>
                <div className="col-span-2">
                  <div className="flex flex-col gap-3">
                    <label className="font-bold" htmlFor='message'>
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      placeholder="Write your message..."
                      name='message'
                      id='message'
                      required
                      onChange={handleChange}
                      className="border-b border-[#ffffff33] py-1 bg-transparent outline-0 focus:border-white"
                    />
                  </div>
                </div>
              </div>
              <button className="text-white bg-orange-500 hover:bg-opacity-90 px-9 py-4 font-bold mt-12 w-full lg:w-fit">
                Let’s Talk <span className="text-xl">&#8599;</span>
              </button>
            </form>
          </div>
          <div className="lg:ml-28 flex flex-col justify-center col-span-2 lg:col-span-1">
            <Link
              href="/"
              onClick={() => updateActiveNav('hero')}
              className="text-[#ffffff33] hover:text-white text-3xl flex justify-between border-b py-6 font-bold border-[#ffffff33]"
            >
              <span>Home</span>
              <span>01</span>
            </Link>
            <Link
              href="#about-me"
              onClick={() => updateActiveNav('about-me')}
              className="text-[#ffffff33] hover:text-white text-3xl flex justify-between border-b py-6 font-bold border-[#ffffff33]"
            >
              <span>About Me</span>
              <span>02</span>
            </Link>
            <Link
              href="#experience"
              onClick={() => updateActiveNav('experience')}
              className="text-[#ffffff33] hover:text-white text-3xl flex justify-between border-b py-6 font-bold border-[#ffffff33]"
            >
              <span>Experience</span>
              <span>03</span>
            </Link>
            <Link
              href="#skills"
              onClick={() => updateActiveNav('skills')}
              className="text-[#ffffff33] hover:text-white text-3xl flex justify-between border-b py-6 font-bold border-[#ffffff33]"
            >
              <span>Skills</span>
              <span>04</span>
            </Link>
            <Link
              href="#testimonial"
              onClick={() => updateActiveNav('testimonial')}
              className="text-[#ffffff33] hover:text-white text-3xl flex justify-between border-b py-6 font-bold border-[#ffffff33]"
            >
              <span>Testimonial</span>
              <span>05</span>
            </Link>
            <Link
              href="#contact"
              onClick={() => updateActiveNav('contact')}
              className="text-[#ffffff33] hover:text-white text-3xl flex justify-between border-b py-6 font-bold border-[#ffffff33]"
            >
              <span>Contact</span>
              <span>06</span>
            </Link>
            <ul className="flex gap-8 mt-12 w-fit mx-auto lg:ml-0">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/dangthanhngan225/"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full border border-[#ffffff33] text-white hover:text-black hover:bg-white"
                >
                  <FaFacebookF size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dangthithanhngan/"
                  target="_blank"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full border border-[#ffffff33] text-white hover:text-black hover:bg-white"
                >
                  <FaLinkedinIn size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ngandang225"
                  target="_blank"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full border border-[#ffffff33] text-white hover:text-black hover:bg-white"
                >
                  <FaGithub size={22} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:dang.thanhngan225@gmail.com"
                  target="_blank"
                  className="w-[60px] aspect-square flex justify-center items-center rounded-full border border-[#ffffff33] text-white hover:text-black hover:bg-white"
                >
                  <FaRegEnvelope size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
