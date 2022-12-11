import { FaGithub, FaLinkedin } from "react-icons/fa";
import AuriLogo from "../../../../public/AuriLogo.png";
import Image from "next/image";
import TextTransition from "ui/TextTransition";

export const MeSection = () => {
  const Hellos = ["Ola,\u{1F44B}", "Hello,\u{1F44B}", "Hola,\u{1F44B}"];
  return (
    <div>
      <div>
        <h1>
          <TextTransition Texts={Hellos} />
        </h1>
        <p>Full Stack Developer</p>
        <div className="flex flex-row gap-2">
          <FaGithub size={48} />
          <FaLinkedin size={48} />
        </div>
      </div>
      <div>
        {/*Image LOGO */}
        <div className="relative h-[250px] w-[250px] md:h-[500px] md:w-[500px]">
          <Image src={AuriLogo} fill alt="Logo" priority />
        </div>
      </div>
    </div>
  );
};
