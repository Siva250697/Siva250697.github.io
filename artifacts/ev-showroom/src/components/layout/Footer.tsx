import { Link } from "wouter";
import { Zap, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-2xl tracking-wide">
                Siva<span className="text-primary">Motors</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Siva Motors Electric Vehicle Showroom — your trusted destination for premium e-scooters in Vinukonda, Andhra Pradesh.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>22-2202, Kalava Katta Road, Seethaiah Nagar,<br />Vinukonda, Palnadu, Andhra Pradesh – 522647</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+916300312415" className="hover:text-primary transition-colors">+91 63003 12415</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/catalog" className="hover:text-primary transition-colors">All Models</Link></li>
              <li><Link href="/catalog?categoryId=1" className="hover:text-primary transition-colors">Eko Tejas</Link></li>
              <li><Link href="/catalog?categoryId=2" className="hover:text-primary transition-colors">Venumotors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Book a Test Ride</Link></li>
              <li><Link href="/contact?inquiryType=pricing" className="hover:text-primary transition-colors">Get a Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Siva Motors Electric Vehicle Showroom. All rights reserved.</p>
          <p className="text-primary font-medium">Ride Smart • Ride Green • Save Energy</p>
        </div>
      </div>
    </footer>
  );
}
