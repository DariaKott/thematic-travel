import type { ru } from "@/i18n/ru";
import styles from "./Layout.module.css";

export function SiteHeader({ copy }: { copy: typeof ru }) {
  return (
    <header id="top" className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#top">{copy.siteName}</a>
        <nav aria-label={copy.navigationLabel} className={styles.navigation}>
          {copy.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  );
}
