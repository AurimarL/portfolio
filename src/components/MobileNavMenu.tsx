"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export type MobileNavItem = {
  title: string;
  href: string;
};

export default function MobileNavMenu({
  links,
  ariaLabel,
  extraContent,
  languageAction,
}: {
  links: MobileNavItem[];
  ariaLabel: string;
  extraContent?: React.ReactNode;
  languageAction?: React.ReactNode;
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
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-slate-900/80 text-white shadow-sm transition hover:border-cyan-400/40 hover:text-cyan-400"
      >
        {isOpen ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/65"
            />

            <motion.aside
              initial={{ x: "100%", opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.6 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 h-screen w-[86%] max-w-[350px] border-l border-white/10 bg-[#0d1720] p-4 shadow-[0_0_30px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-1 pb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-slate-900 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <nav className="mt-3 flex flex-col gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-md border border-white/10 bg-[#121e27] px-3 py-3 text-xl font-medium tracking-[-0.04em] text-white transition hover:border-cyan-400/50 hover:bg-[#172832] hover:text-cyan-300"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}

                {languageAction ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.2 }}
                    className="mt-3 border-t border-white/10 pt-3"
                  >
                    {languageAction}
                  </motion.div>
                ) : null}

                {extraContent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.16, duration: 0.2 }}
                    className="mt-3"
                  >
                    {extraContent}
                  </motion.div>
                ) : null}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
