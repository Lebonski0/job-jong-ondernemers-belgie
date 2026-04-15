import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <span className="text-black font-bold text-xs">JOB</span>
              </div>
              <span className="font-bold tracking-tighter text-xl text-white">
                JONG ONDERNEMEND BELGIË
              </span>
            </Link>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              De meest exclusieve community voor de volgende generatie Belgische ondernemers. 
              Kwaliteit boven kwantiteit, altijd.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-500">Navigatie</h4>
            <ul className="space-y-2">
              <li><Link to="/over-ons" className="text-zinc-400 hover:text-white transition-colors">Over ons</Link></li>
              <li><Link to="/gastsprekers" className="text-zinc-400 hover:text-white transition-colors">Gastsprekers</Link></li>
              <li><Link to="/events" className="text-zinc-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/nieuws" className="text-zinc-400 hover:text-white transition-colors">Nieuws</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-zinc-500">Community</h4>
            <ul className="space-y-2">
              <li><Link to="/aanmelden" className="text-zinc-400 hover:text-white transition-colors">Aanmelden</Link></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 bg-zinc-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Jong Ondernemend België. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
