"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import styles from "./ImageCarousel.module.css";

type ImageCarouselProps = {
  images: readonly { src: StaticImageData; alt: string }[];
  label: string;
  previousLabel: string;
  nextLabel: string;
};

export function ImageCarousel({ images, label, previousLabel, nextLabel }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const image = images[index % images.length];

  if (!image) return null;

  function move(direction: number) {
    setIndex((current) => (current + direction + images.length) % images.length);
  }

  return (
    <div className={styles.carousel} role="group" aria-label={label}>
      <div className={styles.frame} aria-live="polite" aria-atomic="true">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 704px) calc(100vw - 32px), 640px" />
      </div>
      {images.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.previous}`} type="button" aria-label={previousLabel} onClick={() => move(-1)}>
            <span aria-hidden="true">‹</span>
          </button>
          <button className={`${styles.arrow} ${styles.next}`} type="button" aria-label={nextLabel} onClick={() => move(1)}>
            <span aria-hidden="true">›</span>
          </button>
        </>
      )}
    </div>
  );
}
