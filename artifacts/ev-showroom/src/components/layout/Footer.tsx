import { Link } from "wouter";
import { Zap, MapPin, Phone, MessageCircle } from "lucide-react";

const WA_NUMBER = "916300312415";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5">

      {/* ── BIG CONTACT STRIP ── */}
      <div className="bg-card border-b border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-primary font-bold uppercase tracking-widest text-center mb-6">
            Come Visit Us · Call Us · Chat on WhatsApp
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

            {/* Phone */}
            <a
              href="tel:+916300312415"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Call Now</p>
                <p
                  className="font-display font-bold text-3xl md:text-4xl text-primary group-hover:text-white transition-colors leading-none"
                  style={{ textShadow: "0 0 20px rgba(249,115,22,0.35)" }}
                >
                  +91 63003 12415
                </p>
              </div>
            </a>

            <div className="hidden md:block h-16 w-px bg-white/10" />

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Showroom Address</p>
                <p className="font-display font-bold text-xl md:text-2xl text-white leading-snug">
                  Kalava Katta Road, Vinukonda<br />
                  <span className="text-primary">Andhra Pradesh – 522647</span>
                </p>
              </div>
            </div>

            <div className="hidden md:block h-16 w-px bg-white/10" />

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about electric scooters at Siva Motors.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">WhatsApp Us</p>
                <p className="font-display font-bold text-2xl md:text-3xl text-[#25D366] group-hover:text-white transition-colors leading-none">
                  Chat Now
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display font-bold text-2xl tracking-wide">
                  <span className="text-primary" style={{ textShadow: "0 0 14px rgba(249,115,22,0.5)" }}>Siva</span>
                  <span className="text-white">Motors</span>
                </span>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                Siva Motors Electric Vehicle Showroom — your trusted destination for premium e-scooters in Vinukonda, Andhra Pradesh.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Explore</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="/catalog" className="hover:text-primary transition-colors">All Models</Link></li>
                <li><Link href="/catalog?categoryId=4" className="hover:text-primary transition-colors">Eko Tejas</Link></li>
                <li><Link href="/catalog?categoryId=5" className="hover:text-primary transition-colors">Venumotors</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-lg mb-6">Visit Us</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Book a Test Ride</Link></li>
                <li><Link href="/contact?type=pricing" className="hover:text-primary transition-colors">Get a Quote</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Siva Motors Electric Vehicle Showroom. All rights reserved.</p>
            <p className="text-primary font-medium">Ride Smart • Ride Green • Save Energy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
