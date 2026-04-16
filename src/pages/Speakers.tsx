import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mic2, Calendar, ArrowUpRight, Archive, Users, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const alumni = [
  { name: "Julie De Clercq", role: "CEO @ Bloom", topic: "Product-Led Growth", date: "Maart 2024", seed: "julie" },
  { name: "Kevin Janssens", role: "Founder @ PayIt", topic: "Fintech Regulations", date: "Februari 2024", seed: "kevin" },
  { name: "Sarah Smets", role: "Partner @ SeedFund", topic: "Pitching to VCs", date: "Januari 2024", seed: "sarahvc" },
  { name: "Dries Mertens", role: "CTO @ CloudBase", topic: "Scaling Infrastructure", date: "December 2023", seed: "dries" },
  { name: "Annelies Maes", role: "Founder @ GreenLife", topic: "Sustainable Business", date: "November 2023", seed: "annelies" },
  { name: "Bram Peeters", role: "Exit @ FoodDash", topic: "Operations at Scale", date: "Oktober 2023", seed: "bram" },
];

export default function Speakers() {
  return (
    <div className="bg-[#020203] text-white min-h-screen">

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020203]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[160px]"
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
              <Mic2 className="h-3 w-3 text-blue-400" aria-hidden="true" />
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.22em]">Gastsprekers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.92] mb-8 text-[clamp(2.8rem,8vw,6rem)]"
            >
              Leren van de{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                  architecten van morgen.
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
              Elke maand nodigen we een topspreker uit voor een exclusieve{" "}
              <span className="text-zinc-200 font-semibold">'off-the-record' sessie</span>.
              Geen PR-praatjes — echte lessen uit de loopgrachten.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── FEATURED UPCOMING SPEAKER ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">Eerstvolgende Sessie</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">Inschrijven open</span>
            </div>
          </motion.div>

          {/* Featured speaker card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group/card relative grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0 rounded-3xl overflow-hidden border border-white/[0.08] bg-zinc-900/40 backdrop-blur-sm"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 -z-10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            {/* Image panel */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img
                src="/event-the-gallerist.png"
                alt="Oprichter The Gallerist — gastspreker"
                className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-1000"
                style={{ objectPosition: 'center 20%' }}
                referrerPolicy="no-referrer"
              />
              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent opacity-60" />
              {/* Date bubble */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-blue-600 text-white border-none font-black uppercase tracking-widest text-[9px] px-3 py-1.5 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  Binnenkort · 20:00
                </Badge>
              </div>
            </div>

            {/* Content panel */}
            <div className="p-8 md:p-14 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-10 hidden md:block">
                <span className="text-[60px] font-black text-blue-500/5 tracking-tighter leading-none select-none">2024</span>
              </div>

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Eerstvolgende gastspreker</p>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                The Gallerist
              </h2>
              <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-2">
                Sneaker Entrepreneur <span className="w-1 h-1 rounded-full bg-blue-500/30" /> TikTok Scaling <span className="w-1 h-1 rounded-full bg-blue-500/30" /> E-commerce
              </p>

              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl italic border-l-2 border-blue-500/20 pl-6">
                "Van kleinschalig TikTok merk naar een miljoenenbedrijf — de enige manier om duurzaam te schalen in de moderne digitale economie."
              </p>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Mic2, label: "Specialisatie", value: "TikTok Marketing" },
                  { icon: Users, label: "Focus", value: "E-commerce Success" },
                  { icon: Calendar, label: "Format", value: "Growth Blueprint" },
                  { icon: ArrowUpRight, label: "Impact", value: "Miljoenen Revenue" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600 mb-0.5">{label}</p>
                      <p className="text-sm font-bold text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group bg-blue-600 text-white hover:bg-blue-500 rounded-full px-10 min-h-[56px] font-black uppercase tracking-widest text-xs transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] cursor-pointer"
                >
                  Meld je aan
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-full px-10 min-h-[56px] text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Projecten bekijken
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ALUMNI ARCHIVE ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
          >
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Alumni Archive</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Sprekers die ons voorgingen.</h2>
            </div>
            <div className="flex items-center gap-2 text-zinc-600">
              <Archive className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-[10px] font-black uppercase tracking-widest">24+ Sessies gearchiveerd</span>
            </div>
          </motion.div>

          {/* Alumni grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
            {alumni.map((person, i) => (
              <motion.article
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="bg-[#08080c] p-6 md:p-8 group hover:bg-[#0d0d16] transition-colors duration-300 cursor-pointer relative"
              >
                {/* Speaker image + date */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/[0.08] mb-5 group-hover:border-blue-500/40 transition-colors duration-300">
                  <img
                    src={`https://picsum.photos/seed/${person.seed}/120/120`}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-black tracking-tight mb-1 group-hover:text-white transition-colors">{person.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-4">{person.role}</p>

                <Badge
                  className="bg-white/[0.04] text-blue-400 border border-blue-500/20 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 mb-4 hover:bg-blue-500/10 transition-colors"
                >
                  {person.topic}
                </Badge>

                {/* Date + external arrow */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
                  <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">{person.date}</span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-700 group-hover:text-blue-400 transition-colors duration-300" aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOMINATE / CTA STRIP ── */}
      <section className="border-t border-white/[0.05] py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/8 blur-[80px]" aria-hidden="true" />

            <div className="max-w-xl">
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-3">Heb je een idee?</p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                Ken jij de perfecte gastspreker?
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nomineer iemand uit je netwerk. We nemen contact op als het een goede match is voor onze community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button
                render={<Link to="/aanmelden" />}
                nativeButton={false}
                size="lg"
                className="group bg-white text-black hover:bg-zinc-100 rounded-full px-8 min-h-[52px] font-black uppercase tracking-wider text-sm transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.18)] cursor-pointer"
              >
                Nomineer een spreker
              </Button>
              <Button
                render={<Link to="/events" />}
                nativeButton={false}
                variant="ghost"
                size="lg"
                className="rounded-full px-8 min-h-[52px] text-sm font-bold text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 active:scale-95 uppercase tracking-wider cursor-pointer"
              >
                Alle events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
