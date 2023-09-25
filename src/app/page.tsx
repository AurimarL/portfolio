import AboutMe from "./_Sections/AboutMe";
import ContactSection from "./_Sections/Contact";
import { ProjectSection } from "./_Sections/Projects";
import { SkillSection } from "./_Sections/Skills";

// export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
