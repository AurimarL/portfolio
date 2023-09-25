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
    <Link href={`${Links}`}>
      <CardWithImage Src={`${image}`}>
        <h2 className="card-title">{CardTitle}</h2>
        <p>{CardText}</p>
      </CardWithImage>
    </Link>
  );
};

export const ProjectSection = () => {
  const Projects: {
    name: string;
    description: string;
    image: string;
    link: string;
  }[] = [
    {
      name: "Trotiflex",
      description: "Ecomerce",
      link: "https://trotiflex.com/",
      image:
        "https://res.cloudinary.com/auri/image/upload/v1695612904/aurimar/trotiflex.png",
    },
    {
      name: "Soon",
      description:
        "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
      link: "#",
      image: "https://random.imagecdn.app/500/500",
    },
    {
      name: "Brevemente",
      description:
        "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
      link: "#",
      image: "https://random.imagecdn.app/500/500",
    },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-2">
      {Projects.map((project, k) => {
        return (
          <div key={k}>
            <ProjectCard
              CardTitle={project.name}
              CardText={project.description}
              image={project.image}
              Links={project.link}
            />
          </div>
        );
      })}
    </div>
  );
};
