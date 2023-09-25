import { Card } from "@/components/Card";

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
      "React",
      "NextJS \u2764\uFE0F",
      "BootStrap",
      "React Native",
      "TailwindCSS \u2764\uFE0F",
    ],
  },
  {
    Name: "Back End",
    Techs: [
      "AWS",
      "FaunaDB \u2764\uFE0F",
      "GraphQL \u2764\uFE0F",
      "MongoDB",
      "Solidity",
    ],
  },
];

// Aproveitar a listagem das skills para deixar um Heart Like ligado a blockchain
export const SkillSection = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        {Skills.map((skill, k) => {
          return (
            <div key={k}>
              <Card>
                <SkillCard CardTitle={skill.Name} CardText={skill.Techs} />
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
