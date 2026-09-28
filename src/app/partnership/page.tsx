
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnership",
  description:
    "Partner with Uppsala Formula Student and help students build Uppsala's first Formula Student car.",
};

const contributions = [
  {
    title: "Knowledge",
    description:
      "Technical guidance and industry experience help students make stronger engineering decisions.",
  },
  {
    title: "Materials",
    description:
      "Components, manufacturing support, and access to equipment turn designs into a real car.",
  },
  {
    title: "Technology",
    description:
      "Software, tools, and specialist systems help the team design, validate, and document its work.",
  },
  {
    title: "Financial support",
    description:
      "Funding helps cover components, manufacturing, testing and taking the car to competition.",
  },
];

export default function PartnershipPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="overflow-x-clip text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
          <div className="relative overflow-hidden rounded-3xl bg-black px-7 py-20 text-white shadow-2xl sm:px-10 md:px-16 md:py-28 lg:px-20">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-20 select-none text-[15rem] font-black italic leading-none tracking-[-0.08em] text-white/[0.035] md:text-[25rem]"
            >
              UFS
            </div>
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-300 via-brand-600 to-accent-900" />

            <div className="relative max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-200">
                Partnership
              </p>
              <h1 className="mt-5 text-5xl font-black italic leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Build the future
                <br />
                with us.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">
                Uppsala Formula Student gives students practical experience
                designing, building, and testing a real vehicle. Our partners
                make that work possible while helping develop the engineers of
                the future.
              </p>
              <a
                href="mailto:contact@uppsalaformulastudent.se?subject=Partnership%20with%20Uppsala%20Formula%20Student"
                className="mt-9 inline-flex rounded-lg bg-white px-7 py-3.5 font-black text-brand-900 transition hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact us →
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-600 dark:text-brand-400">
                Ways to contribute
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Help build us Build something great.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 lg:justify-self-end">
              Every partnership can be shaped around relevant expertise and
              resources. We agree on clear expectations and make sure both sides
              understand what will be delivered.
            </p>
          </div>

          <ol className="grid border-t border-zinc-300 dark:border-zinc-700 lg:grid-cols-2 lg:gap-x-12">
            {contributions.map((item, index) => (
              <li
                key={item.title}
                className="grid grid-cols-[auto_1fr] gap-6 border-b border-zinc-300 py-9 dark:border-zinc-700 md:gap-10 md:py-12"
              >
                <span className="font-mono text-sm font-black text-brand-700 dark:text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-black md:text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-lg leading-7 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-4 py-16 md:px-10 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-16 text-white md:px-16 md:py-24">
            <span aria-hidden="true" className="pointer-events-none absolute -right-4 -top-20 text-[15rem] font-black italic leading-none text-white/[0.04]">UFS</span>
            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-400">
                  Why partner with us
                </p>
                <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-8 text-zinc-300">
                <p>
                  We are developing an experienced team with strong technical
                  expertise, while creating a foundation for future generations
                  of Formula Student cars at Uppsala University.
                </p>
                <p>
                  Our business relations and finance teams work closely to
                  structure each agreement around clear, realistic commitments
                  we can confidently deliver.
                </p>
              </div>
            </div>
            <div className="relative mt-14 grid gap-5 border-t border-white/20 pt-8 text-sm font-bold uppercase tracking-[0.18em] text-brand-300 sm:grid-cols-3">
              <span>Design the car</span>
              <span>Build and test</span>
              <span>Share what we learn</span>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-4 pb-10 pt-16 md:px-10 md:pb-16">
          <div className="rounded-3xl bg-brand-700 px-7 py-16 text-center text-white shadow-2xl sm:px-10 md:py-24">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-100">
              Contact us
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              Let&apos;s find the right way to work together.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-100">
              Tell us about your organisation, expertise, or idea. We will get
              back to you and discuss a partnership that makes sense for both sides.
            </p>
            <a
              href="mailto:contact@uppsalaformulastudent.se?subject=Partnership%20with%20Uppsala%20Formula%20Student"
              className="mt-9 inline-flex max-w-full rounded-lg bg-white px-7 py-3.5 font-black text-brand-700 transition hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="truncate">contact@uppsalaformulastudent.se</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
