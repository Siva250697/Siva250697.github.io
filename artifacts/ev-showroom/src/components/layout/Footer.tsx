import { Link } from "wouter";
import { Zap, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-2xl tracking-wide">
                Volt<span className="text-primary">Ride</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Experience the future of urban mobility. High-performance electric bikes designed for the modern explorer.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/catalog" className="hover:text-primary transition-colors">All Models</Link></li>
              <li><Link href="/catalog?categoryId=1" className="hover:text-primary transition-colors">City Bikes</Link></li>
              <li><Link href="/catalog?categoryId=2" className="hover:text-primary transition-colors">Mountain E-Bikes</Link></li>
              <li><Link href="/catalog?categoryId=3" className="hover:text-primary transition-colors">Cargo E-Bikes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Book a Test Ride</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VoltRide EV Showroom. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
