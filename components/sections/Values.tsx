import { motion } from "motion/react";
import { Users, Mic2, CheckCircle2 } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Values() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Onze Fundamenten</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Waarom JOB anders is.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Radicale Kwaliteit",
              description: "We beperken onze community tot 100 leden. Dit garandeert dat elke interactie waardevol is en dat iedereen elkaar echt kent.",
              icon: Users
            },
            {
              title: "Toegang tot Expertise",
              description: "Van serie-ondernemers tot investeerders, wij brengen de top van de Belgische en internationale business wereld naar jou.",
              icon: Mic2
            },
            {
              title: "Actiegericht Netwerk",
              description: "Geen theoretisch gepraat. We focussen op echte groei, funding rondes, en het bouwen van schaalbare bedrijven.",
              icon: CheckCircle2
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <value.icon className="h-5 w-5" />
              </div>
              <h4 className="text-xl font-bold mb-4">{value.title}</h4>
              <p className="text-zinc-500 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
