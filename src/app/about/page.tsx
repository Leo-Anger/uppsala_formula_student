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
{/* About us section */}
<section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
  {/* Hero image */}
  <div className="relative h-[55vh] min-h-[420px] overflow-hidden rounded-3xl">
    <Image
      src="/images/test/group.png"
      alt="Uppsala Formula Student Team"
      fill
      priority
      className="object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
  </div>

  {/* Floating box */}
  <div
    className="
      relative z-10 mx-auto -mt-20
      w-[calc(100%-2rem)] max-w-5xl
      rounded-2xl border border-zinc-300/60
      bg-zinc-100/90 p-8 shadow-2xl
      backdrop-blur-xl
      dark:border-zinc-700/60 dark:bg-zinc-950/85
      md:-mt-28 md:p-10
    "
  >
    {/* Blue accent line */}
    <div
      className="
        absolute bottom-8 left-5 top-8 w-2
        -translate-x-1/2 rounded-full
        bg-gradient-to-b from-blue-500 to-indigo-900
      "
    />

    <div className="pl-4 md:pl-6">
      <h1
        className="
          text-4xl font-black italic
          leading-[0.95] tracking-[-0.04em]
          md:text-6xl
        "
      >
        About Uppsala Formula Student
      </h1>

      <p className="mt-7 max-w-4xl text-lg font-semibold leading-relaxed md:text-xl">
        Uppsala Formula Student is a student-led engineering team that
        designs, builds, and races a single-seater race car in the Formula
        Student competition. Our team is composed of passionate students from
        various disciplines, working together to push the boundaries of
        automotive engineering and innovation.
      </p>
    </div>
  </div>
</section>
      {/*About formula student section*/}

      {/*Team section*/}
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
