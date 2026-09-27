
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/join", label: "Join Us" },
  { href: "/partnership", label: "Partnership" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 text-zinc-950 shadow-sm backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/85 dark:text-white">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-18 w-full max-w-[1600px] items-center px-4 md:px-10"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          aria-label="Uppsala Formula Student home"
        >
          <span className="rounded-md bg-brand-800 px-2.5 py-1.5 text-lg font-black italic tracking-[-0.05em] text-white transition group-hover:bg-brand-700">
            UFS
          </span>
          <span className="hidden text-sm font-bold leading-tight sm:block">
            Uppsala Formula Student
          </span>
        </Link>

        <ul className="ml-auto hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-4 py-2 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
                    active
                      ? "bg-brand-700 text-white"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="ml-auto flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-200 transition hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-zinc-800 dark:hover:bg-zinc-900 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${menuOpen ? "block" : "hidden"} border-t border-zinc-200/80 px-4 py-4 dark:border-zinc-800/80 md:hidden`}
      >
        <ul className="mx-auto grid max-w-[1600px] gap-2">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 font-bold transition ${
                    active
                      ? "bg-brand-700 text-white"
                      : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
