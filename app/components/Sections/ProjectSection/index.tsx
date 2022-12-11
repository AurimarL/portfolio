import React from "react";
import { Card, CardWithImage } from "ui/Card";
import SectionSeparator from "../components/SectionSeparator";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../../../public/logo.svg";

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
          <FaGithub size={48} />
        </div>
      </CardWithImage>
    </>
  );
};

export const ProjectSection = () => {
  const Projects = [
    {
      name: "Ondando",
      image: "https://random.imagecdn.app/500/500",
      GitHubLink: "git",
      description:
        "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.",
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
    <div>
      <SectionSeparator placeHolder={`< Project />`} />
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
    </div>
  );
};
