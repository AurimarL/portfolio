import React from "react";
import { CardWithImage } from "@/components/Card";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface IProjectCard {
  image: String;
  CardTitle: String;
  CardText: String;
  Links: String;
}
const ProjectCard = ({ image, CardTitle, CardText, Links }: IProjectCard) => {
  return (
    <>
      <CardWithImage Src={`${image}`}>
        <h2 className="card-title">{CardTitle}</h2>
        <p>{CardText}</p>
        <div className="card-actions justify-end m-2">
          <Link href={`${Links}`} className="no-underline text-black">
            <FaGithub size={48} />
          </Link>
        </div>
      </CardWithImage>
    </>
  );
};

export const ProjectSection = () => {
  const Projects = [
    {
      name: "AGaleria",
      image:
        "https://res.cloudinary.com/djlawikle/image/upload/v1671903450/portfolio/agaleria_pc4jdp.png",
      GitHubLink: "https://agaleria.vercel.app",
      description: "Galeria de imagens",
    },
    {
      name: "Soon",
      image: "https://random.imagecdn.app/500/500",
      GitHubLink: "#",
      description:
        "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
    },
    {
      name: "Brevemente",
      image: "https://random.imagecdn.app/500/500",
      GitHubLink: "#",
      description:
        "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2">
        {Projects.map((project, k) => {
          return (
            <div key={k}>
              <ProjectCard
                CardTitle={project.name}
                CardText={project.description}
                image={project.image}
                Links={project.GitHubLink}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
