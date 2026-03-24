import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Problem } from "./components/Problem";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Solution } from "./components/Solution";
import { Testimonials } from "./components/Testimonials";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-black">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full border border-white/15 bg-black px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Vai al contenuto
      </a>
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Pricing />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
