"use client";

import { useEffect } from "react";
import type { Car } from "@/data/cars";
import CarModelViewer from "./CarModelViewer";

type CarModalProps = {
  car: Car;
  open: boolean;
  onClose: () => void;
};

export default function CarModal({
  car,
  open,
  onClose,
}: CarModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 p-4
        backdrop-blur-sm
        animate-[modal-backdrop_200ms_ease-out]
      "
      onMouseDown={onClose}
    >
      <div
        className="
          relative
          max-h-[95vh]
          w-full max-w-[1500px]
          overflow-y-auto
          rounded-3xl
          bg-white
          p-6
          shadow-2xl
          dark:bg-zinc-950
          md:p-10

          animate-[modal-pop_300ms_cubic-bezier(0.16,1,0.3,1)]
        "
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            absolute right-6 top-6 z-20
            flex size-11 items-center justify-center
            rounded-full
            bg-zinc-100
            text-2xl
            transition
            hover:scale-110
            hover:bg-zinc-200
            dark:bg-zinc-800
            dark:hover:bg-zinc-700
          "
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="font-bold uppercase tracking-[0.18em] text-red-600">
            {car.year}
          </p>

          <h2 className="mt-2 text-4xl font-black tracking-tight text-zinc-950 dark:text-white md:text-6xl">
            {car.name}
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 xl:grid-cols-[2fr_1fr]">

          {/* 3D VIEW */}
          <div className="h-[50vh] min-h-[400px] rounded-2xl lg:h-[65vh]">
            {car.model ? (
              <CarModelViewer
                src={car.model}
                poster={car.images[0]}
                alt={`3D model of ${car.name}`}
              />
            ) : (
              <div
                className="
                  flex
                  h-[50vh]
                  min-h-[400px]
                  items-center justify-center
                  rounded-2xl
                  bg-zinc-100
                  text-zinc-500
                  lg:h-[65vh]
                  dark:bg-zinc-900
                "
              >
                3D model coming soon
              </div>
            )}
          </div>

          {/* Information */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-zinc-950 dark:text-white">
              {car.tagline}
            </h3>

            <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-300">
              {car.description}
            </p>

            {car.specs && (
              <dl className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                {car.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between gap-6 py-4"
                  >
                    <dt className="text-zinc-500">
                      {spec.label}
                    </dt>

                    <dd className="font-bold text-zinc-950 dark:text-white">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
