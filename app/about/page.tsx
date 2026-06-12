import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about TSR Wheels, a premium wheel brand shaped by 37 years of automotive industry experience.'
};

const values = [
  ['Experience', '37 years of automotive industry perspective guides fitment, finish, and dealer support decisions.'],
  ['Design', 'Black, gunmetal, machined, and milled details create modern visual depth across the lineup.'],
  ['Support', 'TSR is built for responsive dealer communication and practical product knowledge.']
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About TSR" title="37 years of experience. One modern wheel vision." description="TSR Wheels blends industry knowledge with a premium black-and-gunmetal design language for customers who want presence without compromise." />
      <section className="bg-obsidian px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-ember/20 via-white/[0.05] to-gunmetal p-8 shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-ember">Our standard</p>
            <h2 className="mt-4 text-4xl font-black uppercase text-white">Premium presence, practical fitment, dealer-first thinking.</h2>
          </div>
          <div className="space-y-5">
            {values.map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-titanium">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
