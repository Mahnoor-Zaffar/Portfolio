import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/features/hero/Hero";
import { About } from "@/features/about/About";
import { Experience } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { Services } from "@/features/services/Services";
import { Skills } from "@/features/skills/Skills";
import { Contact } from "@/features/contact/Contact";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Skip to content
      </a>

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
