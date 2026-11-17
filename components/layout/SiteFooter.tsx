import type { ru } from "@/i18n/ru";
import styles from "./Layout.module.css";

export function SiteFooter({ copy }: { copy: typeof ru.contacts }) {
  return (
    <footer className={styles.footer}>
      <section id="contacts" aria-labelledby="contacts-title" className={styles.footerInner}>
        <h2 id="contacts-title">{copy.title}</h2>
        <p>{copy.text}</p>
      </section>
    </footer>
  );
}
