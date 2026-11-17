import type { Program } from "@/content/programs";
import styles from "./ProgramCard.module.css";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article id={`program-${program.slug}`} className={styles.card} aria-labelledby={`program-${program.slug}-title`}>
      <div className={styles.photo} aria-hidden="true" />
      <div className={styles.details}>
        <h3 id={`program-${program.slug}-title`}>{program.title}</h3>
        <p className={styles.date}>{program.dateLabel}</p>
        <p className={styles.location}>{program.location}</p>
        <p className={styles.description}>{program.description}</p>
      </div>
    </article>
  );
}
