"use client";

import { useState } from "react";
import type { Car } from "@/data/cars";
import CarCarousel from "./CarCarousel";
import CarModal from "./CarModal";

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white/75 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950/75">
        <CarCarousel images={car.images} name={car.name} />

        <div className="p-4 pt-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
                {car.name}
              </h2>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {car.tagline}
              </p>
            </div>

            <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
              {car.year}
            </span>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="mt-7 font-bold text-red-600 transition hover:text-red-700"
          >
            Learn more →
          </button>
        </div>
      </article>

      <CarModal
        car={car}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
