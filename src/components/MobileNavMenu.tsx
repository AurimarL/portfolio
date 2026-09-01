"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export type MobileNavItem = {
  title: string;
  href: string;
};

export default function MobileNavMenu({
  links,
  ariaLabel,
  extraContent,
}: {
  links: MobileNavItem[];
  ariaLabel: string;
  extraContent?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="mobile-menu"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/70"
          />

          <aside className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-4 border-l border-white/10 bg-[#101820] p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-medium uppercase tracking-[0.26em] text-white/70">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white hover:bg-white/5"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-white transition hover:border-cyan-400/60 hover:bg-cyan-400/10"
                >
                  {link.title}
                </Link>
              ))}

              {extraContent ? <div className="mt-2 border-t border-white/10 pt-3">{extraContent}</div> : null}
            </nav>
          </aside>
        </>
      )}
    </div>
  );
}
