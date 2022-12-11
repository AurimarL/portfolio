import { MeSection, SkillSection } from "./components/Sections";
import { ProjectSection } from "./components/Sections/ProjectSection";

export default function Home() {
  return (
    <div className="items-center  flex flex-col">
      <section id="Me">
        <MeSection />
      </section>
      <section id="Skills">
        <SkillSection />
      </section>
      <section id="Projects">
        <ProjectSection />
      </section>
    </div>
  );
}
