import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Garage",
  description:
    "Explore UFS01 and follow the development of Uppsala Formula Student's first car.",
};

export default function GaragePage() {
  // Keep the work in progress in the repository until real car media is ready.
  const garagePublished = false;
  if (!garagePublished) notFound();

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="overflow-x-clip text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-7 py-20 text-white shadow-2xl sm:px-10 md:px-16 md:py-28 lg:px-20">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-20 select-none text-[16rem] font-black italic leading-none tracking-[-0.08em] text-white/[0.04] md:text-[27rem]"
            >
              01
            </div>
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-red-400 via-red-600 to-rose-900" />

            <div className="relative max-w-5xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-red-300">
                The garage
              </p>
              <h1 className="mt-5 text-5xl font-black italic leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                UFS01: from concept
                <br />
                to competition.
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200 md:text-xl">
                Our first car is in development, with competition as our goal
                for 2027 or 2028. The team is building the design, knowledge
                and organisation needed to get there.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600 dark:text-red-400">
                Our cars
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                Our first car.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 lg:justify-self-end">
              UFS01 is our first complete vehicle programme. It is also the
              foundation for the processes, documentation, and technical
              knowledge future cars will inherit.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
