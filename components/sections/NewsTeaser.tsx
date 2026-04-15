import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function NewsTeaser() {
  return (
    <section className="py-24 bg-zinc-950 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Laatste Nieuws</h2>
            <h3 className="text-4xl font-bold tracking-tight">Curated insights.</h3>
          </div>
          <Button 
            render={<Link to="/nieuws" className="hidden md:block" />}
            nativeButton={false}
            variant="outline" 
            className="rounded-md border-zinc-800"
          >
            Alle artikelen
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Waarom België de perfecte hub is voor AI startups.",
              tag: "Tech",
              date: "12 April",
              author: "Redactie JOB"
            },
            {
              title: "5 Fouten die elke jonge founder maakt bij hun eerste ronde.",
              tag: "Funding",
              date: "8 April",
              author: "Marc Dubois"
            },
            {
              title: "De shift naar 'Profit First' in de huidige markt.",
              tag: "Growth",
              date: "2 April",
              author: "Sarah Janssens"
            }
          ].map((news, i) => (
            <Card key={i} className="border border-zinc-800 bg-zinc-900/50 rounded-2xl overflow-hidden hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300">
              <CardContent className="p-8">
                <Badge className="mb-6 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border-none">{news.tag}</Badge>
                <h4 className="text-xl font-bold mb-8 leading-tight hover:text-blue-400 cursor-pointer transition-colors">
                  {news.title}
                </h4>
                <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  <span>{news.date}</span>
                  <span>Door {news.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
