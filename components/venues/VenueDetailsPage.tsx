import Image from "next/image";
import Link from "next/link";
import { ImageCarousel } from "@/components/gallery/ImageCarousel";
import type { Venue, VenueDetails, VenuePhoto } from "@/content/venues";
import { ru } from "@/i18n/ru";
import { minimumGroupLabel, restaurantLabel, venueAreaLabel, venueCount } from "./venueLabels";
import styles from "./VenueDetailsPage.module.css";

const copy = ru.venueDetails;

function Paragraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return paragraphs.map((text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/);
    return (
      <p key={text}>
        {parts.map((part, index) => index % 2 === 0 ? part : <strong key={index}>{part.slice(2, -2)}</strong>)}
      </p>
    );
  });
}

function SectionPhotos({ photos }: { photos?: readonly VenuePhoto[] }) {
  if (!photos?.length) return null;

  return (
    <div className={styles.photos}>
      {photos.map(({ src, alt }) => (
        <Image key={src.src} src={src} alt={alt} sizes="(max-width: 767px) calc(100vw - 32px), 480px" />
      ))}
    </div>
  );
}

export function VenueDetailsPage({ venue, details }: { venue: Venue; details: VenueDetails }) {
  const { formats, accommodation, spaces, dining, amenities, planning, contact } = details;
  const cover = details.coverPhoto ?? venue.mainPhoto;
  const roomLabel = venue.roomCount === undefined ? undefined : venueCount(venue.roomCount, copy.rooms);
  const restaurant = venue.restaurantCapacity === undefined ? undefined : restaurantLabel(venue.restaurantCapacity);
  const facts = [
    venue.minimumGroupSize === undefined ? undefined : minimumGroupLabel(venue.minimumGroupSize),
    details.roomCountLabel ?? roomLabel,
    venue.overnightCapacity === undefined ? undefined : `${copy.upTo} ${venueCount(venue.overnightCapacity, copy.guests)} ${copy.withStay}`,
    venue.areaHectares === undefined ? undefined : `${venueAreaLabel(venue.areaHectares)} ${copy.ofGrounds}`,
    dining ? undefined : restaurant,
  ].filter(Boolean);
  const showFormats = formats && (formats.items?.length || formats.paragraphs.length || formats.photos?.length);
  const showAccommodation = roomLabel ||
    (accommodation && (accommodation.paragraphs.length || accommodation.roomTypes?.length || accommodation.photos?.length));
  const showSpaces = spaces && (spaces.paragraphs.length || spaces.photos?.length);

  return (
    <main className={styles.container}>
      <div className={styles.back}>
        <Link href="/#venues" className={styles.link}>{copy.back}</Link>
      </div>
      <header className={styles.hero}>
        <h1>{venue.title}</h1>
        {details.propertyName && <p className={styles.propertyName}>{details.propertyName}</p>}
        <p className={styles.subtitle}>{details.introduction}</p>
        {facts.length > 0 && (
          <ul className={styles.facts} aria-label={copy.keyFacts}>
            {facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        )}
        {cover && (
          <Image
            className={styles.cover}
            src={cover.src}
            alt={cover.alt}
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1264px) calc(100vw - 64px), 1200px"
          />
        )}
      </header>

      {details.openingParagraphs?.length ? (
        <div className={styles.opening}><Paragraphs paragraphs={details.openingParagraphs} /></div>
      ) : null}

      {showSpaces ? (
        <section className={styles.section} aria-labelledby="venue-spaces">
          <h2 id="venue-spaces">{spaces?.heading ?? copy.spaces}</h2>
          {spaces && <Paragraphs paragraphs={spaces.paragraphs} />}
          {spaces?.photos?.length ? (
            <ImageCarousel images={spaces.photos} label={copy.spacesPhotos} {...ru.imageCarousel} />
          ) : null}
        </section>
      ) : null}

      {showFormats ? (
        <section className={styles.section} aria-labelledby="venue-formats">
          <h2 id="venue-formats">{formats.heading ?? copy.formats}</h2>
          {formats.items?.length ? (
            <ul className={styles.formats}>
              {formats.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : null}
          <Paragraphs paragraphs={formats.paragraphs} />
          <SectionPhotos photos={formats.photos} />
        </section>
      ) : null}

      {showAccommodation ? (
        <section className={styles.section} aria-labelledby="venue-accommodation">
          <h2 id="venue-accommodation">{accommodation?.heading ?? copy.accommodation}</h2>
          {roomLabel && !accommodation?.paragraphs.length && <p className={styles.fact}>{roomLabel}</p>}
          {accommodation && <Paragraphs paragraphs={accommodation.paragraphs} />}
          {accommodation?.roomTypes?.length ? (
            <div className={styles.roomTypes}>
              <h3>{copy.roomTypes}</h3>
              <dl>
                {accommodation.roomTypes.map(({ name, roomCount, beds, sleepingPlaces }) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    {roomCount !== undefined && <dd>{venueCount(roomCount, copy.rooms)}</dd>}
                    {beds && <dd>{beds}</dd>}
                    {sleepingPlaces !== undefined && <dd>{venueCount(sleepingPlaces, copy.sleepingPlaces)}</dd>}
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          {accommodation?.photos?.length ? (
            <ImageCarousel images={accommodation.photos} label={copy.accommodationPhotos} {...ru.imageCarousel} />
          ) : null}
        </section>
      ) : null}

      {[dining, amenities].map((section) => section?.heading && (section.paragraphs.length || section.photos?.length) ? (
        <section className={styles.section} key={section.heading}>
          <h2>{section.heading}</h2>
          <Paragraphs paragraphs={section.paragraphs} />
          <SectionPhotos photos={section.photos} />
        </section>
      ) : null)}

      {(planning?.paragraphs.length || contact) ? (
        <section className={styles.section} aria-labelledby="venue-contact">
          <h2 id="venue-contact">{planning?.heading ?? copy.contact}</h2>
          {planning && <Paragraphs paragraphs={planning.paragraphs} />}
          {contact && <a className={styles.link} href={contact.href}>{contact.label ?? copy.discuss}</a>}
        </section>
      ) : null}
    </main>
  );
}
