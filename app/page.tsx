import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { DealerApplication } from '@/components/DealerApplication';
import { FeaturedWheels } from '@/components/FeaturedWheels';
import { Gallery } from '@/components/Gallery';
import { TrustIndicators } from '@/components/TrustIndicators';
import { WheelVisual } from '@/components/WheelVisual';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-asphalt px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-radial-ember" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,transparent_48%,rgba(255,255,255,0.08)_48%,rgba(255,255,255,0.08)_49%,transparent_49%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-ember">37 Years Industry Experience</p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Designed to lead.
              <span className="block text-transparent [-webkit-text-stroke:1px_#E7ECF0]">Built to dominate.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-titanium">
              Premium black and gunmetal wheels for drivers, builders, and dealers who demand aggressive styling, fitment confidence, and modern automotive presence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/products" className="rounded-full bg-ember px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-orange-500">
                Explore Wheels
              </Link>
              <Link href="/dealer-program" className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:border-ember hover:text-ember">
                Become Dealer
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-ember/20 blur-3xl" />
            <WheelVisual className="relative animate-[spin_28s_linear_infinite]" />
            <div className="absolute bottom-6 left-1/2 w-[84%] -translate-x-1/2 rounded-full bg-black/60 px-5 py-4 text-center shadow-card backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-titanium">Modern Automotive / Premium Finish</p>
            </div>
          </div>
        </div>
      </section>
      <TrustIndicators />
      <FeaturedWheels />
      <DealerApplication />
      <Gallery />
      <CTA />
    </>
  );
}
