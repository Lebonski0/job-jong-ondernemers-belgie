import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background atmosphere - Optimized blurs for mobile performance */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[#020203]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-indigo-700/8 rounded-full blur-[80px]"
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
              Exclusieve toegang · Nog <span className="text-white">65 plaatsen</span> beschikbaar
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.04em] leading-[0.90] mb-7 text-[clamp(2.5rem,8vw,6.5rem)]"
          >
            Het netwerk voor{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                Belgisch toptalent.
              </span>
              <span
                className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 rounded-full pointer-events-none"
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
                    src={`https://randomuser.me/api/portraits/${n % 2 === 0 ? 'women' : 'men'}/${n + 30}.jpg`}
                    alt={`Lid ${n}`}
                    className="w-full h-full object-cover grayscale"
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
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">35 actieve leden · 4.9/5</p>
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
                  <span className="text-4xl font-black tracking-tight text-white">35</span>
                  <span className="text-base text-zinc-500 font-medium">/ 100 leden</span>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/15 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 mb-1.5">
                  LIVE
                </Badge>
                <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Nog 65 vrij</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden mb-5" role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} aria-label="35 van 100 plaatsen bezet">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "35%" }}
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
  );
}
