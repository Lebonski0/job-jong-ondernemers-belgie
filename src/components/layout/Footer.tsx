import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";

// ── Sponsors data ─────────────────────────────────────────────────────────────
const sponsors = [
  {
    name: "Rêveur Atelier",
    tagline: "Creative Studio",
    initials: "RA",
    color: "from-rose-500/20 to-pink-600/10",
    border: "border-rose-500/20",
    text: "text-rose-300",
  },
  {
    name: "Garmsourced",
    tagline: "Fashion & Sourcing",
    initials: "GS",
    color: "from-amber-500/20 to-yellow-600/10",
    border: "border-amber-500/20",
    text: "text-amber-300",
  },
];

// ── Nav columns ───────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Over ons", href: "/over-ons" },
  { label: "Gastsprekers", href: "/gastsprekers" },
  { label: "Events", href: "/events" },
  { label: "Nieuws", href: "/nieuws" },
  { label: "Aanmelden", href: "/aanmelden" },
];

const communityLinks = [
  { label: "Discord", href: "https://discord.gg/nXzZSUdR", external: true },
  { label: "Instagram", href: "#", external: true },
  { label: "LinkedIn", href: "#", external: true },
  { label: "Privacy Policy", href: "#", external: false },
];

// ── Component ─────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer
      className="bg-[#020203] border-t border-white/[0.05] text-white"
      aria-label="Sitefooter"
    >

      {/* ── SPONSORS STRIP ── */}
      <div className="border-b border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl py-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Label */}
            <div className="flex flex-col items-center md:items-start shrink-0">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-1">
                Official
              </p>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-300">
                Partners
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/[0.1] to-transparent" aria-hidden="true" />

            {/* Sponsor logos */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 lg:gap-10 w-full">
              {[
                { name: "Rêveur Atelier", tagline: "Creative Studio", initials: "RA" },
                { name: "Garmsourced", tagline: "Fashion & Sourcing", initials: "GS" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-zinc-900/30 border border-white/[0.04] hover:bg-zinc-800/50 hover:border-white/[0.08] transition-all duration-500 cursor-default"
                >
                  {/* Subtle inner glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/[0.03] to-transparent transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Monogram */}
                  <div className="w-10 h-10 rounded-xl bg-[#020203] border border-white/[0.06] flex items-center justify-center shrink-0 shadow-inner">
                    <span className="text-[11px] font-black tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-500">{s.initials}</span>
                  </div>
                  
                  {/* Name + tagline */}
                  <div className="leading-tight">
                    <p className="text-sm font-black tracking-wide text-zinc-200 group-hover:text-white transition-colors duration-500">{s.name}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-500 mt-1 transition-colors duration-500">{s.tagline}</p>
                  </div>
                </motion.div>
              ))}

              {/* Become a partner pill */}
              <motion.a
                href="/aanmelden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center gap-2 pl-4 pr-5 py-3 ml-auto rounded-full border border-zinc-800 bg-transparent hover:border-zinc-700 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                  <ArrowUpRight className="h-3 w-3 text-zinc-500 group-hover:text-zinc-300" aria-hidden="true" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  Word partner
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div className="container mx-auto px-4 max-w-6xl py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">

          {/* Brand column */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 mb-6 group"
              aria-label="JOB — naar startpagina"
            >
              <div className="w-9 h-9 bg-white flex items-center justify-center rounded-sm group-hover:scale-105 transition-transform duration-200">
                <span className="text-black font-black text-xs tracking-tight">JOB</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-black tracking-tighter text-white">JONG ONDERNEMERS</p>
                <p className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">BELGIË</p>
              </div>
            </Link>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-8">
              De meest exclusieve community voor de volgende generatie Belgische ondernemers.{" "}
              <span className="text-zinc-300 font-semibold">Kwaliteit boven kwantiteit, altijd.</span>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/[0.18] hover:bg-white/[0.06] transition-all duration-200 active:scale-95"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
              <a
                href="https://discord.gg/nXzZSUdR"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:border-indigo-500/40 hover:bg-indigo-500/[0.08] transition-all duration-200 active:scale-95"
              >
                {/* Discord SVG icon */}
                <svg className="h-3.5 w-3.5 text-zinc-500 group-hover:text-indigo-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav column */}
          <nav aria-label="Footer navigatie">
            <h4 className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-5">Navigatie</h4>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.label} role="listitem">
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 font-medium flex items-center gap-1 group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Community column */}
          <nav aria-label="Community links">
            <h4 className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-5">Community</h4>
            <ul className="space-y-3" role="list">
              {communityLinks.map((link) => (
                <li key={link.label} role="listitem">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 font-medium inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Jong Ondernemers België — Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">Alle systemen operationeel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
