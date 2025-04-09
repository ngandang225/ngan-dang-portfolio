import Image from 'next/image';
import CircularButton from '../circular-button/CircularButton';
import HeadingWithLine from '../heading-with-line/HeadingWithLine';

export default function AboutMe() {
  return (
    <section className="pt-28" id="about-me">
      <div className="container px-4">
        <HeadingWithLine text="About Me" />
        <p className="font-bold text-2xl lg:text-5xl mt-12 mb-10 leading-tight">
          I am a Software Developer with 2 years of experience in{' '}
          <span className="text-orange-500">Web Development</span>, tackling challenges and
          delivering effective, high-quality solutions for diverse projects.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
          <div className="flex flex-col justify-between">
            <div className="px-[20%] py-[5%] relative">
              <Image
                alt="arrow"
                width={45}
                height={347}
                src="/assets/images/home/arrow.svg"
                className="absolute left-0 top-0"
              />
              <p className="text-[200px] leading-tight font-bold">2+</p>
              <p className="text-3xl font-bold leading-tight">
                Years
                <br />
                Experience
              </p>
              <Image
                alt="shape-black"
                width={129}
                height={148}
                src="/assets/images/home/shape-black.svg"
                className="absolute right-0 lg:right-12 -bottom-8"
              />
            </div>
            <CircularButton text="About Me" position="ml-[20%]" hideInMobile={true} />
          </div>
          <Image
            alt="profile-pic(1)"
            width={650}
            height={650}
            src="/assets/images/home/profile-pic(1).jpg"
            className="w-full object-cover lg:px-3"
          />
        </div>
      </div>
    </section>
  );
}
