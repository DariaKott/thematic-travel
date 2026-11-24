import type { ru } from "@/i18n/ru";
import styles from "./Home.module.css";

export function HeroSection({ copy }: { copy: typeof ru }) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1 id="hero-title">{copy.hero.title}</h1>
          <p>{copy.hero.description}</p>
          <a className={styles.button} href="#programs">{copy.viewPrograms}</a>
        </div>
      </div>
    </section>
  );
}
