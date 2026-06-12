import Link from 'next/link';

export function CTA() {
  return (
    <section className="bg-black px-6 py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2.5rem] border border-ember/30 bg-gradient-to-br from-ember/20 via-white/[0.06] to-gunmetal/60 p-8 shadow-glow md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-ember">Ready to dominate?</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">Find your next fitment.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/products" className="rounded-full bg-white px-7 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-black transition hover:bg-chrome">
            Explore Wheels
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-ember hover:text-ember">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
