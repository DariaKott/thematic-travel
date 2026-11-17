import type { Venue } from "@/content/venues";
import type { ru } from "@/i18n/ru";
import { VenueCard } from "@/components/venues/VenueCard";
import styles from "./Home.module.css";

export function VenuesSection({ venues, copy }: { venues: readonly Venue[]; copy: typeof ru.venues }) {
  return (
    <section id="venues" aria-labelledby="venues-title" className={styles.venuesSection}>
      <div className={styles.container}>
        <h2 id="venues-title">{copy.title}</h2>
        <p className={styles.introduction}>{copy.introduction}</p>
        <div className={styles.venues}>{venues.map((venue) => <VenueCard venue={venue} key={venue.slug} />)}</div>
      </div>
    </section>
  );
}
