import { lazy, Suspense } from "react";
import Hero from "@/components/sections/Hero";

// Lazy load sections below the fold
const SocialProof = lazy(() => import("@/components/sections/SocialProof"));
const Values = lazy(() => import("@/components/sections/Values"));
const EventsPreview = lazy(() => import("@/components/sections/EventsPreview"));
const SpeakerSpotlight = lazy(() => import("@/components/sections/SpeakerSpotlight"));
const NewsTeaser = lazy(() => import("@/components/sections/NewsTeaser"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));

/**
 * Loading component for lazy sections
 */
function SectionLoading() {
  return (
    <div className="w-full h-48 flex items-center justify-center bg-black/50">
      <div className="w-8 h-8 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative bg-[#020203] text-white overflow-x-hidden pt-16">
      <Hero />
      
      <Suspense fallback={<SectionLoading />}>
        <SocialProof />
        <Values />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <EventsPreview />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <SpeakerSpotlight />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <NewsTeaser />
      </Suspense>

      <Suspense fallback={<SectionLoading />}>
        <CTASection />
      </Suspense>
    </main>
  );
}
