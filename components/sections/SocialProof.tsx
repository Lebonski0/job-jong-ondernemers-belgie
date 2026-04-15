import { Users, Calendar, Mic2, CheckCircle2 } from "lucide-react";

export default function SocialProof() {
  return (
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
  );
}
