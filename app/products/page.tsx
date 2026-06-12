import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { WheelVisual } from '@/components/WheelVisual';
import { wheels } from '@/data/site';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore TSR Wheels products, finishes, fitments, and premium wheel families.'
};

const finishes = ['Gloss Black', 'Satin Gunmetal', 'Matte Black Milled', 'Diamond Cut', 'Machine Face'];

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Premium wheels for commanding builds." description="Discover TSR wheel families engineered for confident fitment, bold finishes, and high-impact automotive styling." />
      <section className="bg-obsidian px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8">
          {wheels.map((wheel, index) => (
            <article key={wheel.name} className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-card lg:grid-cols-[0.75fr_1.25fr]">
              <div className={`bg-gradient-to-br ${wheel.accent} p-8`}>
                <WheelVisual className="mx-auto max-w-sm" label={`${wheel.name} product wheel`} />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-sm font-black uppercase tracking-[0.28em] text-ember">Series 0{index + 1}</p>
                <h2 className="mt-3 text-4xl font-black text-white">{wheel.name}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-titanium">{wheel.name} pairs a premium {wheel.finish.toLowerCase()} with TSR fitment support for {wheel.vehicle.toLowerCase()}.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-titanium">Finish</p>
                    <p className="mt-2 font-bold text-white">{wheel.finish}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-titanium">Sizes</p>
                    <p className="mt-2 font-bold text-white">{wheel.sizes}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-titanium">Use</p>
                    <p className="mt-2 font-bold text-white">{wheel.vehicle}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-black px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ember">Finish Library</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {finishes.map((finish) => (
              <div key={finish} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.02] p-6 text-center font-black uppercase tracking-[0.12em] text-white">
                {finish}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
