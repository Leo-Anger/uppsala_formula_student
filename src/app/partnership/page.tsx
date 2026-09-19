import Link from "next/link";

export default function PartnershipPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="mx-auto min-h-screen w-full max-w-[1200px] px-4 py-24 text-zinc-950 dark:text-white md:px-10">
        <section className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/75 md:p-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
            Partnerships
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Partner with Uppsala Formula Student
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            We are building our first Formula Student car and looking for
            long-term partners who want to support student-driven engineering,
            innovation and practical education.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-100/80 p-6 dark:border-zinc-700 dark:bg-zinc-900/70">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
              Contact
            </p>
            <a
              href="mailto:contact@uppsalaformulastudent.se"
              className="mt-3 inline-block text-2xl font-black text-blue-600 hover:text-blue-700"
            >
              contact@uppsalaformulastudent.se
            </a>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex font-bold text-blue-600 hover:text-blue-700"
          >
            Learn more about the team →
          </Link>
        </section>
      </main>
    </>
  );
}
