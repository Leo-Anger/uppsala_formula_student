"use client";

import { useEffect, useId, useRef } from "react";
import type { Car } from "@/data/cars";
import CarModelViewer from "./CarModelViewer";

type CarModalProps = {
  car: Car;
  open: boolean;
  onClose: () => void;
};

export default function CarModal({ car, open, onClose }: CarModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm animate-[modal-backdrop_200ms_ease-out] sm:p-5"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[95dvh] w-full max-w-[1600px] overflow-y-auto rounded-3xl border border-zinc-200 bg-white p-5 shadow-2xl animate-[modal-pop_300ms_cubic-bezier(0.16,1,0.3,1)] dark:border-zinc-800 dark:bg-zinc-950 sm:p-7 md:p-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-white/90 text-2xl text-zinc-950 shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 dark:bg-zinc-800/90 dark:text-white dark:hover:bg-zinc-700 sm:right-6 sm:top-6"
          aria-label={`Close ${car.name} details`}
        >
          ×
        </button>

        <header className="mb-8 pr-14">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-600 dark:text-brand-400">
            Project {car.number} · {car.year}
          </p>
          <h2
            id={titleId}
            className="mt-2 text-4xl font-black italic tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-6xl"
          >
            {car.name}
          </h2>
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.75fr)] xl:gap-10">
          <div className="h-[52dvh] min-h-[360px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 sm:min-h-[460px] xl:h-[68dvh] xl:max-h-[820px]">
            {car.model ? (
              <CarModelViewer
                src={car.model}
                poster={car.images[0]}
                alt={`Interactive 3D model of ${car.name}`}
              />
            ) : (
              <div className="relative flex h-full items-center justify-center overflow-hidden p-8 text-center">
                <span
                  aria-hidden="true"
                  className="absolute text-[15rem] font-black italic leading-none text-zinc-950/[0.04] dark:text-white/[0.04] sm:text-[22rem]"
                >
                  {car.number}
                </span>
                <div className="relative max-w-md">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-600 dark:text-brand-400">
                    Interactive 3D view
                  </p>
                  <h3 className="mt-4 text-3xl font-black text-zinc-950 dark:text-white">
                    Model coming soon
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
                    The viewer is ready for the car&apos;s GLB file when the
                    current design is ready to publish.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col xl:py-2">
            <h3 className="text-2xl font-black text-zinc-950 dark:text-white md:text-3xl">
              {car.tagline}
            </h3>
            <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-300">
              {car.description}
            </p>

            {car.specs && car.specs.length > 0 && (
              <dl className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
                {car.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-[0.8fr_1.2fr] gap-5 py-4">
                    <dt className="text-sm text-zinc-500">{spec.label}</dt>
                    <dd className="text-right text-sm font-black text-zinc-950 dark:text-white">
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
