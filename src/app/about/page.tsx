import Image from "next/image";
import { members } from "@/data/members";
import MemberCard from "@/components/MemberCard";

const departments = [
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

      <main className="overflow-x-clip text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pt-10 md:px-10 md:pt-16">
          <div className="relative min-h-[530px] overflow-hidden rounded-3xl md:min-h-[620px]">
            <Image
              src="/images/Angstrom-2020.jpg"
              alt="The Ångström Laboratory in Uppsala"
              fill
              priority
              sizes="(max-width: 1600px) 100vw, 1600px"
              className="object-cover object-[center_70%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
            <div className="absolute inset-0 flex items-end p-8 md:p-14 lg:p-16">
              <div className="max-w-4xl border-l-8 border-brand-600 pl-6 md:pl-10">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-200">
                  About us
                </p>
                <h1 className="mt-4 text-4xl font-black italic leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                  Uppsala Formula Student
                </h1>
                <p className="mt-7 max-w-3xl text-lg font-medium leading-relaxed text-zinc-100 md:text-xl">
                  We are a student-led team at Uppsala University designing,
                  building and preparing to compete with our first Formula
                  Student car. Students from different fields work together to
                  make the project possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1600px] gap-10 px-4 py-24 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-32">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-400">
              The competition
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
              What is Formula Student?
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p>
              Formula Student challenges university teams to develop a
              single-seat racing car. The work goes beyond driving: teams
              design, manufacture and test their vehicles, explain their
              engineering decisions and meet strict safety requirements.
            </p>
            <p>
              For UFS, the first step is building UFS01 and the organisation
              behind it. Our goal is to take the car from concept to competition
              while developing the skills and shared knowledge that future
              students can carry forward.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-4 md:px-10">
          <div className="grid overflow-hidden rounded-3xl bg-zinc-950 text-white lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-brand-800 p-8 md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-100">
                How we work
              </p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
                Build, learn, pass it on.
              </h2>
            </div>
            <div className="grid gap-8 p-8 sm:grid-cols-2 md:p-14">
              <div>
                <h3 className="text-2xl font-black">Safety first</h3>
                <p className="mt-3 leading-7 text-zinc-300">
                  Safe decisions shape the design, the workshop and the way we
                  prepare for competition.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-black">Learn together</h3>
                <p className="mt-3 leading-7 text-zinc-300">
                  We share expertise across departments and give students room
                  to take on meaningful work.
                </p>
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-black">Leave a foundation</h3>
                <p className="mt-3 max-w-2xl leading-7 text-zinc-300">
                  Documenting what works helps the next generation build on our
                  progress instead of starting over.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-4 py-24 md:px-10 lg:py-32">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-400">
            The people behind UFS01
          </p>
          <h2 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">
            Meet the team
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our departments bring together the people building the car and the
            organisation that supports it.
          </p>

          {departments.map((department) => {
            const teamMembers = members.filter((member) =>
              member.teams.includes(department.key)
            );

            return (
              <section key={department.key} id={department.key} className="scroll-mt-28">
                <div className="mb-8 mt-16 border-b border-brand-600/40 pb-5">
                  <h3 className="text-2xl font-black uppercase italic tracking-wide md:text-3xl">
                    {department.label}
                  </h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {teamMembers.map((member) => (
                    <MemberCard key={member.name} member={member} />
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
