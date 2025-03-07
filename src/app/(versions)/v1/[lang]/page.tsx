import { getDictionary } from "@/lib/dictionaries";
import AboutMe from "./_Sections/AboutMe";
import ContactSection from "./_Sections/Contact";
import ProjectSection from "./_Sections/Projects";
import SkillSection from "./_Sections/Skills";
import { Locale } from "@/i18n.config";

// export const runtime = "edge";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const {
    home: {
      about: { message, cliclavatar, cliclavatarM },
      projects,
      contact: { description, title },
    },
  } = await getDictionary(params.lang);

  return (
    <main className="flex flex-col items-center gap-4 ">
      <br />
      <AboutMe
        message={message}
        clickavatar={cliclavatar}
        cliclavatarM={cliclavatarM}
      />
      <br />
      <SkillSection />
      <br />
      <ProjectSection projects={projects}/>
      <br />
      <ContactSection description={description} title={title} />
    </main>
  );
}
