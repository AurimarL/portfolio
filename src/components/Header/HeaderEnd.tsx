import { HeaderLinks } from "@/config/links";
import Link from "next/link";

export default function HeaderEnd() {
  return (
    <div className="md:flex hidden gap-2">
      {HeaderLinks.map((e, k) => {
        return (
          <div key={k}>
            <Link href={e.link}>{e.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
