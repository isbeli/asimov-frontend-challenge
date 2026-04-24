import Aurora from "../components/Aurora";
import BlurText from "../components/BlurText";
import ShinyText from "../components/ShinyText";
import AnimatedContent from "../components/AnimatedContent";
import StarBorder from "../components/StarBorder";
import type { HeroProps } from "../types/hero";
import { CheckCircle } from "lucide-react";

export default function HeroSection({
  headline,
  subheadline,
  bullets,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050509] px-6 py-24">
      <Aurora
        colorStops={["#050509", "#00b4d8", "#6d28d9"]}
        blend={0.45}
        amplitude={1.2}
        speed={0.4}
      />

      {/* Grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, #050509 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <AnimatedContent delay={0.1} distance={20} duration={0.5}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white/50 uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            A maior escola de Python do Brasil
          </span>
        </AnimatedContent>

        {/* Headline */}
        <BlurText
          text={headline}
          delay={60}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white justify-center"
        />

        {/* Subheadline */}
        <AnimatedContent delay={0.5} distance={16} duration={0.6}>
          <p className="max-w-2xl text-base sm:text-lg text-white/50 font-light leading-relaxed">
            {subheadline}
          </p>
        </AnimatedContent>

        {/* Bullets */}
        <AnimatedContent delay={0.65} distance={20} duration={0.6}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-left mt-2">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <CheckCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-sky-400"
                  aria-hidden
                />
                {b.text}
              </li>
            ))}
          </ul>
        </AnimatedContent>

        {/* CTAs */}
        <AnimatedContent delay={0.8} distance={20} duration={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <StarBorder
              as="a"
              href="#"
              color="#00d4ff"
              speed="4s"
              className="group"
            >
              <span className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 group-hover:from-sky-400 group-hover:to-violet-500">
                {ctaPrimary}
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </StarBorder>

            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white/90 transition-colors duration-300"
            >
              <ShinyText
                text={ctaSecondary}
                speed={4}
                className="text-sm font-medium"
              />
              <svg
                className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </AnimatedContent>

        {/* Social proof */}
        <AnimatedContent delay={1.0} distance={10} duration={0.5}>
          <div className="flex items-center gap-6 mt-6 border-t border-white/5 pt-6">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#050509] bg-gradient-to-br from-sky-400 to-violet-600"
                  style={{ filter: `hue-rotate(${i * 25}deg)` }}
                />
              ))}
            </div>
            <p className="text-xs text-white/40 text-left leading-tight">
              <span className="text-white/70 font-semibold">
                +20.000 alunos
              </span>
              <br />
              já transformaram suas carreiras
            </p>
            <div className="hidden sm:flex items-center gap-1 ml-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-xs text-white/40 ml-1">4.9</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
