import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const departments = [
  {
    title: "Management",
    description:
      "Coordinating the team, finances, partnerships, communications and events.",
  },
  {
    title: "Chassis",
    description:
      "Developing the frame, bodywork, suspension, steering, brakes and driver environment.",
  },
  {
    title: "Drivetrain",
    description:
      "Integrating motors, control, transmission, cooling and performance simulation.",
  },
  {
    title: "Electrical",
    description:
      "Building the accumulator, safety systems, wiring, sensing and data systems.",
  },
];

export default function Home() {
  return (
    <>
      {/* Fixed checker background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="min-h-screen overflow-x-clip text-zinc-950 dark:text-white">
        {/* HERO */}
        <section className="relative mx-auto w-full max-w-[1600px] px-4 pt-24 md:px-10">
          <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/main/hero.png"
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
              alt="Uppsala Formula Student team"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
          </div>

          <div
            className="
              relative -mt-20 ml-4 w-[min(90%,700px)]
              rounded-2xl border border-zinc-300/60
              bg-zinc-100/90 p-8 pt-16 shadow-2xl
              backdrop-blur-xl
              dark:border-zinc-700/60 dark:bg-zinc-950/85
              md:-mt-28 md:ml-14 md:p-10 md:pt-20
            "
          >
            <div
              className="
                absolute bottom-8 left-5 top-8 w-2
                -translate-x-1/2 rounded-full
                bg-gradient-to-b from-brand-600 to-accent-900
              "
            />

            <h1
              className="
                absolute -top-12 left-8 text-8xl
                font-black italic leading-none tracking-[-0.08em]
                md:-top-16 md:text-[10rem]
              "
            >
              UFS
            </h1>

            <div className="relative z-10">
              <p className="max-w-md text-xl font-semibold md:text-2xl">
                Building the future of student motorsport. 
              </p>

              <Button href="/about" className="mt-6">
                Learn more →
              </Button>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section
          id="mission"
          className="mx-auto mt-28 w-full max-w-[1600px] px-4 md:mt-36 md:px-10"
        >
          <div className="grid min-h-[380px] overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-16">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-accent-600">
                Our mission
              </p>

              <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
                More than a race car.
              </h2>
            </div>

            <div className="flex flex-col justify-center bg-brand-800 p-8 text-white md:p-16">
              <p className="max-w-2xl text-lg font-medium leading-relaxed md:text-xl">
                Uppsala Formula Student is a student-led team that designs,
                builds and competes with a Formula Student car. We give students
                practical experience in engineering, teamwork and project
                management while advancing sustainable motorsport.
              </p>

              <p className="mt-8 border-t border-white/25 pt-8 text-base leading-relaxed text-brand-100 md:text-lg">
                From the first design decisions to the finished car, students
                work across departments to turn ideas into practical experience.
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT PROJECT */}
        <section id="project" className="mx-auto mt-28 w-full max-w-[1600px] scroll-mt-28 px-4 md:mt-36 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-16 text-white shadow-2xl md:px-14 md:py-24">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-16 select-none text-[11rem] font-black italic leading-none tracking-[-0.08em] text-white/[0.04] md:text-[18rem]"
            >
              01
            </div>

            <div className="relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-brand-400">
                  Current project
                </p>

                <h2 className="max-w-3xl text-5xl font-black italic leading-[0.9] tracking-[-0.05em] md:text-8xl">
                  Building Our First Car.
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
                  Our first car begins long before the first component is
                  manufactured. We are building the team, technical knowledge
                  and organisation required to take our car from concept to
                  competition.
                </p>

                <a
                  href="https://www.instagram.com/uppsalafsa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-lg bg-white px-6 py-3 font-bold text-zinc-950 transition hover:bg-brand-100"
                >
                  Follow updates on Instagram ↗
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Student designed",
                  "Student built",
                  "Made in Uppsala",
                  "Sustainable motorsport",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-32 items-end rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                  >
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section className="mx-auto mt-28 w-full max-w-[1600px] px-4 md:mt-36 md:px-10">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-600">
                What we do
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Meet the departments.
              </h2>
            </div>

            <p className="max-w-md text-zinc-600 dark:text-zinc-400">
              Formula Student brings together students from across the
              university—not only traditional automotive engineering.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {departments.map((team) => (
              <Link
                key={team.title}
                href={`/about#${team.title.toLowerCase()}`}
                aria-label={`Meet the ${team.title} department`}
                className="group flex min-h-64 flex-col rounded-3xl border border-zinc-200 bg-white/75 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 dark:border-zinc-800 dark:bg-zinc-950/75 md:min-h-72 md:p-10"
              >
                <div className="mb-10 h-1 w-16 rounded-full bg-brand-600 transition group-hover:w-24" />

                <h3 className="text-3xl font-black">{team.title}</h3>

                <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {team.description}
                </p>
                <span aria-hidden="true" className="mt-auto self-end pt-6 text-2xl font-bold text-brand-600 transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section className="mx-auto mt-28 w-full max-w-[1600px] px-4 md:mt-36 md:px-10">
          <div className="grid gap-10 rounded-3xl border border-zinc-200 bg-zinc-100/80 p-8 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80 md:p-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-600">
                Partnerships
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Build the future with us.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                Our partners give students access to knowledge, materials and
                technology while supporting the next generation of engineers
                and leaders.
              </p>

              <Link
                href="/partnership"
                className="mt-7 inline-block font-bold text-brand-600 hover:text-brand-700"
              >
                Become a partner →
              </Link>
            </div>
          </div>
        </section>

        {/* RECRUITMENT CTA */}
        <section className="mx-auto mb-10 mt-28 w-full max-w-[1600px] px-4 md:mb-16 md:mt-36 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-8 py-20 text-center text-white md:px-16 md:py-28">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-brand-100">
                Join us
              </p>

              <h2 className="mx-auto max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Help shape what we build next.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg text-brand-100">
                Interested in engineering or motorsport? We welcome curious,
                committed bachelor&apos;s and master&apos;s students at Uppsala
                University who want to learn and contribute.
              </p>

              <Link
                href="/join#apply"
                className="mt-9 inline-flex rounded-lg bg-white px-7 py-3.5 font-bold text-brand-700 transition hover:bg-brand-50"
              >
                Apply now →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
