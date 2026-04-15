import { Users, Calendar, Mic2, CheckCircle2 } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-12 border-b border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" /> 33 LEDEN
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> 24 EVENTS/JAAR
          </div>
          <div className="flex items-center gap-2">
            <Mic2 className="h-4 w-4" /> TOP SPREKERS
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" /> TOP FOUNDERS
          </div>
        </div>
      </div>
    </section>
  );
}
