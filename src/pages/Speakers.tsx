import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic2, Calendar, ArrowUpRight, Archive, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Speakers() {
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
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">Gastsprekers</h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              Leren van de <span className="text-zinc-800">architecten</span> van morgen.
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl font-medium">
              Elke maand nodigen we een topspreker uit voor een exclusieve, 'off-the-record' sessie. 
              Geen PR-praatjes, maar echte lessen uit de loopgrachten.
            </p>
          </motion.div>
        </div>

        {/* Upcoming Speaker */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Eerstvolgende Sessie</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-zinc-900/30 rounded-[48px] overflow-hidden p-8 md:p-16 border border-zinc-800/50 backdrop-blur-sm"
          >
            <div className="aspect-square md:aspect-auto md:h-[500px] rounded-[32px] overflow-hidden border border-zinc-800 relative group">
              <img 
                src="https://picsum.photos/seed/speaker_main/800/800" 
                alt="Main Speaker" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <Badge className="w-fit mb-8 bg-blue-500 text-white border-none px-4 py-1 font-black uppercase tracking-widest text-[10px] shadow-lg shadow-blue-500/20">
                24 April, 20:00
              </Badge>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">Thomas Van Damme</h3>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-medium">
                Thomas bouwde zijn eerste SaaS-bedrijf uit tot een exit van €20M op zijn 26e. 
                Tijdens deze sessie deelt hij zijn playbook over "The Art of the Exit".
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50">
                    <Mic2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Topic</h4>
                    <p className="text-white font-bold text-sm">M&A Strategy</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50">
                    <Calendar className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Format</h4>
                    <p className="text-white font-bold text-sm">Live Q&A + Workshop</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="w-full md:w-fit bg-white text-black hover:bg-zinc-200 rounded-xl px-12 h-16 text-lg font-black uppercase tracking-tighter shadow-xl hover:shadow-white/10 transition-all active:scale-95">
                Schrijf je in voor deze sessie
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Alumni Archive */}
        <section className="pt-24 border-t border-zinc-900">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">Alumni Archive</h2>
              <h3 className="text-4xl font-black tracking-tighter">Sprekers die ons voorgingen.</h3>
            </div>
            <div className="hidden md:flex items-center gap-3 text-zinc-600">
              <Archive className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">24+ Sessies gearchiveerd</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Julie De Clercq", role: "CEO @ Bloom", topic: "Product-Led Growth", date: "Maart 2024" },
              { name: "Kevin Janssens", role: "Founder @ PayIt", topic: "Fintech Regulations", date: "Februari 2024" },
              { name: "Sarah Smets", role: "Partner @ SeedFund", topic: "Pitching to VCs", date: "Januari 2024" },
              { name: "Dries Mertens", role: "CTO @ CloudBase", topic: "Scaling Infrastructure", date: "December 2023" },
              { name: "Annelies Maes", role: "Founder @ GreenLife", topic: "Sustainable Business", date: "November 2023" },
              { name: "Bram Peeters", role: "Exit @ FoodDash", topic: "Operations at Scale", date: "Oktober 2023" }
            ].map((alumni, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-[32px] overflow-hidden mb-8 bg-zinc-900 border border-zinc-800/50 relative">
                  <img 
                    src={`https://picsum.photos/seed/alumni${i}/600/600`} 
                    alt={alumni.name} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute top-6 right-6">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                      {alumni.date}
                    </span>
                  </div>
                </div>
                <h4 className="text-2xl font-black tracking-tighter mb-1">{alumni.name}</h4>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">{alumni.role}</p>
                <Badge variant="secondary" className="bg-zinc-900 text-zinc-500 border-zinc-800 text-[9px] uppercase tracking-widest font-black px-3 py-0.5">
                  {alumni.topic}
                </Badge>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
