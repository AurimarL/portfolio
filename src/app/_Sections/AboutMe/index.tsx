import TextTransition from "@/components/TextTransition";
import Image from "next/image";

import AvatarLogo from "@/assets/home/avatar.png";
import SocialMediasContact from "@/components/SocialMediasContact";

export default function AboutMe() {
  const Hellos = ["Ola,\u{1F44B}", "Hello,\u{1F44B}", "Hola,\u{1F44B}"];

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className=" text-xl">
          <TextTransition Texts={Hellos} />
        </h1>
        <p className="text-xl">Full Stack Developer Here 👽</p>
        <SocialMediasContact />
      </div>
      <div>
        <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px]">
          <Image src={AvatarLogo} fill alt="ME" priority />
        </div>
      </div>
    </section>
  );
}
