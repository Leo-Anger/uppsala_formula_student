
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Explore roles in chassi, drivetrain, and electrical at Uppsala Formula Student.",
};

type Role = {
  title: string;
  openings?: number;
  note?: string;
  responsibilities: string[];
};

type Department = {
  id: string;
  number: string;
  name: string;
  openings: number;
  description: string;
  roles: Role[];
};

const departments: Department[] = [
  {
    id: "management",
    number: "01",
    openings: 0,
    name: "Management",
    description:
      "Build the relationships and financial foundation that let the technical departments deliver.",
    roles: [
      {
        title: "No openings",
        responsibilities: [
          "Check back later for openings in management roles.",
        ],
      },
    ],
  },
  {
    id: "chassi",
    number: "02",
    openings: 0,
    name: "chassi",
    description:
      "Design the structure, vehicle dynamics hardware, and driver environment.",
    roles: [
      {
        title: "Frame and Structure",
        responsibilities: [
          "Design the car's frame, bodywork and structural mounting points.",
          "Coordinate how the structure supports the rest of the vehicle.",
        ],
      },
      {
        title: "Suspension",
        responsibilities: [
          "Design control arms, dampers and suspension mounting points.",
          "Develop suspension geometry with the wheels and uprights team.",
        ],
      },
      {
        title: "Steering",
        responsibilities: [
          "Design the steering system and its mechanical connections.",
          "Develop steering geometry and driver feedback with the suspension team.",
        ],
      },
      {
        title: "Brakes",
        responsibilities: [
          "Design and integrate the braking system.",
          "Make sure the car passes the brake test and meets all brake-related safety requirements.",
        ],
      },
      {
        title: "Wheels and Uprights",
        responsibilities: [
          "Own the wheel bearings, uprights, and hubs.",
          "Select tyres and wheels and manage their interface with the drivetrain.",
        ],
      },
      {
        title: "Driver Environment",
        responsibilities: [
          "Design the driver seat, pedal box, controls and firewall.",
          "Own driver ergonomics and make sure the cockpit meets inspection requirements.",
        ],
      },
    ],
  },
  {
    id: "drivetrain",
    number: "03",
    openings: 0,
    name: "Drivetrain",
    description:
      "Turn stored energy into controlled performance and integrate the complete drive system into the car.",
    roles: [
      {
        title: "Motors and Mounting",
        responsibilities: [
          "Select the motors and design their mounts.",
          "Integrate the motors into the chassi.",
        ],
      },
      {
        title: "Inverter and Motor Control",
        responsibilities: [
          "Select and install the inverter.",
          "Develop torque control and define how the motor or motors are controlled.",
        ],
      },
      {
        title: "Transmission and Driveshafts",
        responsibilities: [
          "Calculate gearing for the target top speed and acceleration.",
          "Design the differential, driveshafts, and chain or belt drive.",
        ],
      },
      {
        title: "Cooling System",
        responsibilities: [
          "Design cooling for the motors and inverter.",
          "Size the radiators, pumps, and required flow rates.",
        ],
      },
      {
        title: "Simulation and Performance",
        responsibilities: [
          "Build lap-time and acceleration models that support design decisions.",
          "Own and maintain the car's weight budget.",
        ],
      },
    ],
  },
  {
    id: "electrical",
    number: "04",
    openings: 0,
    name: "Electrical",
    description:
      "Build the accumulator, safety circuits, low-voltage system, sensing, and data architecture.",
    roles: [
      {
        title: "Accumulator Container Mechanics",
        responsibilities: [
          "Design the container that holds the car's battery.",
          "Own its structural strength, internal walls, and mounting to the car.",
        ],
      },
      {
        title: "Accumulator",
        openings: 2,
        responsibilities: [
          "Build the car's battery, including cells, segmentation, and fusing.",
          "Compare cell options based on energy, price, and lead time.",
        ],
      },
      {
        title: "Battery Monitoring",
        responsibilities: [
          "Monitor cells, temperature, and electrical isolation.",
          "Define how the system handles faults safely.",
        ],
      },
      {
        title: "Shutdown Circuit and Safety",
        responsibilities: [
          "Design the car's safety circuit, including emergency stops and switches.",
          "Make sure the vehicle shuts down safely whenever something goes wrong.",
        ],
      },
      {
        title: "Low Voltage and Data",
        responsibilities: [
          "Own the car's low-voltage system and wiring harness.",
          "Work with sensors, data logging, and the driver's interface.",
        ],
      },
    ],
  },
];

export default function JoinPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="overflow-x-clip text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-7 py-20 text-white shadow-2xl sm:px-10 md:px-16 md:py-28 lg:px-20">
          {/* <div
              aria-hidden="true"
              className="absolute -right-5 -top-20 select-none text-[14rem] font-black italic leading-none tracking-[-0.08em] text-white/[0.04] md:text-[24rem]"
            >
              20
            </div> */}
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-400 via-red-600 to-rose-900" />

            <div className="relative max-w-5xl">
              <h1 className="mt-5 text-5xl font-black italic leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Design, build and learn
                <br />
                with us.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                Take part in shaping Uppsala Formula Student&apos;s first car and the
                foundation of future teams will build on. We work together to learn,
                build expertise and expand our knowledge. We are looking for curious,
                committed and competative students.              </p> {/* or collaborative, creative, capable, cool, crazy, */}
              <a
                href="#open-roles"
                className="mt-9 inline-flex rounded-lg bg-white px-7 py-3.5 font-black text-zinc-950 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore the roles ↓
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600 dark:text-red-400">
                Find your place
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Four departments. One shared goal.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 lg:justify-self-end">
              Formula Student needs far more than one kind of engineer. A successful team needs people
              who want to solve problems together, share what
              they learn, play an active role in shaping and delivering project outcomes.
            </p>
          </div>

          <nav aria-label="Open role departments" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department) => (
              <a
                key={department.id}
                href={`#${department.id}`}
                className="group rounded-3xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 dark:border-zinc-800 dark:bg-zinc-950/80"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-black text-red-600 dark:text-red-400">
                    {department.number}
                  </span>
                  {/*<span className="rounded-full bg-red-50 px-3 py-1 text-xs font-black text-red-700 dark:bg-red-950 dark:text-red-300">
                    {department.openings} positions
                  </span> */}
                </div>
                <h3 className="mt-10 text-2xl font-black group-hover:text-red-600">
                  {department.name}
                </h3>
              </a>
            ))}
          </nav>
        </section>

        <section id="open-roles" className="mx-auto w-full max-w-[1400px] scroll-mt-28 px-4 py-16 md:px-10 md:py-24">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600 dark:text-red-400">
              Open roles
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Where do you want to contribute?
            </h2>
          </div>

          <div className="space-y-24">
            {departments.map((department) => (
              <section key={department.id} id={department.id} className="scroll-mt-28">
                <div className="grid gap-6 border-b border-zinc-300 pb-8 dark:border-zinc-700 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                  <div>
                    <p className="font-mono text-sm font-black text-red-600 dark:text-red-400">
                      department {department.number}
                    </p>
                    <h3 className="mt-3 text-4xl font-black italic tracking-tight md:text-6xl">
                      {department.name}
                    </h3>
                  </div>
                  <div className="lg:justify-self-end">
                    <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                      {department.description}
                    </p>
                    {/*<p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-zinc-500">
                      {department.openings} positions available
                    </p> */}
                  </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-2">
                  {department.roles.map((role) => (
                    <article
                      key={role.title}
                      className="rounded-3xl border border-zinc-200 bg-white/80 p-7 backdrop-blur-xl transition duration-300 hover:border-red-500 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/80 md:p-8"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <h4 className="max-w-xl text-2xl font-black tracking-tight">
                          {role.title}
                        </h4>
                        {/*<span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-black text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                          {role.openings ?? 1} {(role.openings ?? 1) === 1 ? "position" : "positions"}
                        </span> */}
                      </div>

                      {role.note && (
                        <p className="mt-3 text-sm font-semibold text-red-600 dark:text-red-400">
                          {role.note}
                        </p>
                      )}

                      <ul className="mt-6 space-y-3 text-zinc-600 dark:text-zinc-400">
                        {role.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex gap-3 leading-7">
                            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-red-600" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <div className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white/85 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/85 lg:grid-cols-2">
            <div className="p-8 md:p-14">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600 dark:text-red-400">
                What we expect
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Commitment over credentials.
              </h2>
            </div>
            <div className="border-t border-zinc-200 bg-zinc-100/80 p-8 dark:border-zinc-800 dark:bg-zinc-900/80 md:p-14 lg:border-l lg:border-t-0">
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                We welcome students from every programme and background. 
                Progress is a team effort: we prioritize safety, 
                share what we discover, and leave a clear path for those who come next.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 pb-10 pt-16 md:px-10 md:pb-16 md:pt-24">
          <div className="rounded-3xl bg-red-600 px-7 py-16 text-center text-white shadow-2xl sm:px-10 md:py-24">
            <h1 className="text-sm font-black uppercase tracking-[0.24em] text-red-100 md:text-4xl">
              Interested?
            </h1>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                Let us know.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-red-100">
              Mention the role or department that interests you, what you study, and
              what you would like to learn with UFS.
            </p>
            <a
              href="mailto:contact@uppsalaformulastudent.se?subject=Join%20Uppsala%20Formula%20Student"
              className="mt-9 inline-flex max-w-full rounded-lg bg-white px-7 py-3.5 font-black text-red-700 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="truncate">contact@uppsalaformulastudent.se</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
