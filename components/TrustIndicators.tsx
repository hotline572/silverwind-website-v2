import { trustIndicators } from '@/data/site';

export function TrustIndicators() {
  return (
    <section className="border-y border-white/10 bg-gunmetal/40 px-6 py-14 lg:px-8" aria-label="Trust indicators">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustIndicators.map((item) => (
          <div key={item.label} className="rounded-3xl border border-white/10 bg-black/35 p-6 text-center">
            <p className="text-4xl font-black text-white">{item.metric}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-titanium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
