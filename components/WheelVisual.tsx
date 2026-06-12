interface WheelVisualProps {
  className?: string;
  label?: string;
}

export function WheelVisual({ className = '', label = 'TSR performance wheel render' }: WheelVisualProps) {
  return (
    <div className={`relative aspect-square ${className}`} role="img" aria-label={label}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-graphite to-black shadow-card" />
      <div className="absolute inset-[6%] rounded-full border border-white/15 bg-[conic-gradient(from_15deg,#0a0d10,#2d3842,#090b0e,#d7dde2,#111820,#0a0d10)]" />
      <div className="absolute inset-[14%] rounded-full bg-black shadow-inner" />
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 h-[42%] w-[7%] origin-[50%_95%] -translate-x-1/2 -translate-y-[95%] rounded-full bg-gradient-to-b from-chrome via-graphite to-black shadow-lg"
          style={{ transform: `translate(-50%, -95%) rotate(${index * 36}deg)` }}
        />
      ))}
      <div className="absolute inset-[34%] rounded-full border border-ember/60 bg-gradient-to-br from-graphite to-black shadow-glow" />
      <div className="absolute inset-[43%] rounded-full bg-chrome" />
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
    </div>
  );
}
