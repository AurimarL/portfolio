import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { SiDocsdotrs } from "react-icons/si";
import { DropdownTriggerWithIcon } from "../DropdownTriggerWithIcon";

function ProjectsFolderDrowpdown() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>Next Manifest</DropdownMenuItem>
      <DropdownMenuItem>Troti Flex</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
export default function ProjectsFolder() {
  return (
    <DropdownMenu>
      <DropdownTriggerWithIcon
        label="Projects"
        Icon={<SiDocsdotrs className="h-full w-full" />}
      />
      <ProjectsFolderDrowpdown />
    </DropdownMenu>
  );
}
