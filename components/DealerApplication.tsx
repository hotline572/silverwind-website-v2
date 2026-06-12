import Link from 'next/link';
import { dealerBenefits } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function DealerApplication() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 lg:px-8" id="dealer-application">
      <div className="absolute inset-0 bg-radial-ember opacity-70" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Dealer Application"
          title="Carry a wheel line built to move faster."
          description="Apply for the TSR dealer program and connect your customers with modern wheel styling, responsive fitment support, and premium showroom assets."
        />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-card backdrop-blur md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Business name" aria-label="Business name" />
            <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Contact name" aria-label="Contact name" />
            <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Email address" aria-label="Email address" type="email" />
            <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Phone number" aria-label="Phone number" type="tel" />
          </div>
          <textarea className="mt-4 min-h-32 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Tell us about your shop and customers" aria-label="Dealer application message" />
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/dealer-program" className="rounded-full bg-ember px-7 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-white shadow-glow transition hover:bg-orange-500">
              Start Application
            </Link>
            <p className="text-xs uppercase tracking-[0.22em] text-titanium">Response target: 24 hours</p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-titanium sm:grid-cols-2">
            {dealerBenefits.slice(0, 4).map((benefit) => (
              <li key={benefit} className="flex gap-3"><span className="text-ember">◆</span>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
