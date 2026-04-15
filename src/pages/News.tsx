import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Newspaper,
  ArrowRight,
  Clock,
  Tag,
  Mail,
  ChevronRight,
  ArrowUpRight,
  Search,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const TAG_COLORS: Record<string, string> = {
  Funding: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  Growth: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Tech: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  Mindset: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Hiring: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  Product: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  "Exit Strategy": "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Legal: "text-zinc-400 bg-zinc-500/10 border-zinc-500/20",
};

const articles = [
  {
    title: "De Staat van Venture Capital in België: Trends voor 2024",
    excerpt: "Terwijl de globale markt afkoelt, zien we in België een opvallende veerkracht in de vroege fases. We spraken met 5 top-investeerders over hun verwachtingen.",
    tag: "Funding",
    date: "12 April, 2024",
    readTime: "6 min",
    img: "https://picsum.photos/seed/news1/1200/700",
    featured: true,
  },
  {
    title: "Waarom 'Profit First' de nieuwe 'Growth at all Costs' is",
    excerpt: "De shift in mindset bij jonge ondernemers is duidelijk: duurzaamheid en winstgevendheid staan centraal. Hoe pas je dit toe op een tech startup?",
    tag: "Growth",
    date: "8 April, 2024",
    readTime: "4 min",
    img: "https://picsum.photos/seed/news2/1200/700",
  },
  {
    title: "AI in de Loopgrachten: Hoe Belgische KMO's echt innoveren",
    excerpt: "Vergeet de hype. We kijken naar 3 concrete cases waar AI zorgt voor een directe efficiëntie-verhoging van meer dan 30%.",
    tag: "Tech",
    date: "2 April, 2024",
    readTime: "8 min",
    img: "https://picsum.photos/seed/news3/1200/700",
  },
  {
    title: "De Psychologie van de Exit: Wanneer is het genoeg?",
    excerpt: "Een bedrijf verkopen is meer dan een financiële transactie. Het is een emotionele rollercoaster. Founders delen hun ongezouten ervaringen.",
    tag: "Mindset",
    date: "28 Maart, 2024",
    readTime: "10 min",
    img: "https://picsum.photos/seed/news4/1200/700",
  },
];

const topics = ["Funding", "Growth", "Tech", "Hiring", "Product", "Mindset", "Exit Strategy", "Legal"];

export default function News() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#020203] text-white min-h-screen">

      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-28 overflow-hidden border-b border-white/[0.05]">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020203]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 right-0 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[160px]"
          />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#020203] to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            {/* Left: headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-md mb-8"
              >
                <Newspaper className="h-3 w-3 text-blue-400" aria-hidden="true" />
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.22em]">Insights & Updates</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-black tracking-[-0.04em] leading-[0.90] text-[clamp(3rem,9vw,7rem)] mb-6"
              >
                JOB{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400">
                    Journal.
                  </span>
                  <span className="absolute inset-0 blur-3xl opacity-25 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full pointer-events-none" aria-hidden="true" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg text-zinc-400 max-w-xl leading-relaxed"
              >
                Gecureerde inzichten voor de moderne founder.{" "}
                <span className="text-zinc-200 font-semibold">Geen hype, enkel waarde.</span>
              </motion.p>
            </div>

            {/* Right: search */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-600 mb-3 text-right">Zoek artikelen</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Onderwerp, tag of auteur..."
                  aria-label="Zoek in artikelen"
                  className="bg-white/[0.03] border border-white/[0.08] rounded-full pl-10 pr-5 py-2.5 text-[11px] font-medium text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/30 w-72 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] cursor-pointer"
            style={{ aspectRatio: "21/9" }}
          >
            <img
              src={articles[0].img}
              alt={articles[0].title}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-[#020203]/60 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <Badge className={`border text-[9px] font-black uppercase tracking-widest px-3 py-1 ${TAG_COLORS[articles[0].tag]}`}>
                  Featured
                </Badge>
                <Badge className={`border text-[9px] font-black uppercase tracking-widest px-3 py-1 ${TAG_COLORS[articles[0].tag]}`}>
                  {articles[0].tag}
                </Badge>
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{articles[0].date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                {articles[0].title}
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-7 line-clamp-2 max-w-2xl">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-4">
                <Button className="group/btn bg-white text-black hover:bg-zinc-100 rounded-full px-8 min-h-[44px] font-black uppercase tracking-wider text-xs transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.10)] cursor-pointer">
                  Lees artikel
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                </Button>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  <span className="text-[9px] font-black uppercase tracking-widest">{articles[0].readTime} lezen</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLE GRID + SIDEBAR ── */}
      <section className="border-t border-white/[0.05] py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

            {/* ── LEFT: Article grid ── */}
            <div>
              {/* Section label */}
              <div className="flex items-center gap-4 mb-10">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 shrink-0">Latest Stories</p>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.slice(1).map((article, i) => (
                  <motion.article
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                    className="group cursor-pointer bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08080c]/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className={`border text-[9px] font-black uppercase tracking-widest px-2.5 py-1 ${TAG_COLORS[article.tag] ?? TAG_COLORS.Legal}`}>
                          {article.tag}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                        <span>{article.date}</span>
                        <span>·</span>
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-black tracking-tight mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-5">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors duration-300">
                        Lees meer
                        <ArrowUpRight className="h-3 w-3 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Load more */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-10 text-center"
              >
                <Button
                  variant="outline"
                  className="rounded-full border-white/[0.08] bg-white/[0.02] text-zinc-500 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.14] font-black uppercase tracking-widest text-[10px] px-10 min-h-[48px] transition-all active:scale-95 cursor-pointer"
                >
                  Laad meer artikelen
                </Button>
              </motion.div>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <aside className="space-y-6" aria-label="Sidebar">

              {/* Newsletter card */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6"
                aria-labelledby="newsletter-heading"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/8 blur-[60px]" aria-hidden="true" />
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                  <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                </div>
                <h3 id="newsletter-heading" className="text-lg font-black tracking-tight mb-2">Weekly Digest</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  Ontvang onze wekelijkse selectie van insights direct in je inbox.{" "}
                  <span className="text-zinc-300 font-semibold">Geen spam, enkel waarde.</span>
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="jouw@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="E-mailadres voor newsletter"
                    className="w-full bg-black/40 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/30 transition-all"
                  />
                  <Button className="w-full bg-white text-black hover:bg-zinc-100 rounded-xl min-h-[44px] font-black uppercase tracking-wider text-xs transition-all active:scale-95 cursor-pointer">
                    Inschrijven
                  </Button>
                </div>
                <p className="text-[9px] text-zinc-700 font-bold uppercase tracking-widest text-center mt-4">
                  Gratis · 33+ lezers · Elke maandag
                </p>
              </motion.section>

              {/* Topics */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6"
                aria-labelledby="topics-heading"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Tag className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                  <h3 id="topics-heading" className="text-[9px] font-black uppercase tracking-[0.28em] text-zinc-500">Topics</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {topics.map((tag) => (
                    <button
                      key={tag}
                      className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-200 active:scale-95 cursor-pointer hover:opacity-100 opacity-70 hover:scale-[1.02] ${TAG_COLORS[tag] ?? TAG_COLORS.Legal}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.section>

              {/* Editorial note */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6"
                aria-labelledby="editorial-heading"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Newspaper className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 id="editorial-heading" className="text-[9px] font-black uppercase tracking-[0.24em] text-zinc-400">Editorial Note</h3>
                </div>
                <blockquote className="text-zinc-400 text-sm leading-relaxed italic mb-6 border-l-2 border-blue-500/30 pl-4">
                  "Bij JOB geloven we niet in de waan van de dag. Onze redactie cureert enkel content die
                  echt impact heeft op hoe jij je business bouwt."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/[0.08] shrink-0">
                    <img
                      src="https://picsum.photos/seed/editor/100/100"
                      alt="Redactie JOB"
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-white">Redactie JOB</p>
                    <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">Brussel, België</p>
                  </div>
                </div>
              </motion.section>

              {/* CTA to join */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden bg-blue-500/[0.06] border border-blue-500/[0.15] rounded-2xl p-6 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5" aria-hidden="true" />
                <p className="text-[9px] font-black uppercase tracking-[0.28em] text-blue-500 mb-3">Word lid</p>
                <h3 className="text-lg font-black tracking-tight mb-2">Toegang tot alles</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                  Leden krijgen toegang tot exclusieve deep-dives, sessieverslagen en alumni-content.
                </p>
                <Button
                  render={<Link to="/aanmelden" />}
                  nativeButton={false}
                  className="w-full group bg-white text-black hover:bg-zinc-100 rounded-full min-h-[44px] font-black uppercase tracking-wider text-xs transition-all active:scale-95 cursor-pointer"
                >
                  Meld je aan
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </motion.div>
            </aside>

          </div>
        </div>
      </section>

    </div>
  );
}
