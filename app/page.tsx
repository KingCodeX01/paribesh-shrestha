import { Hero } from "@/sections/Hero";
import AboutPage from "./about/page";
import { Earth } from "@/sections/Earth";
import { Projects } from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>

      <div>
        <Earth />
      </div>

      <div id="about">
        <AboutPage />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
