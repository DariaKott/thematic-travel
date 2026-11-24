import { NextResponse, type NextRequest } from "next/server";
import { venues } from "./content/venues";

const publishedSlugs = new Set(venues.filter(({ details }) => details).map(({ slug }) => slug));

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];

  // Reject unknown venues before Partial Prefetching starts streaming a 200 response.
  let decodedSlug: string;
  try {
    decodedSlug = decodeURIComponent(slug);
  } catch {
    decodedSlug = "";
  }

  if (!publishedSlugs.has(decodedSlug)) {
    const notFoundUrl = request.nextUrl.clone();
    notFoundUrl.pathname = "/404";
    return NextResponse.rewrite(notFoundUrl, { status: 404 });
  }
}

export const config = {
  matcher: "/venues/:slug",
};
