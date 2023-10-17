"use client";
import { Button } from "../ui/button";
import { HandleResumeDownload } from "./HandleResumeDownload";
import { IResumeData } from "@/types";

export default function DonwloadResumeButton({ data }: { data: IResumeData }) {
  return (
    <Button
      onClick={() => HandleResumeDownload({ data })}
      className="w-full bg-transparent border-2 text-black"
    >{`< CV />`}</Button>
  );
}
