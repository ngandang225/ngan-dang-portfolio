import AppContext from '@/contexts/appContext';
import { sendEmail } from '@/utils/sendEmail';
import { validatePayload } from '@/utils/validatePayload';
import { Alert, CircularProgress, IconButton, Snackbar } from '@mui/material';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { FaFacebookF, FaRegEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";

export default function Contact() {
  const { updateActiveNav } = useContext(AppContext);
  const [alert, setAlert] = useState({
    success: false,
    open: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const payloadError = validatePayload(contactForm);
    if (payloadError) {
      setAlert({ open: true, message: payloadError, success: false });
      setLoading(false);
      return;
    }
    const res = await sendEmail(contactForm);
    setAlert({ open: true, message: res.message, success: res.success });
    setLoading(false);
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
              <div className='flex gap-5 mt-12 items-center flex-col lg:flex-row'>
                <button className={`text-white bg-orange-500 hover:bg-opacity-90 px-9 py-4 font-bold w-full lg:w-fit ${loading ? 'pointer-events-none opacity-70' : ''}`}>
                  Let’s Talk
                  {loading ? (
                    <CircularProgress color="inherit" size="16px" className='ml-2' />
                  ) : (
                    <span className="text-xl">&#8599;</span>
                  )}
                </button>
                <Snackbar
                  open={alert.open}
                  autoHideDuration={3000} // Auto-close after 3 seconds
                  onClose={() => setAlert({ open: false, message: '', success: false })}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // You can change position here
                  className='w-full lg:flex-1'
                >
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setAlert({ open: false, message: '', success: false });
                        }}
                      >
                        <IoIosClose size={20} />
                      </IconButton>
                    }
                    severity={alert.success ? 'success' : 'error'}
                    sx={{ mr: { xs: 2, lg: 0 }, mt: { xs: '80px', lg: '88px' } }}
                  >
                    {alert.message}
                  </Alert>
                </Snackbar>
              </div>
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
