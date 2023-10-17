import { HeaderLinks } from "@/config/links";
import Link from "next/link";
import { Button } from "../ui/button";

export default function HeaderEnd() {
  return (
    <div className="md:flex hidden gap-2">
      <Link href={"/pdf"} className="hidden md:inline">
        <Button className="bg-transparent border hover:bg-white hover:text-black hover:scale-105 transition-transform">
          Resume
        </Button>
      </Link>
      {HeaderLinks.map((e, k) => {
        return (
          <div key={k}>
            <Link href={"/" + e.link}>
              <Button className="bg-transparent border hover:bg-white hover:text-black hover:scale-105 transition-transform">
                {e.title}
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
