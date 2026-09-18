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
