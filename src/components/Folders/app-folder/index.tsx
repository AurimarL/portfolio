import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

import { AiOutlineFolderOpen } from "react-icons/ai";
import { DropdownTriggerWithIcon } from "../DropdownTriggerWithIcon";
import Link from "next/link";

function AppFolderDropDown() {
  return (
    <DropdownMenuContent>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <span>Games</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.ALGames.CrashBird&pcampaignid=web_share"
                }
              >
                Crash Bird
              </Link>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <span>More</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <span>Email</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
    </DropdownMenuContent>
  );
}
export default function AppFolder() {
  return (
    <DropdownMenu>
      <DropdownTriggerWithIcon
        label="App"
        Icon={<AiOutlineFolderOpen className="h-full w-full" />}
      />
      <AppFolderDropDown />
    </DropdownMenu>
  );
}
