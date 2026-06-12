import Link from 'next/link';
import { navigation } from '@/data/site';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asphalt/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em] text-titanium md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/dealer-program"
          className="hidden rounded-full border border-ember/50 bg-ember px-5 py-2.5 text-sm font-black uppercase tracking-[0.18em] text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-orange-500 sm:inline-flex"
        >
          Dealer
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-titanium md:hidden" aria-label="Mobile navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 transition hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
