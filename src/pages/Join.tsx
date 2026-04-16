import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Users, ShieldCheck, Zap, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Join() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Info & Urgency */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-zinc-900 text-zinc-400 hover:bg-zinc-900 border-none px-4 py-1 flex items-center gap-2 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Laatste 65 plaatsen beschikbaar
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.95]">
                Word deel van de <span className="text-zinc-600">100.</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-lg">
                We zoeken geen CV's, we zoeken drive. Vul het formulier in en we nemen binnen 48u contact met je op voor een kennismaking.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Selectie op Mindset",
                    desc: "We kijken naar wie je bent en waar je naartoe wilt, niet enkel naar wat je al bereikt hebt.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Directe Impact",
                    desc: "Na acceptatie krijg je onmiddellijk toegang tot onze Discord en alle upcoming events.",
                    icon: Zap
                  },
                  {
                    title: "Levenslang Netwerk",
                    desc: "Connecties die verder gaan dan een LinkedIn connectie. Echte vriendschappen en partnerships.",
                    icon: Users
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                      <item.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-zinc-900 rounded-[40px] p-8 md:p-12 border border-zinc-800 shadow-2xl shadow-blue-500/5"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div 
                    key={s} 
                    className={`h-1.5 w-12 rounded-full transition-all duration-500 ${s <= step ? 'bg-blue-500' : 'bg-zinc-800'}`} 
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Stap {step} van 3</span>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6">Wie ben je?</h3>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-400">Volledige Naam</Label>
                    <Input id="name" placeholder="John Doe" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-400">E-mailadres</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-zinc-400">Leeftijd</Label>
                    <Input id="age" type="number" placeholder="24" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6">Wat drijft je?</h3>
                  <div className="space-y-2">
                    <Label htmlFor="drive" className="text-zinc-400">Wat is je grootste ambitie voor de komende 5 jaar?</Label>
                    <textarea 
                      id="drive" 
                      className="w-full min-h-[120px] rounded-md bg-black border border-zinc-800 p-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Vertel ons over je dromen..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project" className="text-zinc-400">Heb je momenteel een project of business? (Optioneel)</Label>
                    <Input id="project" placeholder="Naam van je startup of idee" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold mb-6">Bijna klaar.</h3>
                  <p className="text-zinc-500 text-sm mb-6">
                    We hechten veel waarde aan privacy en kwaliteit. Door te verzenden ga je akkoord met onze community guidelines.
                  </p>
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" className="mt-1 border-zinc-700 data-[state=checked]:bg-blue-500" />
                    <Label htmlFor="terms" className="text-sm leading-relaxed text-zinc-500">
                      Ik begrijp dat JOB een exclusieve community is en dat mijn aanvraag zorgvuldig wordt beoordeeld.
                    </Label>
                  </div>
                  <div className="p-6 rounded-2xl bg-black border border-zinc-800 text-white flex items-center gap-4">
                    <Clock className="h-6 w-6 text-blue-500" />
                    <p className="text-sm">Gemiddelde responstijd: <strong>36 uur</strong></p>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-md h-12 border-zinc-800 hover:bg-zinc-800"
                    onClick={() => setStep(step - 1)}
                  >
                    Vorige
                  </Button>
                )}
                <Button 
                  className="flex-[2] bg-white text-black hover:bg-zinc-200 rounded-md h-12 font-bold"
                  onClick={() => step < 3 ? setStep(step + 1) : alert("Aanvraag verzonden!")}
                >
                  {step === 3 ? "Verzend Aanvraag" : "Volgende Stap"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
