import Link from 'next/link';
import { navigation } from '@/data/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-titanium">
            Premium automotive wheels engineered with decades of fitment knowledge, dealer support, and a bold modern style.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">Pages</h3>
          <div className="mt-5 grid gap-3 text-sm text-titanium">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">Contact</h3>
          <div className="mt-5 space-y-3 text-sm text-titanium">
            <p>Dealer & product inquiries</p>
            <Link href="mailto:sales@tsrwheels.com" className="block text-white hover:text-ember">sales@tsrwheels.com</Link>
            <Link href="tel:+18005550137" className="block text-white hover:text-ember">(800) 555-0137</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs uppercase tracking-[0.24em] text-titanium">
        © {new Date().getFullYear()} TSR Wheels. Designed to lead.
      </div>
    </footer>
  );
}
