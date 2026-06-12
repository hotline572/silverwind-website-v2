import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="TSR Wheels home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-graphite to-black shadow-glow">
        <span className="absolute inset-1 rounded-full border border-ember/50" />
        <span className="absolute h-7 w-7 rounded-full border-4 border-chrome/80 border-t-ember transition-transform duration-500 group-hover:rotate-180" />
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black tracking-[0.28em] text-white">TSR</span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-titanium">Wheels</span>
      </span>
    </Link>
  );
}
