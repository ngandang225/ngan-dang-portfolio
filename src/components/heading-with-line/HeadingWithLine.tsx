type HeadingWithLineProps = {
  text: string;
  color?: string;
};

export default function HeadingWithLine(props: HeadingWithLineProps) {
  const { text, color = 'black' } = props;
  const textColor = color === 'black' ? '' : 'text-white';
  const bg = color === 'black' ? 'bg-black' : 'bg-zinc-800';
  return (
    <div className="w-fit">
      <h2 className={`text-5xl font-bold ${textColor}`}>{text}</h2>
      <div className="mt-2 flex items-center">
        <span className={`h-[1px] w-2/3 ${bg}`}></span>
        <span className={`w-5 aspect-square rounded-full ${bg}`}></span>
      </div>
    </div>
  );
}
