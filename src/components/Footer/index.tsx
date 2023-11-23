import AppFolder from "@/components/Folders/app-folder";
import CVFolder from "@/components/Folders/cv-folder";
import ProjectsFolder from "@/components/Folders/projects-folder";
import SocialFolder from "@/components/Folders/social-folder";

export default function Footer() {
  return (
    <footer className="absolute w-full flex justify-center bottom-6">
      <div className="flex gap-10">
        <AppFolder />
        <ProjectsFolder />
        <SocialFolder />
        <CVFolder />
      </div>
    </footer>
  );
}
