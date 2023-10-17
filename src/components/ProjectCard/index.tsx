import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { Separator } from "../ui/separator";
import { IProjects } from "@/types";

export default function ProjectCard({
  image,
  name,
  description,
  links,
}: IProjects) {
  return (
    <Card className=" max-w-xl bg-transparent text-white h-full border-2 rounded-xl">
      <CardHeader className="p-2">
        <div className="w-full ">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              src={image}
              alt={name}
              sizes="1x"
              className="rounded-md object-cover md:hover:scale-150  transition-transform md:hover:border-white md:hover:border-2 md:devhover:z-50 "
            />
          </AspectRatio>
        </div>
        <p className="text-2xl m-1 text-center">{name}</p>
      </CardHeader>
      <Separator />
      <br />
      <CardContent>
        <p className="text-md md:text-xl">{description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 animate-pulse">
        {links.website ? (
          <Link href={`${links.website}`} className="text-xl md:text-3xl">
            <TfiWorld />
          </Link>
        ) : null}
        {links.github ? (
          <Link href={`${links.github}`} className="text-xl md:text-3xl ">
            <FaGithub />
          </Link>
        ) : null}
      </CardFooter>
    </Card>
  );
}
