"use client";

import { useEffect } from "react";

type Props = {
  src: string;
  poster?: string;
  alt: string;
};

export default function CarModelViewer({
  src,
  poster,
  alt,
}: Props) {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={src}
      poster={poster}
      alt={alt}
      camera-controls
      auto-rotate
      shadow-intensity="1"

      camera-orbit="45deg 70deg 35%"
      min-camera-orbit="auto auto 15%"
      max-camera-orbit="auto auto 150%"
      field-of-view="25deg"

      interaction-prompt="none"

      className="
        h-[60vh]
        min-h-[500px]
        w-full
        rounded-2xl
        bg-zinc-100
        lg:h-[70vh]
        dark:bg-zinc-900
      "
    />
  );
}
