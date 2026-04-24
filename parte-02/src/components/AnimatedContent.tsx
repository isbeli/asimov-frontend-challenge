import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedContent({
  children,
  distance = 40,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  delay = 0,
  className = "",
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  const axis = direction === "vertical" ? "y" : "x";
  const offset = reverse ? -distance : distance;

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ [axis]: offset, opacity: 0 }}
      animate={controls}
      variants={
        {
          visible: {
            [axis]: 0,
            opacity: 1,
            transition: { duration, ease: "easeOut", delay },
          },
        } as any
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
