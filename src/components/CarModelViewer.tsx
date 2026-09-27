"use client";

import { useEffect } from "react";
import type { ComponentType } from "react";

type CarModelViewerProps = {
  src: string;
  poster?: string;
  alt: string;
};

const ModelViewer = "model-viewer" as unknown as ComponentType<
  Record<string, unknown>
>;

export default function CarModelViewer({
  src,
  poster,
  alt,
}: CarModelViewerProps) {
  useEffect(() => {
    void import("@google/model-viewer");
  }, []);

  return (
    <ModelViewer
      src={src}
      poster={poster}
      alt={alt}
      camera-controls
      auto-rotate
      shadow-intensity="1"
      camera-orbit="35deg 68deg 75%"
      min-camera-orbit="auto auto 35%"
      max-camera-orbit="auto auto 160%"
      field-of-view="28deg"
      interaction-prompt="none"
      touch-action="pan-y"
      className="h-full min-h-full w-full bg-zinc-100 dark:bg-zinc-900"
    />
  );
}
