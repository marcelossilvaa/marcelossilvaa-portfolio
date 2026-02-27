interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary py-2">
      {title}
    </h2>
  );
}
