import { Hero } from "@/sections/Hero";
import AboutPage from "./about/page";
import { Earth } from "@/sections/Earth";
import { Projects } from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div>
        <Earth />
      </div>

      <div>
        <AboutPage />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
}
