import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { EducationTimeline } from "@/components/EducationTimeline";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="tap skip-link fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs text-fg transition-transform duration-200 focus:translate-y-0"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <EducationTimeline />
        <Skills />
        <Certifications />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}