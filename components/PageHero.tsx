interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-radial-ember opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:80px_80px] opacity-20" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.34em] text-ember">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-titanium">{description}</p>
      </div>
    </section>
  );
}
