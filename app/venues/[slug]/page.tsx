import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VenueDetailsPage } from "@/components/venues/VenueDetailsPage";
import { venues } from "@/content/venues";

type Props = PageProps<"/venues/[slug]">;

export function generateStaticParams() {
  return venues.flatMap(({ slug, details }) => details ? [{ slug }] : []);
}

async function getVenue(params: Props["params"]) {
  const { slug } = await params;
  const venue = venues.find((entry) => entry.slug === slug);

  if (!venue?.details) notFound();

  return { venue, details: venue.details };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { venue, details } = await getVenue(params);
  return { title: venue.title, description: details.introduction };
}

export default async function VenuePage({ params }: Props) {
  const { venue, details } = await getVenue(params);
  return <VenueDetailsPage venue={venue} details={details} />;
}
