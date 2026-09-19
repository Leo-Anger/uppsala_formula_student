import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export default function GaragePage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="min-h-screen overflow-x-clip pb-12 text-zinc-950 dark:text-white">
        <section className="mx-auto w-full max-w-[1600px] px-4 pt-24 md:px-10">
          <div className="grid gap-8 rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/75 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-blue-600">
                Our cars
              </p>

              <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                Garage
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                Explore the cars built by Uppsala Formula Student and discover
                the engineering behind each generation.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                Collection
              </p>
              <p className="mt-4 text-4xl font-black">{cars.length}</p>
              <p className="mt-2 text-zinc-300">
                Car projects documented with design choices, performance goals
                and development notes.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-14 w-full max-w-[1400px] px-4 md:px-10">
          <div className="mb-8 flex items-center gap-5">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-blue-600" />
            <h2 className="text-lg font-black uppercase italic tracking-[0.2em]">
              Generations
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-blue-600" />
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] px-4 md:px-10">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-100/80 p-7 text-zinc-700 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
            Every concept in the garage represents learning-by-building:
            systems integration, testing and iteration under real competition
            constraints.
          </div>
        </section>
      </main>
    </>
  );
}
