import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Repositories } from "@/components/sections/Repositories";
import { Skills } from "@/components/sections/Skills";
import { Tldr } from "@/components/sections/Tldr";
import { repositoriesSectionVisible } from "@/data/repositories";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Tldr />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {repositoriesSectionVisible ? <Repositories /> : null}
      <Contact />
    </main>
  );
}


