import { FaGithub, FaLinkedin } from "react-icons/fa";

export const MeSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-6xl">{`Ola \u{1F609}`}</h1>
        <p>Full Stack Developer</p>
        <div className="flex flex-row gap-2">
          <FaGithub size={48} />
          <FaLinkedin size={48} />
        </div>  
      </div>
      <div>{/*Image LOGO */}</div>
    </div>
  );
};
