const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/uppsalafsa/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/uppsala-formula-student/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7.5 10v7M7.5 7v.1M11 17v-7h3v1.2c.5-.9 1.3-1.4 2.5-1.4 1.6 0 2.5 1 2.5 3V17" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:contact@uppsalaformulastudent.se",
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="m3 7 9 7 9-7" />
      </>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white/90 text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-white">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="text-3xl font-black italic leading-none tracking-tight">
            Uppsala Formula Student
          </p>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Designed and built by students in Uppsala.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("https") ? "_blank" : undefined}
              rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold transition hover:border-brand-600 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:border-zinc-700 dark:hover:text-brand-400"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                {icon}
              </svg>
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] border-t border-zinc-200 px-4 py-5 text-sm text-zinc-500 dark:border-zinc-800 md:px-10">
        © {new Date().getFullYear()} Uppsala Formula Student
      </div>
    </footer>
  );
}
