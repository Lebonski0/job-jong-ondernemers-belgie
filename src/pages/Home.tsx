import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Calendar, Mic2, Newspaper, CheckCircle2, ChevronRight, ChevronLeft, MapPin, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const upcomingEvents = [
    {
      title: "Scaling to Series A: The Playbook",
      type: "Workshop",
      date: "24 April, 2024",
      location: "Antwerpen / Online",
      image: "https://picsum.photos/seed/business1/800/600",
      icon: Mic2
    },
    {
      title: "Founder Dinner: Tech in Belgium",
      type: "Physical",
      date: "12 Mei, 2024",
      location: "Gent",
      image: "https://picsum.photos/seed/dinner/800/600",
      icon: Users
    },
    {
      title: "Mastermind: B2B Sales Strategy",
      type: "Online",
      date: "18 April, 2024",
      location: "Online",
      image: "https://picsum.photos/seed/sales/800/600",
      icon: Video
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#020203] text-white">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

        {/* Background atmosphere */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020203]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <motion.div
            animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -right-20 w-[600px] h-[600px] bg-indigo-700/12 rounded-full blur-[130px]"
          />
          <motion.div
            animate={{ x: [-40, 40, -40], y: [20, -20, 20] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]"
          />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">

            {/* Overline badge */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-md mb-10 cursor-default select-none"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.22em]">
                Exclusieve toegang · Nog <span className="text-white">16 plaatsen</span> beschikbaar
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.90] mb-7 text-[clamp(3rem,9vw,7rem)]"
            >
              Het netwerk voor{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                  Belgisch toptalent.
                </span>
                <span
                  className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 rounded-full pointer-events-none"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
            >
              De meest exclusieve community voor ambitieuze ondernemers van{" "}
              <span className="text-zinc-200 font-semibold">18 tot 30 jaar</span>.
              Geen businessplan vereist —{" "}
              <span className="text-zinc-200 font-semibold">enkel de drive om te groeien.</span>
            </motion.p>

            {/* Avatar stack social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="flex -space-x-2.5" role="list" aria-label="Huidige leden">
                {[1, 2, 3, 4, 5].map((n, i) => (
                  <div
                    key={i}
                    role="listitem"
                    className="w-9 h-9 rounded-full border-2 border-[#020203] overflow-hidden ring-1 ring-white/10 shrink-0"
                    style={{ zIndex: 5 - i }}
                  >
                    <img
                      src={`https://picsum.photos/seed/member${n}/80/80`}
                      alt={`Lid ${n}`}
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#020203] bg-zinc-900 ring-1 ring-white/10 flex items-center justify-center shrink-0" style={{ zIndex: 0 }}>
                  <span className="text-[9px] font-black text-zinc-400">+28</span>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 mb-1" aria-label="5 sterren rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">33 actieve leden · 4.9/5</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            >
              <Button
                render={<Link to="/aanmelden" />}
                nativeButton={false}
                size="lg"
                className="relative group bg-white text-black hover:bg-zinc-100 rounded-full px-10 min-h-[52px] h-[52px] text-sm font-black uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:shadow-[0_0_60px_rgba(255,255,255,0.22)] cursor-pointer"
              >
                Word lid van de 100
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button
                render={<Link to="/events" />}
                nativeButton={false}
                variant="ghost"
                size="lg"
                className="rounded-full px-8 min-h-[52px] h-[52px] text-sm font-bold text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 active:scale-95 uppercase tracking-wider cursor-pointer"
              >
                Bekijk events
              </Button>
            </motion.div>

            {/* Stat Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-3xl grid grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06] mb-14"
              role="list"
              aria-label="Community statistieken"
            >
              {[
                { value: "100", label: "Leden max.", sub: "Kwaliteit boven kwantiteit" },
                { value: "24+", label: "Events/jaar", sub: "Workshops · Dinners · Online" },
                { value: "18–30", label: "Leeftijd", sub: "Belgische founders & builders" },
              ].map((stat, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="bg-[#08080c] px-4 py-6 flex flex-col items-center text-center hover:bg-[#0d0d14] transition-colors duration-300 cursor-default"
                >
                  <span className="text-3xl md:text-4xl font-black tracking-[-0.04em] text-white mb-1">{stat.value}</span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-1">{stat.label}</span>
                  <span className="text-[9px] text-zinc-600 font-medium hidden md:block leading-tight">{stat.sub}</span>
                </div>
              ))}
            </motion.div>

            {/* Glassmorphism Capacity Card */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.07] rounded-2xl p-6 md:p-8 shadow-[0_0_80px_rgba(59,130,246,0.05)]"
              aria-label="Huidige capaciteit"
            >
              <div className="flex justify-between items-start mb-5">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-1.5">Huidige Capaciteit</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black tracking-tight text-white">33</span>
                    <span className="text-base text-zinc-500 font-medium">/ 100 leden</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/15 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 mb-1.5">
                    LIVE
                  </Badge>
                  <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Nog 67 vrij</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden mb-5" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} aria-label="33 van 100 plaatsen bezet">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "33%" }}
                  transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Deuren sluiten definitief bij 100 leden.{" "}
                  <span className="text-zinc-300 font-semibold">Direct toegang tot onze Discord na aanmelding.</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 border-b border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
              <Users className="h-5 w-5" /> 100+ LEDEN
            </div>
            <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
              <Calendar className="h-5 w-5" /> 24 EVENTS/JAAR
            </div>
            <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
              <Mic2 className="h-5 w-5" /> TOP SPREKERS
            </div>
            <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
              <CheckCircle2 className="h-5 w-5" /> YC ALUMNI
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Onze Fundamenten</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Waarom JOB anders is.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Radicale Kwaliteit",
                description: "We beperken onze community tot 100 leden. Dit garandeert dat elke interactie waardevol is en dat iedereen elkaar echt kent.",
                icon: Users
              },
              {
                title: "Toegang tot Expertise",
                description: "Van serie-ondernemers tot investeerders, wij brengen de top van de Belgische en internationale business wereld naar jou.",
                icon: Mic2
              },
              {
                title: "Actiegericht Netwerk",
                description: "Geen theoretisch gepraat. We focussen op echte groei, funding rondes, en het bouwen van schaalbare bedrijven.",
                icon: CheckCircle2
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <value.icon className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-zinc-500 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative group/section">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-3">Upcoming Events</h2>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter">Agenda</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 mr-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  className="rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all duration-200 active:scale-95 min-h-[44px] min-w-[44px] h-11 w-11"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  className="rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all duration-200 active:scale-95 min-h-[44px] min-w-[44px] h-11 w-11"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
              <Button 
                render={<Link to="/events" />}
                nativeButton={false}
                variant="outline" 
                className="rounded-full border-zinc-800 text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-95 px-6 min-h-[44px] font-bold text-[10px] uppercase tracking-widest"
              >
                Bekijk alles
              </Button>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {upcomingEvents.map((event, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="min-w-[280px] md:min-w-[420px] snap-start group relative h-[380px] rounded-[24px] overflow-hidden cursor-pointer border border-zinc-800/50"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-500/20 backdrop-blur-md border-blue-500/30 text-blue-400 hover:bg-blue-500/30 font-black uppercase tracking-widest text-[9px]">
                      {event.type}
                    </Badge>
                  </div>
                  <h4 className="text-2xl font-black tracking-tighter mb-3 leading-tight">{event.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-[9px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-blue-500" /> {event.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-blue-500" /> {event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </section>

      {/* Speaker Preview Section */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-zinc-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-3">Guest Speakers</h2>
              <h3 className="text-3xl font-black tracking-tighter">Spotlight</h3>
            </div>
            <Button 
              render={<Link to="/gastsprekers" />}
              nativeButton={false}
              variant="link" 
              className="text-zinc-500 hover:text-white font-black uppercase tracking-widest text-[9px] group"
            >
              Bekijk alle sprekers <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group/card relative rounded-[32px] overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/5 -z-10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

            <div className="bg-zinc-900/40 backdrop-blur-sm border border-white/[0.08] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Column */}
                <div className="lg:col-span-5 relative h-[400px] lg:h-[550px] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.05]">
                  <img 
                    src="/assets/speakers/vincent-tr.jpg" 
                    alt="Vincent Tr" 
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-1000"
                    style={{ objectPosition: 'center 20%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <Badge className="bg-blue-500 text-white border-none font-black uppercase tracking-widest text-[8px] px-3 py-1 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                      Featured Speaker
                    </Badge>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-8 md:p-14 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-8 hidden md:block">
                    <span className="text-[60px] font-black text-blue-500/5 tracking-tighter leading-none select-none">2024</span>
                  </div>

                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Spotlight Session</h4>
                      <div className="h-px w-8 bg-blue-500/30" />
                      <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">23 Years Old</span>
                    </div>
                    <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                      Vincent Tr
                    </h3>
                    <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-8 flex items-center gap-2">
                      Entrepreneur <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" /> Personal Branding <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" /> Online Scaling
                    </p>
                    <p className="text-zinc-200 text-lg md:text-2xl leading-relaxed max-w-xl font-medium italic border-l-2 border-blue-500/20 pl-6">
                      "Helping brands dominate their niche through <span className="text-blue-400">strategic scaling</span> and high-impact personal branding."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    <div className="space-y-1">
                      <p className="text-zinc-600 font-black uppercase tracking-widest text-[8px]">Expertise</p>
                      <p className="text-white font-bold text-sm">Online Scaling</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-zinc-600 font-black uppercase tracking-widest text-[8px]">Focus</p>
                      <p className="text-white font-bold text-sm">Brand Authority</p>
                    </div>
                    <div className="space-y-1 hidden md:block">
                      <p className="text-zinc-600 font-black uppercase tracking-widest text-[8px]">Impact</p>
                      <p className="text-white font-bold text-sm">Revenue Growth</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      render={<Link to="/aanmelden" />}
                      nativeButton={false}
                      className="bg-blue-600 text-white hover:bg-blue-500 rounded-full px-12 h-14 text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
                    >
                      Meld je aan voor sessie
                    </Button>
                    <Button 
                      render={<Link to="/gastsprekers" />}
                      nativeButton={false}
                      variant="outline"
                      className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 h-14 text-xs font-black uppercase tracking-widest transition-all backdrop-blur-md"
                    >
                      Alle sprekers
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Teaser Section */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Laatste Nieuws</h2>
              <h3 className="text-4xl font-bold tracking-tight">Curated insights.</h3>
            </div>
            <Button 
              render={<Link to="/nieuws" className="hidden md:block" />}
              nativeButton={false}
              variant="outline" 
              className="rounded-md border-zinc-800"
            >
              Alle artikelen
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Waarom België de perfecte hub is voor AI startups.",
                tag: "Tech",
                date: "12 April",
                author: "Redactie JOB"
              },
              {
                title: "5 Fouten die elke jonge founder maakt bij hun eerste ronde.",
                tag: "Funding",
                date: "8 April",
                author: "Marc Dubois"
              },
              {
                title: "De shift naar 'Profit First' in de huidige markt.",
                tag: "Growth",
                date: "2 April",
                author: "Sarah Janssens"
              }
            ].map((news, i) => (
              <Card key={i} className="border border-zinc-800 bg-zinc-900/50 rounded-2xl overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
                <CardContent className="p-8">
                  <Badge className="mb-6 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border-none">{news.tag}</Badge>
                  <h4 className="text-xl font-bold mb-8 leading-tight hover:text-blue-400 cursor-pointer transition-colors">
                    {news.title}
                  </h4>
                  <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    <span>{news.date}</span>
                    <span>Door {news.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-40 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[32px] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32 opacity-50" />
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 relative z-10">
              Klaar om je netwerk naar het <span className="text-blue-500 italic">volgende niveau</span> te tillen?
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
              We accepteren momenteel aanvragen voor de laatste 16 plaatsen. 
              Geen business plan nodig, enkel ambitie.
            </p>
            <Button 
              render={<Link to="/aanmelden" className="relative z-10" />}
              nativeButton={false}
              size="lg" 
              className="bg-white text-black hover:bg-zinc-200 rounded-md px-12 h-16 text-xl font-bold transition-all hover:scale-105 active:scale-95"
            >
              Meld je nu aan
            </Button>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">
              <span>100 Leden Max</span>
              <span>•</span>
              <span>Discord Access</span>
              <span>•</span>
              <span>Weekly Events</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
