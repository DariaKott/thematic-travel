import type { ru } from "@/i18n/ru";
import styles from "./Home.module.css";

export function AboutSection({ copy }: { copy: typeof ru.about }) {
  return (
    <section id="about" aria-labelledby="about-title" className={`${styles.container} ${styles.about}`}>
      <div className={styles.teamPhoto} aria-hidden="true" />
      <div><h2 id="about-title">{copy.title}</h2><p>{copy.text}</p></div>
    </section>
  );
}
