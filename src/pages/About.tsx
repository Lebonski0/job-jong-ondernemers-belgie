import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquare, Target, Zap, Users, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const faqs = [
  {
    q: "Heb ik een business idee nodig om lid te worden?",
    a: "Nee. We focussen op de persoon, niet op het project. Ambitie en de juiste mindset zijn belangrijker dan een uitgewerkt business plan.",
  },
  {
    q: "Waarom is er een limiet van 100 leden?",
    a: "We willen dat iedereen elkaar bij naam kent. Een kleinere groep zorgt voor diepere connecties en een hogere kwaliteit van interactie.",
  },
  {
    q: "Wat zijn de kosten van het lidmaatschap?",
    a: "We werken met een selectieprocedure. De details over de bijdrage worden gedeeld na een positief kennismakingsgesprek.",
  },
  {
    q: "Zijn de events verplicht?",
    a: "Niets is verplicht, maar we verwachten wel een actieve houding. De community is zo sterk als haar leden.",
  },
];

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] } } }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <span className="text-base md:text-lg font-bold text-white leading-snug">{faq.q}</span>
          <ChevronDown
            className={`h-5 w-5 text-zinc-500 shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180 text-blue-400" : ""}`}
            aria-hidden="true"
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400 leading-relaxed text-sm mt-4 overflow-hidden"
            >
              {faq.a}
            </motion.p>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="bg-[#020203] text-white min-h-screen">

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020203]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[140px]"
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
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.22em]">Onze Missie</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.92] mb-8 text-[clamp(2.8rem,7vw,5.5rem)]"
            >
              Bouwen aan de toekomst van{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                  Belgisch ondernemerschap.
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
              JOB is ontstaan uit een simpele observatie: jonge, ambitieuze mensen in België missen een plek
              waar ze gelijkgestemden kunnen ontmoeten —{" "}
              <span className="text-zinc-200 font-semibold">zonder de barrières van traditionele netwerkclubs.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── STORY / PHILOSOPHY — CHAPTER PILLARS ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Section label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="mb-14"
          >
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">Onze Filosofie</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Waarom JOB anders is.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05] mb-20">
            {[
              {
                icon: Users,
                num: "01",
                title: "Kwaliteit boven kwantiteit",
                body: "Wij limiteren de community bewust tot 100 leden. Dat geeft elk member de ruimte om écht gekend en gewaardeerd te zijn.",
              },
              {
                icon: Zap,
                num: "02",
                title: "Actie boven theorie",
                body: "Geen seminaries over theorie. We bouwen echte bedrijven, sluiten deals en maken introductie's die materie doen.",
              },
              {
                icon: Target,
                num: "03",
                title: "Inclusie via drive",
                body: "Je hoeft geen businessplan te hebben. Wij selecteren op karakter, ambitie en bereidheid om bij te dragen.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } } }}
                className="bg-[#08080c] p-8 md:p-10 group hover:bg-[#0d0d16] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.06] transition-all duration-300">
                    <pillar.icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-black text-zinc-700 tracking-widest">{pillar.num}</span>
                </div>
                <h3 className="text-xl font-black tracking-tight mb-3 group-hover:text-white transition-colors">{pillar.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Two-column: Who is JOB for + Discord card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* For-who section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Target className="h-4 w-4 text-blue-400" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-black tracking-tight">Voor wie is JOB?</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                Onze community is er voor iedereen tussen de 18 en 30 jaar die meer wil dan de status quo.
                Of je nu al een bedrijf runt, net je eerste stappen zet, of simpelweg de ambitie hebt om
                iets groots te bouwen — je bent welkom.
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Ambitieuze studenten met een ondernemersdrang",
                  "Early-stage founders die willen schalen",
                  "Creatievelingen en techneuten die impact willen maken",
                  "Iedereen die gelooft in de kracht van een sterk netwerk",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm font-medium" role="listitem">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Discord card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] } } }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/25 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-4 w-4 text-[#7289da]" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-black tracking-tight">Hoe Discord werkt</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                Onze dagelijkse interactie vindt plaats op Discord — onze digitale hub waar we kennis delen,
                vragen stellen, en elkaar helpen. Geen formele e-mails, maar directe toegang tot 99 andere
                scherpe geesten.
              </p>

              {/* Discord server preview card */}
              <div className="mt-auto rounded-xl bg-[#1e1f22] border border-white/[0.06] p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-black text-sm text-white">JOB Discord Server</p>
                    <div className="flex items-center gap-1.5 opacity-80">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" aria-hidden="true" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                      </span>
                      <span className="text-[10px] text-zinc-500 font-bold">33 online</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["#funding", "#growth", "#tech-stack", "#hiring", "#general"].map((ch) => (
                    <span key={ch} className="text-[10px] font-bold text-[#7289da] bg-[#5865F2]/10 border border-[#5865F2]/15 px-2.5 py-1 rounded-md">
                      {ch}
                    </span>
                  ))}
                </div>
                <Button
                  render={<a href="https://discord.gg/nXzZSUdR" target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  variant="outline"
                  className="w-full border-white/[0.08] text-zinc-300 hover:bg-white hover:text-black transition-all duration-300 active:scale-95 font-bold text-xs uppercase tracking-wider rounded-lg min-h-[44px] cursor-pointer"
                >
                  Bekijk Server
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <span className="text-5xl text-zinc-800 font-black mb-6 block" aria-hidden="true">"</span>
            <blockquote className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-white mb-6">
              Het netwerk dat je hier opbouwt is niet voor even,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                het is voor de rest van je carrière.
              </span>
            </blockquote>
            <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">— Team JOB</p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.07] mb-6">
              <HelpCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Veelgestelde Vragen</h2>
            <p className="text-zinc-500 text-sm">Alles wat je moet weten over JOB.</p>
          </motion.div>

          {/* Accordion FAQ */}
          <div className="space-y-3" role="list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.05]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="relative rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 blur-[80px] -translate-y-1/2" aria-hidden="true" />

            <p className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-4">Klaar om te beginnen?</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
              Word deel van de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">community</span>.
            </h2>
            <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed mb-10">
              Er zijn nog 16 plekken beschikbaar. Meld je aan en maak deel uit van
              België's meest exclusieve ondernemersnetwerk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                render={<Link to="/aanmelden" />}
                nativeButton={false}
                size="lg"
                className="group bg-white text-black hover:bg-zinc-100 rounded-full px-10 min-h-[52px] font-black uppercase tracking-wider text-sm transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.10)] hover:shadow-[0_0_60px_rgba(255,255,255,0.20)] cursor-pointer"
              >
                Meld je nu aan
              </Button>
              <Button
                render={<Link to="/events" />}
                nativeButton={false}
                variant="ghost"
                size="lg"
                className="rounded-full px-8 min-h-[52px] text-sm font-bold text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 active:scale-95 uppercase tracking-wider cursor-pointer"
              >
                Bekijk Events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
