import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/config/projects";

export default function ProjectSection({
  Trotiflex,
  nextmanifest,
}: {
  Trotiflex: string;
  nextmanifest: string;
}) {
  const projects = Projects({ Trotiflex, nextmanifest });
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
              links={project.links}
            />
          );
        })}
      </div>
    </section>
  );
}
