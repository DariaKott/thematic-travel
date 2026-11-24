import type { Program } from "@/content/programs";
import type { ru } from "@/i18n/ru";
import { ProgramCard } from "@/components/programs/ProgramCard";
import styles from "./Home.module.css";

export function OpenProgramsSection({ programs, copy }: { programs: readonly Program[]; copy: typeof ru.programs }) {
  return (
    <section id="programs" aria-labelledby="programs-title" className={`${styles.container} ${styles.section}`}>
      <div className={styles.sectionHeading}>
        <h2 id="programs-title">{programs.length ? copy.title : copy.emptyTitle}</h2>
        {programs.length > 0 && <p className={styles.programsIntroduction}>{copy.introduction}</p>}
      </div>
      {programs.length ? <div className={styles.programs}>{programs.map((program) => <ProgramCard key={program.slug} program={program} />)}</div> : <p className={styles.empty}>{copy.emptyText}</p>}
    </section>
  );
}
