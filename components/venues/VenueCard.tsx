import type { Venue } from "@/content/venues";
import styles from "./VenueCard.module.css";

export function VenueCard({ venue }: { venue: Venue }) {
  return (
    <article id={`venue-${venue.slug}`} className={styles.card} aria-labelledby={`venue-${venue.slug}-title`}>
      <div className={styles.photo} aria-hidden="true" />
      <h3 id={`venue-${venue.slug}-title`}>{venue.title}</h3>
      <p className={styles.location}>{venue.location}</p>
      <p className={styles.capacity}>{venue.capacityLabel}</p>
      <p className={styles.description}>{venue.description}</p>
    </article>
  );
}
