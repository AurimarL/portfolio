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
  const Hellos = ["Olá", "Hello", "Hola"];

  return (
    <section className="flex flex-col gap-4" id="about">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 text-xl md:text-3xl">
          {"\u{1F44B}"}
          <TextTransition Texts={Hellos} />
        </div>
        <p className="text-4xl">{message}</p>
        <SocialMediasContact />
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
    </section>
  );
}
