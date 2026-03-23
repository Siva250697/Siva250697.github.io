import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OFFER_TEXT = "🎉 SPECIAL OFFER: 3 Electric Scooters for just ₹1 Lakh + GST  •  Limited period — Call now: +91 63003 12415  •  Visit us in Vinukonda, Andhra Pradesh  •  ";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Models" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement Ticker */}
        <div className="bg-primary overflow-hidden">
          <div className="marquee-track">
            {[OFFER_TEXT, OFFER_TEXT].map((text, i) => (
              <span key={i} className="inline-block px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider text-black">
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Main Nav */}
        <div
          className={cn(
            "transition-all duration-300",
            isScrolled ? "glass py-3" : "bg-transparent py-5"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wide">
                <span
                  className="text-primary"
                  style={{ textShadow: "0 0 18px rgba(249,115,22,0.55)" }}
                >
                  Siva
                </span>
                <span className="text-white">Motors</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300"
              >
                Book Test Ride
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-28 pb-6 px-4 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-display font-semibold",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center px-6 py-4 rounded-xl font-semibold bg-primary text-primary-foreground text-lg"
                >
                  Book Test Ride
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
