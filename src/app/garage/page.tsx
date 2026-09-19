import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

export default function GaragePage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="racing-background absolute -inset-[20%] rotate-[-8deg] scale-125" />
      </div>

      <main className="mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
            Our cars
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-tight text-zinc-950 dark:text-white md:text-7xl">
            Garage
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Explore the cars built by Uppsala Formula Student and discover the
            engineering behind each generation.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </main>
    </>
  );
}
