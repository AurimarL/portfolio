import ContactSection from "@/sections/ContactSection";
import { MeSection } from "@/sections/MeSection";
import { ProjectSection } from "@/sections/ProjectSection";
import { SkillSection } from "@/sections/SkillSection";

export default function Home() {
  return (
    <main className="flex flex-col  items-center gap-2 ">
      <section id="Me">
        <MeSection />
      </section>

      <section id="Skills">
        <SkillSection />
      </section>

     {/*
      <section id="Projects">
        <ProjectSection />
      </section>
     3 <section id="Contact" className="bg-white overflow-hidden relative z-10">
        <ContactSection />
  </section>*/}
    </main>
  );
}
