interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-black uppercase tracking-[0.32em] text-ember">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-titanium sm:text-lg">{description}</p> : null}
    </div>
  );
}
