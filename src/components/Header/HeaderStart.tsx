import Link from "next/link";

export default function HeaderStart() {
  return (
    <div className="flex-1">
      <Link
        className="btn btn-ghost normal-case md:text-4xl text-sm"
        href="/"
      >{`Aurimar Lopes 🚀`}</Link>
    </div>
  );
}
