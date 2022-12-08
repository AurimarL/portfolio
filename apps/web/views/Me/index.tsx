import Image from 'next/image';
import AuriLogo from '../../assets/AuriLogo.png';
import { FaLinkedin, FaGithub, FaRegSmileWink } from 'react-icons/fa';

export default function MeSection() {
    return (
        <div className="m-2 justify-center">
            <div>
                <p className="flex flex-row gap-2 text-6xl md:text-9xl">
                    Hi <FaRegSmileWink />
                </p>
                <p className="text-3xl md:text-6xl">FullStack Developer</p>
                <div className="flex flex-row">
                    <FaLinkedin size={50} />
                    <FaGithub size={50} />
                </div>
            </div>
            <div className="md:flex md:justify-center">
                <div className="md:h-[700px] md:w-[700px]">
                    <Image src={AuriLogo} layout={'responsive'} priority alt="Eu/Me" />
                </div>
            </div>
        </div>
    );
}
