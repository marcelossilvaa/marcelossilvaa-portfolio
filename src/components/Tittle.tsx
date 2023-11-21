interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return <h1 className="font-bold text-3xl py-2">{title}</h1>;
}
