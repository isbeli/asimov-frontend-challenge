import HeroSection from "./sections/HeroSection";
import type { HeroBullet } from "./types/hero";

const bullets: HeroBullet[] = [
  { text: "+40 horas de conteúdo direto ao ponto" },
  { text: "Projetos com Python + IA desde o módulo 1" },
  { text: "Suporte da comunidade com +20.000 alunos" },
  { text: "Certificado reconhecido pelo mercado" },
];

export default function App() {
  return (
    <main>
      <HeroSection
        headline="Aprenda Python do zero e construa projetos reais com IA"
        subheadline="O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação"
        bullets={bullets}
        ctaPrimary="Quero começar agora"
        ctaSecondary="Ver o que vou aprender"
      />
    </main>
  );
}
