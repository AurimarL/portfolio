import Link from "next/link";

export default function HeaderStart() {
  return (
    <div className="flex-1">
      <Link
        className="normal-case md:text-4xl text-xl"
        href="/"
      >{`Aurimar Lopes 🚀`}</Link>
    </div>
  );
}
