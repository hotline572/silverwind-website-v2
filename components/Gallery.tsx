import { gallery } from '@/data/site';
import { SectionHeading } from './SectionHeading';

export function Gallery() {
  return (
    <section className="bg-carbon-fiber bg-[length:40px_40px] px-6 py-24 lg:px-8" id="gallery">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          centered
          eyebrow="Gallery"
          title="Built for showroom floors and street presence."
          description="Premium black, gunmetal, and machined finishes designed to transform modern automotive builds."
        />
        <div className="mt-12 grid auto-rows-[16rem] gap-5 md:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={item}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-graphite via-black to-obsidian p-6 shadow-card ${index === 0 || index === 5 ? 'md:col-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,90,40,0.32),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.13),transparent_45%)] opacity-80 transition group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
              <p className="relative flex h-full items-end text-xl font-black uppercase tracking-[0.12em] text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
