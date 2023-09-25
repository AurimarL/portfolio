import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function SocialMediasContact() {
  return (
    <div className="flex flex-row gap-2">
      <Link className="btn btn-ghost  " href="https://github.com/AurimarL">
        <FaGithub size={24} />
      </Link>
      <Link
        className="btn btn-ghost  "
        href="https://www.linkedin.com/in/aurimar-lopes"
      >
        <FaLinkedin size={24} />
      </Link>
      <Link className="btn btn-ghost  " href="https://wa.me/qr/TNZ5PYDWV4XOK1">
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
