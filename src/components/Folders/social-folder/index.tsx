import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { AiOutlineMessage } from "react-icons/ai";
import { DropdownTriggerWithIcon } from "../DropdownTriggerWithIcon";

function SocialFolderDropdown() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>Make a Call</DropdownMenuItem>
      <DropdownMenuItem>Facebook</DropdownMenuItem>
      <DropdownMenuItem>WhatsApp</DropdownMenuItem>
      <DropdownMenuItem>Instagram</DropdownMenuItem>
      <DropdownMenuItem>Twitter</DropdownMenuItem>
    </DropdownMenuContent>
  );
}
export default function SocialFolder() {
  return (
    <DropdownMenu>
      <DropdownTriggerWithIcon
        label="Social"
        Icon={<AiOutlineMessage className="h-full w-full" />}
      />
      <SocialFolderDropdown />
    </DropdownMenu>
  );
}
