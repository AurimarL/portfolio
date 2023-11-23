import TextTransition from "@/components/TextTransition";
import Image from "next/image";

import AvatarLogo from "@/assets/home/avatar.png";
import SocialMediasContact from "@/components/SocialMediasContact";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuContent,
} from "@/components/ui/context-menu";

export default function AboutMe({
  message,
  clickavatar,
  cliclavatarM,
}: {
  message: string;
  clickavatar: string;
  cliclavatarM: string;
}) {
  const Hellos = ["Olá,meu nome é", "Hi, my name is"];

  return (
    <section className="flex flex-col gap-4" id="about">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 text-xl md:text-3xl">
          {"\u{1F44B}"}
          <TextTransition Texts={Hellos} />
        </div>
        <h1>Aurimar Lopes</h1>
        <p className="text-4xl">{message}</p>
        <p className="max-w-xl">
          Highly motivated and very passionate Full Stack Developer with three
          years of experience in JavaScript,TypeScript, React js, Next js,
          Tailwind CSS, Node js, MongoDB and more.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-md">
          <p>
            {` Hello! My name is Aurimar Lopes and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2020 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! `}
          </p>
          <p>
            {`Fast-forward to today, and I've had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio.My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.`}
          </p>
        </div>
        <ContextMenu>
          <ContextMenuTrigger>
            <div className="flex  gap-2 items-center flex-col">
              <div className=" w-60 md:w-96">
                <AspectRatio ratio={4 / 4}>
                  <Image
                    src={AvatarLogo}
                    fill
                    alt="ME"
                    priority
                    sizes="1x"
                    className=" object-cover "
                  />
                </AspectRatio>
              </div>
              <div className="text-center text-xs">
                <p className="md:hidden">{cliclavatarM}</p>
                <p className="md:flex hidden">{clickavatar}</p>
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>CV</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  Download
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Open</ContextMenuItem>
                <ContextMenuItem>Share</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </section>
  );
}
