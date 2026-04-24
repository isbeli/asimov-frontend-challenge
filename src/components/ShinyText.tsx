interface ShinyTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent animate-shine ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, #a0a0a0 40%, #ffffff 50%, #a0a0a0 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
