import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function SpeakerSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
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
                  src="/event-the-gallerist.png" 
                  alt="Oprichter The Gallerist" 
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-1000"
                  style={{ objectPosition: 'center 20%' }}
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
                  <span className="text-[60px] font-black text-blue-500/5 tracking-tighter leading-none select-none">2026</span>
                </div>

                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Spotlight Session</h4>
                    <div className="h-px w-8 bg-blue-500/30" />
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Sneaker Entrepreneur</span>
                  </div>
                  <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                    The Gallerist
                  </h3>
                  <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[11px] mb-8 flex items-center gap-2">
                    E-commerce <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" /> TikTok Scaling <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" /> Sneaker Market
                  </p>
                  <p className="text-zinc-200 text-lg md:text-2xl leading-relaxed max-w-xl font-medium italic border-l-2 border-blue-500/20 pl-6">
                    "Van kleinschalig TikTok merk naar een miljoenenbedrijf — <span className="text-blue-400">de blauwdruk</span> voor modern e-commerce succes."
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                  <div className="space-y-1">
                    <p className="text-zinc-600 font-black uppercase tracking-widest text-[8px]">Expertise</p>
                    <p className="text-white font-bold text-sm">TikTok Marketing</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-zinc-600 font-black uppercase tracking-widest text-[8px]">Focus</p>
                    <p className="text-white font-bold text-sm">E-commerce</p>
                  </div>
                  <div className="space-y-1 hidden md:block">
                    <p className="text-zinc-600 font-black uppercase tracking-widest text-[8px]">Impact</p>
                    <p className="text-white font-bold text-sm">Miljoenen Revenue</p>
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
  );
}
