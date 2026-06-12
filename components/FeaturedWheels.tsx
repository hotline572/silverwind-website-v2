import Link from 'next/link';
import { wheels } from '@/data/site';
import { SectionHeading } from './SectionHeading';
import { WheelVisual } from './WheelVisual';

export function FeaturedWheels() {
  return (
    <section className="bg-obsidian px-6 py-24 lg:px-8" id="featured-wheels">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Wheels"
            title="Aggressive fitments. Premium finishes."
            description="A curated lineup for performance cars, luxury SUVs, and hard-working trucks that need commanding stance and dependable support."
          />
          <Link href="/products" className="rounded-full border border-white/15 px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:border-ember hover:text-ember">
            View Products
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {wheels.map((wheel) => (
            <article key={wheel.name} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-card transition hover:-translate-y-2 hover:border-ember/60">
              <div className={`rounded-[1.5rem] bg-gradient-to-br ${wheel.accent} p-7`}>
                <WheelVisual className="mx-auto max-w-[15rem] transition duration-700 group-hover:rotate-45" label={`${wheel.name} wheel`} />
              </div>
              <div className="mt-7">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-ember">{wheel.vehicle}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{wheel.name}</h3>
                <p className="mt-3 text-sm text-titanium">{wheel.finish}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm font-semibold text-chrome">{wheel.sizes}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
