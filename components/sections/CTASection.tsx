import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
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
  );
}
