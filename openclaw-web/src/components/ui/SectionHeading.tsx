interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`.trim()}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}
