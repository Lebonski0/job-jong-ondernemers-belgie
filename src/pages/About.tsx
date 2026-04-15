import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, MessageSquare, Target, Zap, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 bg-zinc-900 text-zinc-400 hover:bg-zinc-900 border-none px-4 py-1">Onze Missie</Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.95]">
              Bouwen aan de toekomst van <span className="text-zinc-600">Belgisch ondernemerschap.</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              JOB is ontstaan uit een simpele observatie: jonge, ambitieuze mensen in België missen een 
              plek waar ze gelijkgestemden kunnen ontmoeten zonder de barrières van traditionele netwerkclubs.
            </p>
          </motion.div>
        </div>

        {/* Mission Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <Target className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Voor wie is JOB?</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Onze community is er voor iedereen tussen de 18 en 30 jaar die meer wil dan de status quo. 
                Of je nu al een miljoenenbedrijf runt, net je eerste stappen zet, of simpelweg de ambitie 
                hebt om iets groots te bouwen—je bent welkom.
              </p>
              <ul className="space-y-3">
                {[
                  "Ambitieuze studenten met een ondernemersdrang",
                  "Early-stage founders die willen schalen",
                  "Creatievelingen en techneuten die impact willen maken",
                  "Iedereen die gelooft in de kracht van een sterk netwerk"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Hoe Discord werkt</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Onze dagelijkse interactie vindt plaats op Discord. Het is onze digitale hub waar we 
                kennis delen, vragen stellen, en elkaar helpen. Geen formele e-mails, maar directe 
                toegang tot 99 andere scherpe geesten.
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">JOB Discord Server</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Exclusief voor leden</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mb-4">
                  Kanalen voor #funding, #growth, #tech-stack, #hiring en een #general kanaal voor de dagelijkse babbel.
                </p>
                <Button variant="outline" className="w-full border-zinc-800 hover:bg-white hover:text-black transition-all">
                  Bekijk Preview
                </Button>
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-900 border border-zinc-800">
              <img 
                src="https://picsum.photos/seed/team/800/1000" 
                alt="Community" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-xs hidden lg:block shadow-2xl">
              <Zap className="h-8 w-8 mb-4 text-blue-500" />
              <p className="font-medium leading-relaxed">
                "Het netwerk dat je hier opbouwt is niet voor even, het is voor de rest van je carrière."
              </p>
              <p className="mt-4 text-zinc-500 text-sm">— Team JOB</p>
            </div>
          </div>
        </div>

        <Separator className="my-24 bg-zinc-800" />

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6">
              <HelpCircle className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Veelgestelde Vragen</h2>
            <p className="text-zinc-500">Alles wat je moet weten over JOB.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "Heb ik een business idee nodig om lid te worden?",
                a: "Nee. We focussen op de persoon, niet op het project. Ambitie en de juiste mindset zijn belangrijker dan een uitgewerkt business plan."
              },
              {
                q: "Waarom is er een limiet van 100 leden?",
                a: "We willen dat iedereen elkaar bij naam kent. Een kleinere groep zorgt voor diepere connecties en een hogere kwaliteit van interactie."
              },
              {
                q: "Wat zijn de kosten van het lidmaatschap?",
                a: "We werken met een selectieprocedure. De details over de bijdrage worden gedeeld na een positief kennismakingsgesprek."
              },
              {
                q: "Zijn de events verplicht?",
                a: "Niets is verplicht, maar we verwachten wel een actieve houding. De community is zo sterk als haar leden."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all">
                <h4 className="text-lg font-bold mb-3">{faq.q}</h4>
                <p className="text-zinc-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
