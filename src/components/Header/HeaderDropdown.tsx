"use client";
import { HeaderLinks } from "@/config/links";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeaderDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-8">
          {HeaderLinks.map((e, k) => {
            return (
              <DropdownMenuItem key={k}>
                <Button className="w-full bg-transparent border-2 text-black">
                  <Link href={"/" + e.link}>{e.title}</Link>
                </Button>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuItem>{children}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
