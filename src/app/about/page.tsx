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

      <main className="min-h-screen overflow-x-clip pb-10 text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pt-24 md:px-10">
          <div className="relative h-[60vh] min-h-[430px] overflow-hidden rounded-3xl">
            <Image
              src="/images/Angstrom-2020.jpg"
              alt="Uppsala Formula Student Team"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-end p-8 md:p-14 lg:p-16">
              <div className="relative max-w-4xl pl-8 md:pl-10">
                <div className="absolute bottom-0 left-0 top-0 w-2 rounded-full bg-gradient-to-b from-blue-500 to-indigo-900" />

                <h1 className="text-4xl font-black italic leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                  About Uppsala Formula Student
                </h1>

                <p className="mt-7 max-w-3xl text-lg font-semibold leading-relaxed text-zinc-100 md:text-xl">
                  Uppsala Formula Student is a student-led engineering team
                  designing and building our first electric race car for
                  Formula Student.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-[1400px] px-4 md:mt-24 md:px-10">
          <div className="grid gap-10 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/75 md:p-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
                Formula Student
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Engineering under pressure.
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Formula Student is one of the world&apos;s largest student
              engineering competitions. Teams must design, build and validate a
              race car while running the project like a professional
              organisation. The result is practical experience in product
              development, testing, leadership and collaboration.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Meet the team
          </h1>

          {teams.map((team) => {
            const teamMembers = members.filter((member) =>
              member.teams.includes(team.key)
            );

            return (
              <section key={team.key} id={team.key}>
                <div className="my-12 flex items-center gap-5">
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-blue-600" />

                  <h2 className="whitespace-nowrap text-lg font-black uppercase italic tracking-[0.2em]">
                    {team.label}
                  </h2>

                  <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-blue-600" />
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
