import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { BikeCard } from "@/components/BikeCard";
import { useListBikes, useListCategories } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import {
  BatteryCharging, Zap, ArrowRight, ShieldCheck,
  MessageCircle, MapPin, Phone, Clock, Fuel, CheckCircle, BadgeIndianRupee,
  Star, Users, Award, ThumbsUp
} from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Vinukonda",
    model: "Eko Tejas Axel",
    rating: 5,
    text: "Saving around ₹4,500 every month compared to my old petrol bike. Best decision I made. No DL required and zero maintenance tension!",
    initials: "RK",
    color: "bg-orange-500",
  },
  {
    name: "Lakshmi Devi",
    location: "Narasaraopet",
    model: "Eko Tejas Shero Neo",
    rating: 5,
    text: "The Shero Neo is so stylish and smooth. Siva Motors team was very helpful, explained everything clearly. Highly recommend them!",
    initials: "LD",
    color: "bg-blue-500",
  },
  {
    name: "Suresh Babu",
    location: "Palnadu",
    model: "Venumotors Thunder",
    rating: 5,
    text: "Running the Thunder for daily commute. Zero fuel cost, handles well on all roads. Showroom is genuine and trustworthy!",
    initials: "SB",
    color: "bg-purple-500",
  },
  {
    name: "Anitha Reddy",
    location: "Vinukonda",
    model: "Venumotors Spot",
    rating: 5,
    text: "Bought the Spot for my son's college. Very happy with the quality. Great service from Siva Motors. Worth every rupee!",
    initials: "AR",
    color: "bg-emerald-500",
  },
  {
    name: "Prasad Rao",
    location: "Macherla",
    model: "Eko Tejas Max",
    rating: 5,
    text: "Using the Max for delivery work. Charge for ₹10, run all day. In 2 months I recovered the scooter cost from fuel savings alone!",
    initials: "PR",
    color: "bg-rose-500",
  },
  {
    name: "Kavitha Nair",
    location: "Guntur",
    model: "Eko Tejas Astra",
    rating: 5,
    text: "Love the Astra — stylish, powerful, and economical. Siva Motors gave us a great deal and after-sales support is excellent.",
    initials: "KN",
    color: "bg-amber-500",
  },
];

const WA_NUMBER = "916300312415";
const WA_OFFER_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about the 3 scooters for ₹1 Lakh offer. Please share the details.")}`;
const WA_TESTRIDE_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book a free test ride at Siva Motors, Vinukonda. Please share the available slots.")}`;
const WA_ENQUIRY_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in buying an electric scooter from Siva Motors. Please help me choose the right model.")}`;

const advantages = [
  { icon: Fuel, value: "₹0", label: "Petrol Cost", sub: "Just ₹8–15 per charge" },
  { icon: CheckCircle, value: "No DL", label: "Required", sub: "Low-speed models" },
  { icon: BatteryCharging, value: "50–100km", label: "Range", sub: "Per full charge" },
  { icon: ShieldCheck, value: "1–3 Yr", label: "Warranty", sub: "Li-ion: 3yr · Graphene: 1yr" },
];

export function Home() {
  const { data: featuredBikes, isLoading: isLoadingBikes } = useListBikes({ featured: true });
  const { data: categories } = useListCategories();

  return (
    <Layout>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Electric Scooter"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-orange-600/8 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Siva Motors · Authorised EV Dealer · Vinukonda, AP
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.95] mb-8 tracking-tight">
              GO<br />
              <span className="text-primary">ELECTRIC.</span><br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-foreground/80 font-bold">
                Save Thousands.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              11 electric scooters. No petrol. No DL required. No registration.<br />
              <span className="text-foreground font-semibold">Test ride free in Vinukonda.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={WA_TESTRIDE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg flex items-center gap-3 hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_rgba(249,115,22,0.4)]"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Test Ride
              </a>
              <Link
                href="/catalog"
                className="px-8 py-4 rounded-2xl bg-white/8 border border-white/20 text-white font-bold text-lg flex items-center gap-2 hover:bg-white/15 transition-all duration-300"
              >
                View All 11 Models
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary shrink-0" /> Kalava Katta Road, Vinukonda</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary shrink-0" /> +91 63003 12415</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary shrink-0" /> Open Daily 9am – 7pm</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ADVANTAGE STRIP ─── */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {advantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center py-6 px-4 text-center"
              >
                <adv.icon className="w-5 h-5 text-white/70 mb-2" />
                <span className="text-2xl font-display font-black text-white leading-none">{adv.value}</span>
                <span className="text-sm font-bold text-white">{adv.label}</span>
                <span className="text-xs text-white/60 mt-0.5">{adv.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-card/80 border-b border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white leading-none">1000+</p>
                <p className="text-xs text-muted-foreground font-medium">Happy Customers</p>
              </div>
            </motion.div>

            <div className="hidden md:block h-10 w-px bg-white/8" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white leading-none">Only</p>
                <p className="text-xs text-muted-foreground font-medium">Trusted Brands</p>
              </div>
            </motion.div>

            <div className="hidden md:block h-10 w-px bg-white/8" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <ThumbsUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white leading-none">Free</p>
                <p className="text-xs text-muted-foreground font-medium">Test Ride for Everyone</p>
              </div>
            </motion.div>

            <div className="hidden md:block h-10 w-px bg-white/8" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white leading-none">WhatsApp</p>
                <p className="text-xs text-muted-foreground font-medium">Instant Price & Support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SPECIAL OFFER BANNER ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #ea580c 40%, #dc2626 100%)",
            }}
          >
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)"
              }}
            />
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 text-center">
                <div className="w-32 h-32 rounded-2xl bg-white/15 backdrop-blur border border-white/30 flex flex-col items-center justify-center">
                  <BadgeIndianRupee className="w-8 h-8 text-white mb-1" />
                  <span className="text-3xl font-black text-white leading-none">1L</span>
                  <span className="text-xs text-white/80 font-semibold">+ GST only</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-3">
                  Limited Period Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-3">
                  3 Electric Scooters<br />for Just ₹1 Lakh + GST
                </h2>
                <p className="text-white/85 text-lg max-w-lg">
                  Perfect for families, businesses & delivery fleets. Mix and match from 11 models. Call us to grab this deal today!
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3 w-full md:w-56">
                <a
                  href={WA_OFFER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-white text-orange-600 font-black text-base flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Claim on WhatsApp
                </a>
                <a
                  href="tel:+916300312415"
                  className="w-full py-4 px-6 rounded-2xl bg-white/15 border border-white/40 text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-white/25 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +91 63003 12415
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED MODELS ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest">Top Picks</span>
              <h2 className="text-4xl md:text-5xl font-display font-black mt-1">Most Popular Models</h2>
            </div>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all 11 models <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {isLoadingBikes ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[440px] rounded-3xl bg-card animate-pulse" />
              ))}
            </div>
          ) : featuredBikes && featuredBikes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section className="py-16 bg-card/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Authorised Dealer</span>
            <h2 className="text-4xl font-display font-black mt-1">Trusted Brands We Sell</h2>
            <p className="text-muted-foreground mt-2">Only genuine, certified electric scooters — no local brands, no compromises.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ── EKO TEJAS ── */}
            <Link href="/catalog?categoryId=4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                {/* 3-image collage */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-1">
                  <div className="col-span-2 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/models/astra-front.png`}
                      alt="Eko Tejas Astra"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 overflow-hidden">
                    <div className="overflow-hidden border-l border-white/10">
                      <img
                        src={`${import.meta.env.BASE_URL}images/models/jatayu-front.png`}
                        alt="Eko Tejas Jatayu"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-75"
                      />
                    </div>
                    <div className="overflow-hidden border-l border-t border-white/10">
                      <img
                        src={`${import.meta.env.BASE_URL}images/models/max-front.png`}
                        alt="Eko Tejas Max"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-150"
                      />
                    </div>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold w-fit">
                    ✓ Authorised Dealer
                  </span>
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">7 Models Available</p>
                    <h3 className="text-3xl font-display font-black text-white mb-3">Eko Tejas</h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                      Explore Eko Tejas <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* ── VENUMOTORS ── */}
            <Link href="/catalog?categoryId=5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative h-[320px] rounded-3xl overflow-hidden border border-white/8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                {/* 3-image collage */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-1">
                  <div className="col-span-2 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/models/efly-new.jpg`}
                      alt="Venumotors E-Fly"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="col-span-1 grid grid-rows-2 overflow-hidden">
                    <div className="overflow-hidden border-l border-white/10">
                      <img
                        src={`${import.meta.env.BASE_URL}images/models/icon-new.jpg`}
                        alt="Venumotors Icon"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-75"
                      />
                    </div>
                    <div className="overflow-hidden border-l border-t border-white/10">
                      <img
                        src={`${import.meta.env.BASE_URL}images/models/thunder-new.jpg`}
                        alt="Venumotors Thunder"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 delay-150"
                      />
                    </div>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold w-fit">
                    ✓ Authorised Dealer
                  </span>
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">4 Models Available</p>
                    <h3 className="text-3xl font-display font-black text-white mb-3">Venumotors</h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                      Explore Venumotors <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

      {/* ─── WHY GO ELECTRIC ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Why Electric?</span>
            <h2 className="text-4xl md:text-5xl font-display font-black mt-1 mb-3">No Petrol. No Problem.</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A typical petrol bike costs ₹4,000–₹6,000/month. Your EV costs just ₹8–15 per full charge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Fuel, stat: "₹0", title: "Petrol Cost", desc: "Electricity costs ₹8–15/charge. Save up to ₹6,000 per month." },
              { icon: CheckCircle, stat: "No DL", title: "Required", desc: "Low-speed models — no driving licence or registration required." },
              { icon: Zap, stat: "0", title: "Maintenance", desc: "No oil changes, no spark plugs. Electric motors just work." },
              { icon: ShieldCheck, stat: "3 Yr", title: "Warranty", desc: "1–3 year warranty on motor, controller and battery." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-card border border-white/8 hover:border-primary/50 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)]"
              >
                {/* Orange top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-orange-400 to-primary/30" />
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-2xl font-display font-black text-primary">{item.stat}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-card/40 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-bold uppercase tracking-widest">Customer Reviews</span>
            <h2 className="text-4xl md:text-5xl font-display font-black mt-1 mb-2">
              1000+ Happy Riders
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real customers from Palnadu district sharing their experience.
            </p>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-sm font-semibold text-muted-foreground">4.9 / 5 average rating</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-card border border-white/8 hover:border-primary/40 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(249,115,22,0.10)]"
              >
                {/* Colored left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${t.color}`} />

                <div className="pl-7 pr-6 pt-6 pb-6 flex flex-col gap-4 flex-1">
                  {/* Stars + verified badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-0.5">
                      <CheckCircle className="w-2.5 h-2.5" /> Verified
                    </span>
                  </div>

                  {/* Large decorative quote + text */}
                  <div className="relative flex-1">
                    <span className="absolute -top-2 -left-1 text-5xl font-display font-black text-primary/20 leading-none select-none">"</span>
                    <p className="text-white/80 leading-relaxed text-sm pl-4 relative z-10">
                      {t.text}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/6 pt-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0 ring-2 ring-white/10`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{t.name}</p>
                        <p className="text-xs text-primary font-semibold">{t.model}</p>
                        <p className="text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 50%, rgba(249,115,22,0.05) 100%)"
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-black mb-6 leading-tight">
              Ready to Make<br />
              <span className="text-primary">the Switch?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Walk into our showroom, test ride any scooter for free, and take it home today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={WA_ENQUIRY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
              <Link
                href="/catalog"
                className="px-10 py-4 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-[0_8px_24px_rgba(249,115,22,0.35)]"
              >
                Browse All Models
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { icon: MapPin, label: "Address", value: "22-2202, Kalava Katta Road\nVinukonda – 522647" },
                { icon: Phone, label: "Phone / WhatsApp", value: "+91 63003 12415" },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 9am – 7pm" },
              ].map((item, i) => (
                <div key={i} className="bg-card/60 border border-white/8 rounded-2xl p-5 flex flex-col items-center gap-2 text-center">
                  <item.icon className="w-5 h-5 text-primary" />
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm font-semibold leading-snug whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
