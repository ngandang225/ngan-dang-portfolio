import Link from 'next/link';

type CircularButtonProps = {
  text: string;
  border?: boolean;
  position: string;
  hideInMobile?: boolean;
  link?: string;
};

export default function CircularButton(props: CircularButtonProps) {
  const { text, border = false, position, hideInMobile = false, link } = props;
  const borderStyle = border === true ? 'border border-zinc-800' : '';

  return (
    <Link href={link ?? "#"} target={link && !link.includes("#") ? "_blank" : undefined} className="font-semibold text-white text-center">
      <div
        className={`btn-container cursor-pointer p-6 w-fit aspect-square rounded-full bg-black ${hideInMobile ? 'hidden lg:flex' : 'flex'} items-center justify-center ${position} ${borderStyle}`}
      >
        {text} <span className="text-xl">&#8599;</span>
      </div>
    </Link>
  );
}
