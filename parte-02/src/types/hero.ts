export interface HeroBullet {
  text: string;
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  bullets: HeroBullet[];
  ctaPrimary: string;
  ctaSecondary: string;
}
