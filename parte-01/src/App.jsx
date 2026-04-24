import Navbar from "./components/Navbar";
import Brands from "./sections/Brands";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import CTA from "./sections/CTA";
import CaseStudies from "./sections/CaseStudies";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <CTA />
      <CaseStudies />
    </div>
  );
}
