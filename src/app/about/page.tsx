import Link from "next/link";
import Image from "next/image";
import { members } from "@/data/members";
import MemberCard from "@/components/MemberCard";

const teams = [
  { key: "management", label: "Management" },
  { key: "chassis", label: "Chassis" },
  { key: "drivetrain", label: "Drivetrain" },
  { key: "electrical", label: "Electrical" },
] as const;

export default function About() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main>
      {/*About us section*/}
<section className="w-full py-24 sm:py-32">
  <div className="relative h-[70vh] min-h-[500px] overflow-hidden rounded-3xl">
    <Image
        src="/images/Angstrom-2020.jpg"
        alt="Uppsala Formula Student Team"
        fill
        priority
        className="object-cover object-[center_65%]"
    />

    {/* Darken image */}
    <div className="absolute inset-0 bg-black/55" />

    {/* Slight gradient for extra readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

    {/* Hero text */}
    <div className="absolute inset-0 flex items-end p-8 md:p-14 lg:p-16">
      <div className="relative max-w-4xl pl-8 md:pl-10">
        {/* red accent line */}
        <div
          className="
            absolute bottom-0 left-0 top-0 w-2
            rounded-full
            bg-gradient-to-b from-red-800 to-rose-900
          "
        />

        <h1
          className="
            text-4xl font-black italic
            leading-[0.95] tracking-[-0.04em]
            text-white
            md:text-6xl lg:text-7xl
          "
        >
          About Uppsala Formula Student
        </h1>

        <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-zinc-100 md:text-xl">
          Uppsala Formula Student is a student-led engineering team that
          designs, builds, and races a single-seater race car in the Formula
          Student competition. Our team is composed of passionate students
          from various engeneering fields, working together to push the boundaries of
          automotive engineering and innovation.
        </p>
      </div>
    </div>
  </div>
</section>
      {/*About formula student section*/}
        <section className="mx-auto grid w-full max-w-[1600px] gap-12 px-4 py-24 md:px-10 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-700 dark:text-brand-400">
              The competition
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              What is Formula Student?
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p>
              Formula Student is an international engineering competition.
              University teams design and build a single-seat race car, then
              explain their engineering choices and put the car to the test.
            </p>
            <p>
              The work extends well beyond driving. Teams present their design,
              costs and business case. Cars must pass safety inspections before
              taking part in events that test acceleration, handling and
              endurance.
            </p>
            <a
              href="https://www.formulastudent.de/fsg/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-bold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-600 dark:text-brand-400"
            >
              Learn more about the competition ↗
            </a>
          </div>
        </section>


        <section className="mx-auto w-full max-w-[1400px] px-4 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-700 dark:text-brand-400">
                Quick answers
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Questions about UFS?
              </h2>
            </div>
            <div className="divide-y divide-zinc-300 border-y border-zinc-300 dark:divide-zinc-700 dark:border-zinc-700">
              <details className="py-6">
                <summary className="cursor-pointer text-xl font-bold marker:text-brand-600">
                  Who can join?
                </summary>
                <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                  Bachelor&apos;s and master&apos;s students at Uppsala University
                  are welcome. The team needs people from technical and
                  nontechnical backgrounds.
                </p>
              </details>
              <details className="py-6">
                <summary className="cursor-pointer text-xl font-bold marker:text-brand-600">
                  Do I need motorsport experience?
                </summary>
                <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                  No. Curiosity, commitment and a willingness to learn with
                  others matter more than arriving with every answer.
                </p>
              </details>
              <details className="py-6">
                <summary className="cursor-pointer text-xl font-bold marker:text-brand-600">
                  How can I get involved?
                </summary>
                <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                  Explore the departments and roles on our{" "}
                  <Link href="/join" className="font-bold text-brand-700 underline underline-offset-4 dark:text-brand-400">
                    Join Us page
                  </Link>
                  , then tell us what you would like to contribute.
                </p>
              </details>
            </div>
          </div>
        </section>


      {/*Team section*/}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Meet the Departments
          </h1>

          {teams.map((team) => {
            const teamMembers = members.filter((member) =>
              member.teams.includes(team.key)
            );

            return (
              <section key={team.key} id={team.key}>
                <div className="my-12 flex items-center gap-5">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-red-600" />

                  <h2 className="whitespace-nowrap text-lg font-black uppercase italic tracking-[0.2em]">
                    {team.label}
                  </h2>

                  <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-red-600" />
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                    >
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </>
  );
}
