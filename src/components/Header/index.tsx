
import {
  MoveUpRight,
} from "lucide-react";
import MobileNavMenu from "@/components/MobileNavMenu";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header({
  cvHref, t, en
}: {
  t: (pt: string, english: string) => string, en: boolean, cvHref: string
}) {

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] items-center justify-between gap-4 py-4 md:w-[min(1160px,calc(100%-48px))]">
        <Link href="#top" className="text-2xl font-black tracking-[-0.08em] text-white">
          AL<span className="text-cyan-400">.</span>
        </Link>

        <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300 md:flex">
          <Link href="#work" className="transition hover:text-cyan-400">
            {t("Trabalho", "Work")}
          </Link>
          <Link href="#about" className="transition hover:text-cyan-400">
            {t("Sobre", "About")}
          </Link>
          <Link href="#contact" className="transition hover:text-cyan-400">
            {t("Contacto", "Contact")}
          </Link>
          <a href={cvHref} download className="transition hover:text-cyan-400">
            {t("CV", "Resume")}
          </a>
          <Link href={en ? "/pt" : "/en"} className="rounded-full border border-white/15 px-3 py-1.5 text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/10">
            {en ? "PT" : "EN"}
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button className="rounded-full border border-cyan-400/40 bg-cyan-400 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300">
            <Link href="#contact" className="inline-flex items-center gap-2">
              {t("Disponível para projetos", "Available for projects")}
              <MoveUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileNavMenu
            ariaLabel={t("Abrir menu", "Open menu")}
            links={[
              { title: t("Trabalho", "Work"), href: "#work" },
              { title: t("Sobre", "About"), href: "#about" },
              { title: t("Contacto", "Contact"), href: "#contact" },
              { title: t("CV", "Resume"), href: cvHref },
              { title: en ? "PT" : "EN", href: en ? "/pt" : "/en" },
            ]}
            extraContent={
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-md border border-cyan-400/40 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
              >
                {t("Disponível para projetos", "Available for projects")}
              </Link>
            }
          />
        </div>
      </div>
    </header>
  );
}
