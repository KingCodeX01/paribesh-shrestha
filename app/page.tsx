import { Hero } from "@/sections/Hero";
import AboutPage from "./about/page";
import { Earth } from "@/sections/Earth";
import { Projects } from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Paribesh Shrestha's portfolio. Full Stack Developer showcasing projects, skills, and professional experience in web development.",
};

export default function Home() {
  return (
    <main>
      <section id="home" aria-label="Hero section">
        <Hero />
      </section>

      <section aria-label="Interactive globe visualization">
        <Earth />
      </section>

      <section id="about" aria-label="About section">
        <AboutPage />
      </section>

      <section id="skills" aria-label="Skills section">
        <Skills />
      </section>

      <section id="projects" aria-label="Projects section">
        <Projects />
      </section>
    </main>
  );
}
