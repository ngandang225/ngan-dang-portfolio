import Link from 'next/link';

type CircularButtonProps = {
  text: string;
  border?: boolean;
  position: string;
  hideInMobile?: boolean;
};

export default function CircularButton(props: CircularButtonProps) {
  const { text, border = false, position, hideInMobile = false } = props;
  const borderStyle = border === true ? 'border border-zinc-800' : '';

  return (
    <div
      className={`btn-container cursor-pointer p-6 w-fit aspect-square rounded-full bg-black ${hideInMobile ? 'hidden lg:flex' : 'flex'} items-center justify-center ${position} ${borderStyle}`}
    >
      <Link href="#" className="font-semibold text-white text-center">
        {text} <span className="text-xl">&#8599;</span>
      </Link>
    </div>
  );
}
