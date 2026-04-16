import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar as CalendarIcon,
  MapPin,
  Users,
  Video,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Clock,
  Archive,
  Zap,
  Mic2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { upcomingEvents } from "@/data/events";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};


const formats = [
  {
    icon: Video,
    title: "Online Deep-Dives",
    desc: "Focus op specifieke skills. Van SEO tot fundraising, geleid door experts uit de community.",
    count: "12×/jaar",
  },
  {
    icon: Users,
    title: "Physical Meetups",
    desc: "Informele diners en drinks in de grote Belgische steden. Netwerken op z'n best.",
    count: "8×/jaar",
  },
  {
    icon: Zap,
    title: "Intensive Workshops",
    desc: "Hands-on sessies waar we echt aan je business werken. Geen theorie, enkel resultaat.",
    count: "4×/jaar",
  },
];

const pastRecaps = [
  {
    title: "JOB Summit 2023",
    desc: "Een weekend vol inspiratie, workshops en nieuwe vriendschappen in de Belgische Ardennen.",
    img: "https://picsum.photos/seed/summit/1200/700",
    tag: "Summit",
    attendees: "33",
  },
  {
    title: "Dinner with a Billionaire",
    desc: "Een exclusieve avond met Marc Coucke over de toekomst van investeren in de Belgische tech scene.",
    img: "https://picsum.photos/seed/dinner2/1200/700",
    tag: "Dinner",
    attendees: "20",
  },
];

export default function Events() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -420 : 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#020203] text-white min-h-screen">

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020203]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-800/8 rounded-full blur-[130px]"
          />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#020203] to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-md mb-8"
            >
              <CalendarIcon className="h-3 w-3 text-blue-400" aria-hidden="true" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.22em]">Onze Agenda</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.92] mb-8 text-[clamp(2.8rem,8vw,6rem)]"
            >
              Connectie door{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                  ervaring.
                </span>
                <span className="absolute inset-0 blur-3xl opacity-25 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full pointer-events-none" aria-hidden="true" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
            >
              Van intieme diners tot intensieve workshops en online deep-dives.
              Onze events zijn ontworpen voor{" "}
              <span className="text-zinc-200 font-semibold">echte waarde en connectie</span>{" "}
              tussen de 100 leden.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 mt-10"
            >
              {[
                { value: "24+", label: "Events per jaar" },
                { value: "5", label: "Komende events" },
                { value: "100%", label: "Exclusief voor leden" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl font-black tracking-tight text-white">{s.value}</span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-tight max-w-[80px]">{s.label}</span>
                  {i < 2 && <div className="h-6 w-px bg-white/[0.07] ml-3" aria-hidden="true" />}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS — HORIZONTAL SCROLL ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Komende Events</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Agenda</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-200 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Scroll strip */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            role="list"
            aria-label="Komende events"
          >
            {upcomingEvents.map((event, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                role="listitem"
                className="w-[300px] md:w-[380px] snap-start flex-shrink-0"
              >
                <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] group flex flex-col">
                  {/* Background image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/80 to-[#08080c]/30" />

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    {/* Top row: date + spots */}
                    <div className="flex items-start justify-between mb-auto">
                      <div className="flex flex-col leading-none">
                        {event.day ? (
                          <>
                            <span className="text-5xl font-black tracking-[-0.05em]">{event.day}</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{event.month}</span>
                          </>
                        ) : (
                          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 mt-1">Binnenkort</span>
                        )}
                      </div>
                      <Badge
                        className={cn(
                          "rounded-full text-[9px] font-black uppercase tracking-widest border-none",
                          event.full
                            ? "bg-red-500/15 text-red-400 border border-red-500/20"
                            : "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                        )}
                      >
                        {event.spots}
                      </Badge>
                    </div>

                    {/* Bottom content */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <event.icon className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">{event.type}</span>
                      </div>
                      <h3 className="text-lg font-black tracking-tight mb-2 leading-snug line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-600 mb-5">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        <span>{event.time}</span>
                      </div>
                      <Button
                        disabled={event.full}
                        className={cn(
                          "w-full rounded-full min-h-[44px] font-black uppercase tracking-wider text-xs transition-all active:scale-95 cursor-pointer",
                          event.full
                            ? "bg-white/[0.05] text-zinc-500 border border-white/[0.07] cursor-default"
                            : "bg-white text-black hover:bg-zinc-100 shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:shadow-[0_0_50px_rgba(255,255,255,0.18)]"
                        )}
                      >
                        {event.full ? "Wachtlijst" : "Claim je plek"}
                        {!event.full && <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Hide scrollbar globally on this element */}
          <style>{`.snap-x::-webkit-scrollbar { display: none; }`}</style>
        </div>
      </section>

      {/* ── EVENT FORMATS ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Onze Formats</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Verschillende manieren om te groeien.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
            {formats.map((fmt, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-[#08080c] p-8 md:p-10 group hover:bg-[#0d0d16] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.07] transition-all duration-300">
                    <fmt.icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-black text-zinc-700 tracking-widest">{fmt.count}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight mb-3">{fmt.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{fmt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST EVENT RECAPS ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
          >
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Archief</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Recente Terugblikken.</h2>
            </div>
            <div className="flex items-center gap-2 text-zinc-600 cursor-pointer hover:text-white transition-colors group">
              <Archive className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-widest">Volledig archief</span>
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastRecaps.map((recap, i) => (
              <motion.article
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] mb-6">
                  <img
                    src={recap.img}
                    alt={recap.title}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020203]/60 to-transparent" />

                  {/* Overlaid badges */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <Badge className="bg-white/10 backdrop-blur-md border-white/[0.15] text-white font-black uppercase tracking-widest text-[9px]">
                      {recap.tag}
                    </Badge>
                  </div>
                  <div className="absolute top-5 right-5">
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/[0.08] px-3 py-1.5 rounded-full">
                      <Users className="h-3 w-3 text-zinc-400" aria-hidden="true" />
                      <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{recap.attendees} aanwezig</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-2xl font-black tracking-tight mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {recap.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{recap.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-60 bg-blue-600/8 blur-[80px]" aria-hidden="true" />

            <div className="max-w-xl">
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-3">Toegang tot alle events</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                Word lid en reserveer jouw plek.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Alle events zijn exclusief voor leden. Word lid van de community en heb toegang
                tot het volledige jaarlijkse event-programma.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                render={<Link to="/aanmelden" />}
                nativeButton={false}
                size="lg"
                className="group bg-white text-black hover:bg-zinc-100 rounded-full px-8 min-h-[52px] font-black uppercase tracking-wider text-sm transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.18)] cursor-pointer"
              >
                Word lid van JOB
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button
                render={<Link to="/over-ons" />}
                nativeButton={false}
                variant="ghost"
                size="lg"
                className="rounded-full px-8 min-h-[52px] text-sm font-bold text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 active:scale-95 uppercase tracking-wider cursor-pointer"
              >
                Over ons
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
