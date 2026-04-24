import React from "react";

interface StarBorderProps<T extends React.ElementType = "button"> {
  as?: T;
  children: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  [key: string]: unknown;
}

export default function StarBorder<T extends React.ElementType = "button">({
  as,
  children,
  color = "#00d4ff",
  speed = "4s",
  className = "",
  ...rest
}: StarBorderProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-flex overflow-hidden rounded-xl cursor-pointer ${className}`}
      {...rest}
    >
      <span
        aria-hidden
        className="absolute w-[300%] aspect-square top-[-150%] left-[-100%] rounded-full animate-star-border"
        style={{
          background: `conic-gradient(transparent, ${color}, transparent 30%)`,
          animationDuration: speed,
        }}
      />
      <span
        aria-hidden
        className="absolute w-[300%] aspect-square bottom-[-150%] left-[-100%] rounded-full animate-star-border"
        style={{
          background: `conic-gradient(transparent, ${color}, transparent 30%)`,
          animationDuration: speed,
          animationDirection: "reverse",
        }}
      />
      <span className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </span>
    </Component>
  );
}
