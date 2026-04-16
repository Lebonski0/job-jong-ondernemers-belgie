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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    drive: "",
    project: "",
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    if (!formData.terms) {
      alert("Let op: je moet akkoord gaan met de voorwaarden om je aan te melden.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          from_name: "JOB Aanmeldingen",
          subject: `Nieuwe aanmelding van ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Leeftijd: formData.age,
          Grootste_Ambitie: formData.drive,
          Business_of_Project: formData.project || "N.v.t.",
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

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
            className="bg-zinc-900 rounded-[40px] p-8 md:p-12 border border-zinc-800 shadow-2xl shadow-blue-500/5 relative overflow-hidden"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black mb-4">Aanvraag Ontvangen.</h3>
                <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
                  Bedankt voor je interesse in Jong Ondernemers België. We behandelen je aanvraag en nemen binnen de 48 uur contact met je op.
                </p>
                <Button onClick={() => window.location.href = '/'} className="bg-white text-black hover:bg-zinc-200">
                  Terug naar Home
                </Button>
              </motion.div>
            ) : (
              <>
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

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
                    Er is iets misgegaan bij het versturen. Probeer het later opnieuw.
                  </div>
                )}

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold mb-6">Wie ben je?</h3>
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-zinc-400">Volledige Naam</Label>
                        <Input id="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-400">E-mailadres</Label>
                        <Input id="email" required type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-zinc-400">Leeftijd</Label>
                        <Input id="age" required type="number" value={formData.age} onChange={handleChange} placeholder="24" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
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
                          required
                          value={formData.drive} 
                          onChange={handleChange}
                          className="w-full min-h-[120px] rounded-md bg-black border border-zinc-800 p-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-zinc-500"
                          placeholder="Vertel ons over je dromen..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="project" className="text-zinc-400">Heb je momenteel een project of business? (Optioneel)</Label>
                        <Input id="project" value={formData.project} onChange={handleChange} placeholder="Naam van je startup of idee" className="rounded-md h-12 bg-black border-zinc-800 focus:ring-blue-500" />
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
                        <Checkbox 
                          id="terms" 
                          checked={formData.terms} 
                          onCheckedChange={(checked) => setFormData(prev => ({...prev, terms: checked as boolean}))}
                          className="mt-1 border-zinc-700 data-[state=checked]:bg-blue-500" 
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed text-zinc-500 cursor-pointer">
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
                        type="button"
                        variant="outline" 
                        className="flex-1 rounded-md h-12 border-zinc-800 hover:bg-zinc-800"
                        onClick={() => setStep(step - 1)}
                        disabled={status === "submitting"}
                      >
                        Vorige
                      </Button>
                    )}
                    <Button 
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex-[2] bg-white text-black hover:bg-zinc-200 rounded-md h-12 font-bold disabled:opacity-50"
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" /> 
                          Verwerken...
                        </span>
                      ) : step === 3 ? (
                        "Verzend Aanvraag"
                      ) : (
                        "Volgende Stap"
                      )}
                      {status !== "submitting" && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
