import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export interface ISkillCard {
  CardTitle: String;
  CardText: String[];
}

export const SkillCard = ({ CardTitle, CardText }: ISkillCard) => {
  return (
    <>
      <div className=" border-b-2 border-white">
        <h1 className="card-title">{CardTitle}</h1>
      </div>
      <ul>
        {CardText.map((e, k) => {
          return (
            <li key={k}>
              <p>{e}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Skills = [
  {
    Name: "Front End",
    Techs: [
      "Next.JS \u2764\uFE0F",
      "TailwindCSS \u2764\uFE0F",
      "React",
      "BootStrap",
      "React Native",
    ],
  },
  {
    Name: "Back End",
    Techs: [
      "FaunaDB \u2764\uFE0F",
      "GraphQL \u2764\uFE0F",
      "Rust \u2764\uFE0F",
      "MongoDB",
      "AWS",
      "Solidity",
    ],
  },
];

// Aproveitar a listagem das skills para deixar um Heart Like ligado a blockchain
export default function SkillSection() {
  return (
    <section id="skills" className="flex flex-row gap-2">
      {Skills.map((skill, k) => {
        return (
          <Card key={k} className="md:w-52 bg-transparent text-white">
            <CardHeader>
              <CardTitle className="text-center">{skill.Name}</CardTitle>
            </CardHeader>
            <Separator />
            <br />
            <CardContent>
              {skill.Techs.map((skill, i) => {
                return (
                  <p className="text-base" key={i}>
                    {skill}
                  </p>
                );
              })}
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
