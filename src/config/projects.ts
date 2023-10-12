import type { IProjects } from "@/types";

export const Projects = ({ Trotiflex, nextmanifest }: { Trotiflex: string, nextmanifest: string }): IProjects[] => {
    const data: IProjects[] = [{
        name: "Trotiflex",
        description: Trotiflex,
        links: {
            website: "https://trotiflex.com/",
        },
        image:
            "https://res.cloudinary.com/auri/image/upload/v1695612904/aurimar/trotiflex.png",
    },
    {
        name: "Next Manifest",
        description: nextmanifest,
        links: {
            website: "https://www.nextmanifest.com/",
        },
        image:
            "https://res.cloudinary.com/auri/image/upload/v1697051576/aurimar/shortnextmanifest.png",
    },]
    return data
}
