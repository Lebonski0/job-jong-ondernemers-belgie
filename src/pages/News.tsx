import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Newspaper, ArrowUpRight, Clock, Tag, Search, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function News() {
  const articles = [
    {
      title: "De Staat van Venture Capital in België: Trends voor 2024",
      excerpt: "Terwijl de globale markt afkoelt, zien we in België een opvallende veerkracht in de vroege fases. We spraken met 5 top-investeerders over hun verwachtingen.",
      tag: "Funding",
      date: "12 April, 2024",
      readTime: "6 min read",
      img: "https://picsum.photos/seed/news1/1200/600",
      featured: true
    },
    {
      title: "Waarom 'Profit First' de nieuwe 'Growth at all Costs' is",
      excerpt: "De shift in mindset bij jonge ondernemers is duidelijk: duurzaamheid en winstgevendheid staan centraal. Hoe pas je dit toe op een tech startup?",
      tag: "Growth",
      date: "8 April, 2024",
      readTime: "4 min read",
      img: "https://picsum.photos/seed/news2/1200/600"
    },
    {
      title: "AI in de Loopgrachten: Hoe Belgische KMO's echt innoveren",
      excerpt: "Vergeet de hype. We kijken naar 3 concrete cases waar AI zorgt voor een directe efficiëntie-verhoging van meer dan 30%.",
      tag: "Tech",
      date: "2 April, 2024",
      readTime: "8 min read",
      img: "https://picsum.photos/seed/news3/1200/600"
    },
    {
      title: "De Psychologie van de Exit: Wanneer is het genoeg?",
      excerpt: "Een bedrijf verkopen is meer dan een financiële transactie. Het is een emotionele rollercoaster. Founders delen hun ongezouten ervaringen.",
      tag: "Mindset",
      date: "28 Maart, 2024",
      readTime: "10 min read",
      img: "https://picsum.photos/seed/news4/1200/600"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 mb-4">INSIGHTS & UPDATES</h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              JOB <span className="text-zinc-800">JOURNAL</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block text-right"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4">Curated for the modern founder</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Zoek artikelen..." 
                className="bg-zinc-900/50 border border-zinc-800 rounded-full pl-9 pr-4 py-2 text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-blue-500/50 w-64 transition-all"
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Article */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-[21/9] rounded-[48px] overflow-hidden border border-zinc-800/50 bg-zinc-900 cursor-pointer"
          >
            <img 
              src={articles[0].img} 
              alt={articles[0].title} 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <Badge className="bg-blue-500 text-white border-none px-4 py-1 text-[10px] font-black uppercase tracking-widest">Featured</Badge>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{articles[0].date}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-8 line-clamp-2">
                {articles[0].excerpt}
              </p>
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-xs font-black uppercase tracking-tighter group/btn">
                Lees Artikel <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Article Grid */}
          <div className="lg:col-span-8 space-y-16">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Latest Stories</h3>
              <div className="h-px flex-1 bg-zinc-900 mx-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {articles.slice(1).map((article, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-8 bg-zinc-900 border border-zinc-800/50 relative">
                    <img 
                      src={article.img} 
                      alt={article.title} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-black/40 backdrop-blur-md border-white/5 text-zinc-400 font-black uppercase tracking-widest text-[8px] px-3 py-1">
                        {article.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:gap-4 transition-all">
                    Read Story <ChevronRight className="h-3 w-3 text-blue-500" />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="pt-12 text-center">
              <Button variant="outline" className="rounded-full border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-900 font-black uppercase tracking-widest text-[10px] px-12 h-14">
                Laad meer artikelen
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Newsletter Card */}
            <section className="p-10 rounded-[40px] bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors" />
              <Mail className="h-8 w-8 text-blue-500 mb-6" />
              <h3 className="text-2xl font-black tracking-tighter mb-4">Weekly Digest</h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8">
                Ontvang onze wekelijkse selectie van insights direct in je inbox. Geen spam, enkel waarde.
              </p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="jouw@email.com" 
                  className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-6 py-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-700"
                />
                <Button className="w-full bg-white text-black hover:bg-zinc-200 rounded-2xl h-14 font-black uppercase tracking-widest text-[10px] shadow-xl hover:shadow-white/5 transition-all active:scale-95">
                  Inschrijven
                </Button>
              </div>
            </section>

            {/* Categories */}
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-8 flex items-center gap-3">
                <Tag className="h-4 w-4 text-blue-500" /> Topics
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Funding", "Growth", "Tech", "Hiring", "Product", "Mindset", "Exit Strategy", "Legal"].map((tag) => (
                  <button 
                    key={tag} 
                    className="flex items-center justify-between px-5 py-3 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-white hover:text-black transition-all group text-left"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">{tag}</span>
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </section>

            {/* Editorial Note */}
            <section className="p-8 rounded-[32px] border border-zinc-900 bg-zinc-950/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Newspaper className="h-5 w-5 text-blue-500" />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">Editorial Note</h3>
              </div>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed italic mb-8">
                "Bij JOB geloven we niet in de waan van de dag. Onze redactie cureert enkel content die 
                echt impact heeft op hoe jij je business bouwt."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden grayscale">
                  <img src="https://picsum.photos/seed/editor/100/100" alt="Editor" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest">Redactie JOB</p>
                  <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Brussel, België</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
