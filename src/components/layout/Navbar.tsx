import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Over ons", path: "/over-ons" },
  { name: "Gastsprekers", path: "/gastsprekers" },
  { name: "Events", path: "/events" },
  { name: "Nieuws", path: "/nieuws" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-black/60 backdrop-blur-xl border-zinc-800/50 py-3 shadow-2xl shadow-black/50" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-white flex items-center justify-center rounded-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <span className="text-black font-black text-sm tracking-tighter">JOB</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-black tracking-tighter text-xl leading-none text-white">
              JOB
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-zinc-500 uppercase leading-none mt-1 hidden sm:block">
              Jong Ondernemend België
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink 
                    render={
                      <Link 
                        to={item.path} 
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-zinc-800/50 hover:text-white text-zinc-400 transition-all px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest",
                          location.pathname === item.path && "text-white bg-zinc-800/80"
                        )}
                      />
                    }
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="h-6 w-px bg-zinc-800 mx-2" />

          <Button 
            render={<Link to="/aanmelden" />}
            nativeButton={false}
            className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-10 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 font-bold text-xs uppercase tracking-widest"
          >
            Aanmelden
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Button 
            render={<Link to="/aanmelden" />}
            nativeButton={false}
            size="sm" 
            className="bg-white text-black rounded-full px-5 h-9 text-[10px] font-bold uppercase tracking-widest"
          >
            Lid Worden
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className="min-h-[44px] min-w-[44px] h-11 w-11 text-white hover:bg-zinc-800/50 rounded-full active:scale-95 transition-transform duration-200" aria-label="Toggle Menu">
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-black border-zinc-800">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                  <div className="w-8 h-8 bg-white flex items-center justify-center rounded-md">
                    <span className="text-black font-black text-xs">JOB</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-zinc-500 min-h-[44px] min-w-[44px] active:scale-95 transition-transform duration-200" aria-label="Close Menu">
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
                
                <nav className="flex-1 px-6 py-12 flex flex-col gap-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        to={item.path} 
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-4xl font-black tracking-tighter transition-all hover:pl-2",
                          location.pathname === item.path ? "text-white" : "text-zinc-700 hover:text-zinc-400"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="p-8 border-t border-zinc-800 bg-zinc-950">
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">Klaar voor de volgende stap?</p>
                  <Button 
                    render={<Link to="/aanmelden" />}
                    nativeButton={false}
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-white text-black text-lg py-8 rounded-2xl font-black uppercase tracking-tighter"
                  >
                    Meld je nu aan
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={cn("h-px bg-zinc-800", className)} />;
}
