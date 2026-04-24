import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimateBy = "words" | "letters";
type Direction = "top" | "bottom";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: AnimateBy;
  direction?: Direction;
  onAnimationComplete?: () => void;
}

export default function BlurText({
  text,
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();

  const [segments] = useState<string[]>(() =>
    animateBy === "words" ? text.split(" ") : text.split(""),
  );

  const yOffset = direction === "top" ? -20 : 20;

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: yOffset }}
          animate={controls}
          variants={{
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: (index * delay) / 1000,
              },
            },
          }}
          style={{ willChange: "transform, filter, opacity" }}
          className={animateBy === "words" ? "mr-[0.25em]" : ""}
          onAnimationComplete={
            index === segments.length - 1 ? onAnimationComplete : undefined
          }
        >
          {segment}
        </motion.span>
      ))}
    </p>
  );
}
