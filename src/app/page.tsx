import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Glance } from "@/components/sections/Glance";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function HomePage() {
  const locale = "en";

  return (
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <Hero locale={locale} />
      <Glance locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Education locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
