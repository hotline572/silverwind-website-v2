import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact TSR Wheels for product questions, dealer applications, fitment guidance, and sales support.'
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk wheels, fitment, and dealer growth." description="Reach the TSR team for product support, wholesale questions, and dealer program details." />
      <section className="bg-obsidian px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/10 bg-black/45 p-8 shadow-card">
            <h2 className="text-3xl font-black text-white">Sales Support</h2>
            <div className="mt-6 space-y-5 text-titanium">
              <p>Dealer & product inquiries</p>
              <Link href="mailto:sales@tsrwheels.com" className="block text-xl font-black text-white hover:text-ember">sales@tsrwheels.com</Link>
              <Link href="tel:+18005550137" className="block text-xl font-black text-white hover:text-ember">(800) 555-0137</Link>
              <p className="border-t border-white/10 pt-5 text-sm uppercase tracking-[0.22em]">Monday–Friday / 9am–6pm</p>
            </div>
          </div>
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-card md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Name" aria-label="Name" />
              <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Email" aria-label="Email" type="email" />
              <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Phone" aria-label="Phone" type="tel" />
              <input className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="Topic" aria-label="Topic" />
            </div>
            <textarea className="mt-4 min-h-40 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-ember/40 placeholder:text-titanium focus:ring-2" placeholder="How can TSR help?" aria-label="Message" />
            <button className="mt-6 rounded-full bg-ember px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-glow transition hover:bg-orange-500" type="button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
