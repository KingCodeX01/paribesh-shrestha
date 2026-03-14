import { Hero } from "@/sections/Hero";
import AboutPage from "./about/page";
import { Earth } from "@/sections/Earth";
import { Projects } from "@/sections/Projects";
import { Clock } from "@/components/ui/clock";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <div>
        <Clock />
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
