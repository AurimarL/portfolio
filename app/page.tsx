import { MeSection, SkillSection } from "./components/Sections";
import { ProjectSection } from "./components/Sections/ProjectSection";

export default function Home() {
  return (
    <div className="items-center  flex flex-col">
      <section>
        <MeSection />
      </section>
      <section>
        <SkillSection />
      </section>
      <section>
        <ProjectSection />
      </section>
    </div>
  );
}
