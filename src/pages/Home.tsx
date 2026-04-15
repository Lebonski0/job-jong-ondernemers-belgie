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
    <div className="flex flex-col w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-transparent to-transparent opacity-70" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  84 van 100 plaatsen bezet
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]"
              >
                Het fundament voor <span className="text-zinc-600">Belgisch toptalent.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed"
              >
                Een exclusieve community van 100 ambitieuze ondernemers (18-30j). 
                Geen businessplan nodig, enkel de juiste drive.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Button 
                  render={<Link to="/aanmelden" />}
                  nativeButton={false}
                  size="lg" 
                  className="bg-white text-black hover:bg-zinc-200 rounded-md px-8 h-14 text-lg font-bold group"
                >
                  Word lid van de 100
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  Direct toegang tot Discord
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 shadow-2xl shadow-blue-500/5"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Huidige Capaciteit</span>
                <Badge className="bg-green-500/10 text-green-500 border-none hover:bg-green-500/20">LIVE</Badge>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-bold tracking-tighter">84</span>
                <span className="text-xl text-zinc-500 font-medium">/ 100 leden</span>
              </div>
              <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden mb-8">
                <div className="h-full bg-blue-500 w-[84%]" />
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                We sluiten de deuren bij 100 leden om de kwaliteit en diepgang van de connecties te garanderen. 
                Momenteel nog 16 plekken beschikbaar.
              </p>
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
                  className="rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all h-9 w-9"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => scroll('right')}
                  className="rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all h-9 w-9"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                render={<Link to="/events" />}
                nativeButton={false}
                variant="outline" 
                className="rounded-full border-zinc-800 text-white hover:bg-white hover:text-black transition-all px-5 h-9 font-bold text-[10px] uppercase tracking-widest"
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
            className="bg-zinc-900/20 rounded-[32px] border border-zinc-800/50 overflow-hidden group/card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Column */}
              <div className="lg:col-span-5 relative h-[300px] lg:h-[450px] overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-800/50">
                <img 
                  src="https://picsum.photos/seed/marcus/800/1000" 
                  alt="Marcus Thorne" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-white/10 backdrop-blur-md border-white/10 text-white font-black uppercase tracking-widest text-[8px] px-3 py-1">
                    Upcoming Session
                  </Badge>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 p-8 hidden md:block">
                  <span className="text-[40px] font-black text-zinc-800/30 tracking-tighter leading-none select-none">Q4</span>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-4">In-Focus Session</h4>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">Marcus Thorne</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-6">CEO, Stellar Logistics</p>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                    "Innovating Global Supply Chains with Disruptive Technology"
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50">
                      <Calendar className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-zinc-500 font-black uppercase tracking-widest text-[8px] mb-0.5">Session Date</p>
                      <p className="text-white font-bold text-sm">Coming Soon</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    render={<Link to="/gastsprekers" />}
                    nativeButton={false}
                    className="bg-white text-black hover:bg-zinc-200 rounded-lg px-8 h-12 text-xs font-black uppercase tracking-tighter transition-all active:scale-95"
                  >
                    Register Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg px-8 h-12 text-xs font-black uppercase tracking-tighter transition-all"
                  >
                    Learn More
                  </Button>
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
