import React from "react";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectSection({
  projects,
}: {
  projects: { name: string; description: string; image: string; link: string,github:string }[];
}) {
  return (
    <section id="projects">
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, k) => {
          return (
            <ProjectCard
              key={k}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          );
        })}
      </div>
    </section>
  );
}
