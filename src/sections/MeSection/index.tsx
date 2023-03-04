import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AuriLogo from "../../../public/AuriLogo.png";
import Image from "next/image";
import TextTransition from "@/components/TextTransition";
import Link from "next/link";

export const MeSection = () => {
  const Hellos = ["Ola,\u{1F44B}", "Hello,\u{1F44B}", "Hola,\u{1F44B}"];
  return (
    <>
      <div>
        <h1>
          <TextTransition Texts={Hellos} />
        </h1>
        <p>Full Stack Developer</p>
        <div className="flex flex-row gap-2">
          <Link
            className="btn btn-ghost rounded-full "
            href="https://github.com/AurimarL"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            className="btn btn-ghost rounded-full "
            href="https://www.linkedin.com/in/aurimar-lopes"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            className="btn btn-ghost rounded-full "
            href="https://wa.me/qr/TNZ5PYDWV4XOK1"
          >
            <FaWhatsapp size={24} />
          </Link>
        </div>
      </div>
      <div>
        <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px]">
          <Image src={AuriLogo} fill alt="Logo" priority />
        </div>
      </div>
    </>
  );
};
