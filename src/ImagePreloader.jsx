import { useEffect } from "react";

export default function ImagePreloader({ onComplete }) {
  useEffect(() => {
    const imageModules = import.meta.glob(
      "./assets/images/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );

    const imageUrls = Object.values(imageModules).map(
      (module) => module.default
    );

    Promise.all(
      imageUrls.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    ).then(() => {
      onComplete();
    });
  }, [onComplete]);

  return null;
}