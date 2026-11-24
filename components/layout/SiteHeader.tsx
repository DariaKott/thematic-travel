"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ru } from "@/i18n/ru";
import styles from "./Layout.module.css";

export function SiteHeader({ copy }: { copy: typeof ru }) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateScroll = () => {
      header.dataset.scrolled = String(window.scrollY > 4);
    };
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateScroll();
    updateHeight();
    window.addEventListener("scroll", updateScroll, { passive: true });
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <>
      <div id="top" aria-hidden="true" />
      <header ref={headerRef} className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/#top">{copy.siteName}</Link>
          <nav aria-label={copy.navigationLabel} className={styles.navigation}>
            {copy.navigation.map((item) => (
              <Link href={`/${item.href}`} key={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
