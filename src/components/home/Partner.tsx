import Image from 'next/image';

export default function Partner() {
  const partnerLogos = [
    'brand-1.png',
    'brand-2.png',
    'brand-3.png',
    'brand-4.png',
    'brand-1.png',
    'brand-2.png',
    'brand-3.png',
    'brand-4.png',
  ];
  return (
    <div className="mt-40">
      <div className="container">
        <div className="flex justify-center items-center gap-5 mb-14">
          <span className="w-16 bg-gray-300 h-[1px]"></span>
          <p className="font-bold">More Than 200+ companies trusted Worldwide</p>
          <span className="w-16 bg-gray-300 h-[1px]"></span>
        </div>
        <div className="flex gap-32">
          {partnerLogos.map((item, index) => (
            <Image
              key={index}
              alt={item}
              width={140}
              height={58}
              src={`/assets/images/home/partners/${item}`}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
