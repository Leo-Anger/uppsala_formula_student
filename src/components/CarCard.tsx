"use client";

import { useCallback, useState } from "react";
import type { Car } from "@/data/cars";
import CarCarousel from "./CarCarousel";
import CarModal from "./CarModal";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const [open, setOpen] = useState(false);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <>
      <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white/80 p-3 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-950/80 sm:p-4">
        <CarCarousel images={car.images} name={car.name} />

        <div className="relative overflow-hidden px-4 pb-5 pt-7 sm:px-5 sm:pb-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-2 select-none font-mono text-[8rem] font-black leading-none text-zinc-950/[0.035] dark:text-white/[0.04]"
          >
            {car.number}
          </span>

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600 dark:text-red-400">
                Project {car.number}
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                {car.name}
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
                {car.tagline}
              </p>
            </div>

            <span className="w-fit shrink-0 rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-700 dark:bg-red-950 dark:text-red-300">
              {car.year}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative mt-8 inline-flex items-center rounded-lg bg-zinc-950 px-5 py-3 font-black text-white transition hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-red-400"
          >
            Explore {car.name} →
          </button>
        </div>
      </article>

      <CarModal car={car} open={open} onClose={closeModal} />
    </>
  );
}
