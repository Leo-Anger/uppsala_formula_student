const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/uppsalafs/",
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
    <path
      transform="scale(0.04758)"
      d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
      C504,57,447.2,0.2,377.6,0.2z
      M168,408.2H96v-208h72V408.2z
      M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8
      c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z
      M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6
      c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4
      c66,0,77.6,38,77.6,94.4V408.2z"
      fill ="currentColor"/>
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
