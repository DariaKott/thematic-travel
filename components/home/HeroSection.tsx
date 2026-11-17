import type { ru } from "@/i18n/ru";
import styles from "./Home.module.css";

export function HeroSection({ copy }: { copy: typeof ru }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <h1 id="hero-title">{copy.siteName}</h1>
        <p>{copy.description}</p>
        <a className={styles.button} href="#programs">{copy.viewPrograms}</a>
      </div>
    </section>
  );
}
