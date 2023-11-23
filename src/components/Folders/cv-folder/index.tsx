import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { SiGoogledocs } from "react-icons/si";
import { DropdownTriggerWithIcon } from "../DropdownTriggerWithIcon";

function CVFolderDropdown() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>Abrir</DropdownMenuItem>
      <DropdownMenuItem>Download</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
export default function CVFolder() {
  return (
    <DropdownMenu>
      <DropdownTriggerWithIcon
        label="CV"
        Icon={<SiGoogledocs className="h-full w-full" />}
      />
      <CVFolderDropdown />
    </DropdownMenu>
  );
}
