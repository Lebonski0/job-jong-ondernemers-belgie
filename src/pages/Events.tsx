import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Users, Video, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Events() {
  const [currentMonth, setCurrentMonth] = useState("April 2024");
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
      date: "18 April",
      title: "Mastermind: B2B Sales Strategy",
      type: "Online",
      time: "19:00 - 21:00",
      spots: "12/15",
      icon: Video,
      image: "https://picsum.photos/seed/sales/800/600",
      description: "Leer hoe je high-ticket B2B deals sluit zonder koud te bellen."
    },
    {
      date: "24 April",
      title: "Thomas Van Damme: The Art of the Exit",
      type: "Workshop",
      time: "20:00 - 22:00",
      spots: "Volzet",
      icon: Users,
      image: "https://picsum.photos/seed/exit/800/600",
      description: "Exclusieve sessie over het verkopen van je bedrijf voor 8+ figuren."
    },
    {
      date: "12 Mei",
      title: "Founder Dinner Gent: Tech & Growth",
      type: "Physical",
      time: "18:30 - Late",
      spots: "4/20",
      icon: MapPin,
      image: "https://picsum.photos/seed/dinner3/800/600",
      description: "Een intiem diner met 20 andere founders in het hartje van Gent."
    },
    {
      date: "28 Mei",
      title: "Product-Led Growth Masterclass",
      type: "Online",
      time: "19:00 - 21:00",
      spots: "8/25",
      icon: Video,
      image: "https://picsum.photos/seed/product/800/600",
      description: "Hoe je product je beste marketingkanaal wordt."
    },
    {
      date: "5 Juni",
      title: "Summer Networking Drinks",
      type: "Physical",
      time: "17:00 - 21:00",
      spots: "45/100",
      icon: Users,
      image: "https://picsum.photos/seed/drinks/800/600",
      description: "Vier de zomer met de community op een unieke rooftop locatie."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 bg-zinc-900 text-zinc-400 hover:bg-zinc-900 border-none px-4 py-1 font-bold uppercase tracking-widest text-[10px]">Onze Agenda</Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Connectie door <span className="text-zinc-700">ervaring.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
              Van intieme diners tot intensieve workshops en online deep-dives. 
              Onze events zijn ontworpen om echte waarde en connectie te creëren tussen de 100 leden.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Section */}
        <section className="mb-24 relative group">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-3">Upcoming Events</h2>
              <h3 className="text-3xl font-black tracking-tighter">Agenda</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll('left')}
                className="rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all h-10 w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll('right')}
                className="rounded-full border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all h-10 w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {upcomingEvents.map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[300px] md:min-w-[380px] snap-start"
              >
                <Card className="border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-500 rounded-[24px] overflow-hidden group/card h-[420px] flex flex-col relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover opacity-20 grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 group-hover/card:opacity-40 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  </div>
                  
                  <CardContent className="p-8 flex flex-col h-full relative z-10">
                    <div className="flex justify-between items-start mb-auto">
                      <div className="flex flex-col">
                        <span className="text-4xl font-black tracking-tighter leading-none mb-1">{event.date.split(' ')[0]}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">{event.date.split(' ')[1]}</span>
                      </div>
                      <Badge 
                        variant={event.spots === "Volzet" ? "destructive" : "secondary"} 
                        className={cn(
                          "rounded-full px-3 py-0.5 text-[9px] font-black uppercase tracking-widest border-none shadow-lg",
                          event.spots === "Volzet" ? "bg-red-500/20 text-red-500" : "bg-blue-500/20 text-blue-400"
                        )}
                      >
                        {event.spots}
                      </Badge>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <event.icon className="h-3.5 w-3.5 text-blue-500" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">{event.type}</span>
                      </div>
                      <h4 className="text-2xl font-black tracking-tighter mb-3 leading-tight group-hover/card:text-white transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-zinc-500 text-xs leading-relaxed mb-6 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center gap-6 mb-6 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-3 w-3" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full rounded-lg bg-white text-black hover:bg-zinc-200 transition-all h-11 font-black uppercase tracking-tighter text-xs group/btn"
                        disabled={event.spots === "Volzet"}
                      >
                        {event.spots === "Volzet" ? "Wachtlijst" : "Claim je plek"}
                        <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Event Types */}
        <section className="py-24 bg-zinc-950 border border-zinc-900 rounded-[48px] px-8 md:px-20 mb-40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="max-w-3xl mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">Onze Formats</h2>
            <h3 className="text-5xl font-black tracking-tighter">Verschillende manieren om te groeien.</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Online Deep-Dives",
                desc: "Focus op specifieke skills. Van SEO tot fundraising, geleid door experts uit de community.",
                icon: Video
              },
              {
                title: "Physical Meetups",
                desc: "Informele diners en drinks in de grote Belgische steden. Netwerken op z'n best in een ongedwongen sfeer.",
                icon: Users
              },
              {
                title: "Intensive Workshops",
                desc: "Hands-on sessies waar we echt aan je business werken. Geen theorie, enkel resultaat.",
                icon: MapPin
              }
            ].map((type, i) => (
              <div key={i} className="group">
                <div className="w-16 h-16 rounded-[24px] bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-500 shadow-xl">
                  <type.icon className="h-7 w-7 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-black tracking-tighter mb-4">{type.title}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{type.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Recap */}
        <section>
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">Archief</h2>
              <h3 className="text-5xl font-black tracking-tighter">Recente Terugblikken.</h3>
            </div>
            <Button variant="link" className="text-white font-black uppercase tracking-widest text-[10px] group">
              Bekijk volledig archief <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "JOB Summit 2023 Recap",
                desc: "Een weekend vol inspiratie, workshops en nieuwe vriendschappen in de Belgische Ardennen.",
                img: "https://picsum.photos/seed/summit/1200/600",
                tag: "Summit"
              },
              {
                title: "Dinner with a Billionaire",
                desc: "Een exclusieve avond met Marc Coucke over de toekomst van investeren in de Belgische tech scene.",
                img: "https://picsum.photos/seed/dinner2/1200/600",
                tag: "Dinner"
              }
            ].map((recap, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] rounded-[40px] overflow-hidden mb-8 bg-zinc-900 border border-zinc-800 relative">
                  <img 
                    src={recap.img} 
                    alt={recap.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white font-black uppercase tracking-widest text-[10px]">
                      {recap.tag}
                    </Badge>
                  </div>
                </div>
                <h4 className="text-3xl font-black tracking-tighter mb-4 group-hover:text-blue-500 transition-colors">{recap.title}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{recap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
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
    </div>
  );
}

