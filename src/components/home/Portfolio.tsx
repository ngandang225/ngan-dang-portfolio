import Link from 'next/link';
import CircularButton from '../circular-button/CircularButton';
import HeadingWithLine from '../heading-with-line/HeadingWithLine';

export default function Portfolio() {
  return (
    <section className="mt-36 py-36 bg-black" id="portfolio">
      <div className="container">
        <div className="flex items-end justify-between">
          <HeadingWithLine text="Latest Project" color="white" />
          <ul className="text-zinc-500 font-bold flex gap-6">
            <li className="relative">
              <Link href="#">All Design</Link>
              <span className="absolute mx-2 text-zinc-700">/</span>
            </li>
            <li className="relative">
              <Link href="#">UI/UX</Link>
              <span className="absolute mx-2 text-zinc-700">/</span>
            </li>
            <li className="relative">
              <Link href="#">Graphics Design</Link>
              <span className="absolute mx-2 text-zinc-700">/</span>
            </li>
            <li className="relative">
              <Link href="#">Application Design</Link>
              <span className="absolute mx-2 text-zinc-700">/</span>
            </li>
            <li className="relative">
              <Link href="#">Website Design</Link>
            </li>
          </ul>
        </div>
        <CircularButton border={true} text="View All" position="mx-auto" />
      </div>
    </section>
  );
}
