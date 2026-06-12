import type { Metadata } from 'next';
import { DealerApplication } from '@/components/DealerApplication';
import { PageHero } from '@/components/PageHero';
import { dealerBenefits } from '@/data/site';

export const metadata: Metadata = {
  title: 'Dealer Program',
  description: 'Apply to become a TSR Wheels dealer and access premium wheel products, fitment support, and wholesale programs.'
};

export default function DealerProgramPage() {
  return (
    <>
      <PageHero eyebrow="Dealer Program" title="Partner with a wheel brand built for momentum." description="TSR supports dealers with premium wheel products, competitive programs, fast communication, and the assets needed to sell confidently." />
      <section className="bg-obsidian px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {dealerBenefits.map((benefit, index) => (
            <div key={benefit} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-card">
              <p className="text-5xl font-black text-ember">0{index + 1}</p>
              <h2 className="mt-6 text-2xl font-black text-white">{benefit}</h2>
              <p className="mt-4 leading-7 text-titanium">A streamlined dealer experience designed around speed, product confidence, and long-term wholesale relationships.</p>
            </div>
          ))}
        </div>
      </section>
      <DealerApplication />
    </>
  );
}
