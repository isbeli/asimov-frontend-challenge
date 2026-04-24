interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

export default function Aurora({
  colorStops = ["#050509", "#00b4d8", "#6d28d9"],
  blend = 0.45,
  amplitude = 1,
  speed = 0.5,
}: AuroraProps) {
  const gradient = `
    radial-gradient(ellipse 80% 60% at 20% 40%, ${colorStops[0]}cc, transparent 60%),
    radial-gradient(ellipse 60% 80% at 80% 20%, ${colorStops[1]}66, transparent 50%),
    radial-gradient(ellipse 70% 50% at 50% 80%, ${colorStops[2]}88, transparent 60%)
  `;

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity: blend }}
    >
      <div
        className="absolute inset-[-20%] animate-aurora"
        style={{
          background: gradient,
          filter: `blur(${40 * amplitude}px)`,
          animationDuration: `${12 / speed}s`,
        }}
      />
    </div>
  );
}
