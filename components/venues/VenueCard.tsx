import Image from "next/image";
import Link from "next/link";
import { venueHref, type Venue } from "@/content/venues";
import { ru } from "@/i18n/ru";
import { minimumGroupLabel, venueCount } from "./venueLabels";
import styles from "./VenueCard.module.css";

export function VenueCard({ venue }: { venue: Venue }) {
  const titleId = `venue-${venue.slug}-title`;
  const linkId = `venue-${venue.slug}-link`;
  const copy = ru.venueDetails;
  const facts = [
    venue.minimumGroupSize !== undefined ? minimumGroupLabel(venue.minimumGroupSize) : venue.capacityLabel,
    venue.roomCount !== undefined ? venueCount(venue.roomCount, copy.rooms) : undefined,
  ].filter(Boolean);

  const cardClass = venue.details && !venue.mainPhoto ? `${styles.card} ${styles.textCard}` : styles.card;

  return (
    <article id={`venue-${venue.slug}`} className={cardClass} aria-labelledby={titleId}>
      {venue.mainPhoto ? (
        <div className={styles.photo}>
          <Image
            src={venue.mainPhoto.src}
            alt={venue.mainPhoto.alt}
            fill
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1264px) calc(50vw - 52px), 580px"
          />
        </div>
      ) : !venue.details && <div className={styles.photo} aria-hidden="true" />}
      <h3 id={titleId}>{venue.title}</h3>
      {venue.location && <p className={styles.location}>{venue.location}</p>}
      {facts.length > 0 && <p className={styles.capacity}>{facts.join(" · ")}</p>}
      <p className={styles.description}>{venue.cardDescription}</p>
      {venue.details && (
        <Link id={linkId} href={venueHref(venue.slug)} className={styles.more} aria-labelledby={`${linkId} ${titleId}`}>
          {copy.more}
        </Link>
      )}
    </article>
  );
}
