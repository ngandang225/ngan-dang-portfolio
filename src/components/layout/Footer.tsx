import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#151515] py-7">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-white text-3xl font-bold h-full flex items-center">
          P<span className="text-orange-500">e</span>
          rtest
        </Link>
        <p className="text-[#ffffffb3]">
          © 2024 <span className="text-white">Pertest</span> - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
