import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronLeft, ChevronRight, MapPin, Video, Users, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useRef } from "react";
import { upcomingEvents } from "@/data/events";

export default function EventsPreview() {
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


  return (
    <section className="py-16 md:py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden relative group/section">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
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
              onClick={() => window.open('https://discord.gg/Dy6cG5gG', '_blank')}
              className="min-w-[280px] md:min-w-[420px] snap-start group relative h-[380px] rounded-[24px] overflow-hidden cursor-pointer border border-zinc-800/50"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-blue-500/20 backdrop-blur-md border-blue-500/30 text-blue-400 hover:bg-blue-500/30 font-black uppercase tracking-widest text-[9px]">
                    {event.type}
                  </Badge>
                </div>
                <h4 className="text-2xl font-black tracking-tighter mb-3 leading-tight">{event.title}</h4>
                <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-[9px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-blue-500" /> {event.dateString}</span>
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
  );
}
