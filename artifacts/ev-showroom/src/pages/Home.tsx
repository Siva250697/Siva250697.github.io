import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { BikeCard } from "@/components/BikeCard";
import { useListBikes, useListCategories } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import {
  BatteryCharging, Leaf, Zap, ArrowRight, ShieldCheck,
  MessageCircle, MapPin, Phone, Clock, Star, TrendingDown, Fuel, CheckCircle
} from "lucide-react";

const WA_NUMBER = "916300312415";
const WA_OFFER_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about the 3 scooters for ₹1 Lakh offer. Please share the details.")}`;
const WA_VISIT_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I want to visit the Siva Motors showroom in Vinukonda. When is the best time to come?")}`;
const WA_TESTRIDE_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book a test ride at Siva Motors, Vinukonda. Please share the available slots.")}`;

const stats = [
  { value: "11", label: "Models Available", icon: Zap },
  { value: "₹0", label: "Fuel Cost Per Day", icon: Fuel },
  { value: "140km", label: "Max Range", icon: BatteryCharging },
  { value: "1–3 yr", label: "Warranty", icon: ShieldCheck },
];

const savings = [
  { title: "No Petrol Cost", desc: "Save ₹4,000–₹6,000 per month on fuel. Electricity costs just ₹15–25 per full charge.", icon: TrendingDown, color: "from-emerald-500/20 to-emerald-500/5" },
  { title: "No Driving Licence", desc: "All our low-speed models don't require a DL or vehicle registration — ride legally from day one.", icon: CheckCircle, color: "from-blue-500/20 to-blue-500/5" },
  { title: "Zero Maintenance", desc: "No engine oil, no spark plugs, no fuel filter. Electric motors have far fewer moving parts.", icon: Leaf, color: "from-purple-500/20 to-purple-500/5" },
  { title: "1–3 Year Warranty", desc: "All models come with at least 1-year warranty on motor, controller & battery. Lithium batteries get 3 years.", icon: ShieldCheck, color: "from-amber-500/20 to-amber-500/5" },
];

const testimonials = [
  { name: "Ravi Kumar", location: "Vinukonda", rating: 5, text: "Bought the Eko Tejas Axel 3 months ago. Saving around ₹4,500 per month compared to my old petrol bike. Very happy!", model: "Eko Tejas Axel" },
  { name: "Lakshmi Devi", location: "Narasaraopet", rating: 5, text: "The Shero Neo is so stylish and smooth. No DL needed, and the showroom team was very helpful. Highly recommend Siva Motors.", model: "Eko Tejas Shero Neo" },
  { name: "Suresh Babu", location: "Palnadu", rating: 5, text: "Running the Venumotors Thunder for daily commute. Zero fuel cost, handles well on all roads. Worth every rupee!", model: "Venumotors Thunder" },
];

export function Home() {
  const { data: featuredBikes, isLoading: isLoadingBikes } = useListBikes({ featured: true });
  const { data: categories } = useListCategories();

  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Siva Motors Electric Scooter"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Animated glow orbs */}
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-bold mb-6 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Siva Motors — Electric Vehicle Showroom
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.08] mb-6">
                Save ₹4,000<br />
                <span className="text-gradient-primary">Every Month.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-3 max-w-lg leading-relaxed">
                Switch to electric. No petrol cost, no DL needed, zero maintenance headaches.
              </p>
              <p className="text-base text-muted-foreground/70 mb-10 max-w-lg">
                11 premium scooters from Eko Tejas & Venumotors — test ride at our showroom in Vinukonda, Andhra Pradesh.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/catalog"
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] hover:scale-105 transition-all duration-300 text-center"
                >
                  Explore All 11 Models
                </Link>
                <a
                  href={WA_TESTRIDE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Free Test Ride
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Vinukonda, Palnadu, AP</span>
                <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary" /> +91 63003 12415</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> Open Daily 9am – 7pm</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-y border-white/5 bg-card/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center py-8 px-4 gap-1"
              >
                <s.icon className="w-5 h-5 text-primary mb-1" />
                <span className="text-3xl font-display font-bold text-primary">{s.value}</span>
                <span className="text-xs text-muted-foreground text-center font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIAL OFFER ─── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card shadow-[0_0_80px_rgba(57,255,20,0.12)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 text-center">
                <div className="w-28 h-28 rounded-3xl bg-primary/15 border border-primary/30 flex flex-col items-center justify-center mx-auto mb-2">
                  <span className="text-3xl font-display font-black text-primary leading-none">₹1L</span>
                  <span className="text-xs text-primary/80 font-semibold">+GST</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">For 3 Scooters</span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-3 border border-red-500/30">
                  🔥 Limited Period Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 leading-tight">
                  3 Electric Scooters for Just<br />
                  <span className="text-primary" style={{ textShadow: "0 0 30px rgba(57,255,20,0.5)" }}>
                    ₹1 Lakh + GST
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  Perfect for families, businesses & delivery fleets. Mix and match from our full 11-model range. WhatsApp us to lock in this price before it expires!
                </p>
              </div>

              <div className="shrink-0 flex flex-col gap-3 w-full md:w-52">
                <a
                  href={WA_OFFER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  Claim on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="w-full py-4 px-6 rounded-xl border border-white/15 text-foreground font-semibold text-base flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  Call for Details
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED MODELS ─── */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              Top Picks
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Most Popular Models</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              High-range, high-performance electric scooters — all available for test rides at our Vinukonda showroom.
            </p>
          </motion.div>

          {isLoadingBikes ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[440px] rounded-2xl bg-card animate-pulse border border-white/5" />
              ))}
            </div>
          ) : featuredBikes && featuredBikes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBikes.slice(0, 3).map((bike, idx) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                >
                  <BikeCard bike={bike} />
                </motion.div>
              ))}
            </div>
          ) : null}

          <div className="text-center mt-10">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]"
            >
              View All 11 Models
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY SWITCH TO EV ─── */}
      <section className="py-20 bg-card/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              Why Electric?
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Switch & Start Saving Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The average petrol bike costs ₹4,000–₹6,000/month in fuel alone. Your EV costs ₹15–25 per full charge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border border-white/5 bg-gradient-to-br ${item.color} hover:border-white/10 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-background/60 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              Customer Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Happy Riders</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our customers across Palnadu district are already saving thousands every month.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 rounded-2xl p-7 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-primary">{t.model}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="py-20 bg-card/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              Our Brands
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Authorised Dealer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Siva Motors is your trusted authorised dealer for both Eko Tejas and Venumotors in Vinukonda.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories?.map((cat, idx) => (
              <Link key={cat.id} href={`/catalog?categoryId=${cat.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-[220px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-primary/30 transition-all duration-300"
                >
                  <img
                    src={cat.imageUrl || `${import.meta.env.BASE_URL}images/hero-bg.png`}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-sm">{cat.description}</p>
                    <div className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Browse models <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISIT US CTA ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-emerald-500/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Visit Us Today
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Come See It.<br />
              <span className="text-gradient-primary">Ride It. Love It.</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto">
              Walk into our Vinukonda showroom — no appointment needed. Test ride any model for free and take it home the same day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              {[
                { icon: MapPin, label: "Address", value: "22-2202, Kalava Katta Road, Vinukonda – 522647" },
                { icon: Phone, label: "Call / WhatsApp", value: "+91 63003 12415" },
                { icon: Clock, label: "Showroom Hours", value: "Mon–Sat: 9am – 7pm" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-semibold leading-snug">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_VISIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <Link
                href="/catalog"
                className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105"
              >
                Browse All Models
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
