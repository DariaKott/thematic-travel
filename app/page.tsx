import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { OpenProgramsSection } from "@/components/home/OpenProgramsSection";
import { VenuesSection } from "@/components/home/VenuesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { programs } from "@/content/programs";
import { venues } from "@/content/venues";
import { ru } from "@/i18n/ru";

export default function Home() {
  const openPrograms = programs.filter((program) => program.status === "open").sort((a, b) => a.order - b.order);

  return (
    <>
      <SiteHeader copy={ru} />
      <main>
        <HeroSection copy={ru} />
        <OpenProgramsSection programs={openPrograms} copy={ru.programs} />
        <VenuesSection venues={venues} copy={ru.venues} />
        <AboutSection copy={ru.about} />
      </main>
      <SiteFooter copy={ru.contacts} />
    </>
  );
}
