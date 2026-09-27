"use client";

import Image from "next/image";
import { useState } from "react";

type CarCarouselProps = {
  images: string[];
  name: string;
};

export default function CarCarousel({
  images,
  name,
}: CarCarouselProps) {
  const [current, setCurrent] = useState(0);

  function previous() {
    setCurrent((current - 1 + images.length) % images.length);
  }

  function next() {
    setCurrent((current + 1) % images.length);
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-900">
      <Image
        src={images[current]}
        alt={`${name} image ${current + 1}`}
        fill
        className="object-cover transition"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={previous}
            className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Previous image"
          >
            &lt;
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Next image"
          >
            &gt;
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`size-2.5 rounded-full transition ${
                  index === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
