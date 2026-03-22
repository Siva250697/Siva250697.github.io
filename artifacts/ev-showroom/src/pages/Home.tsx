import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { BikeCard } from "@/components/BikeCard";
import { useListBikes, useListCategories } from "@workspace/api-client-react";
import { motion } from "framer-motion";
import { BatteryCharging, Leaf, Zap, ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { getPlaceholderImage } from "@/lib/utils";

export function Home() {
  const { data: featuredBikes, isLoading: isLoadingBikes } = useListBikes({ featured: true });
  const { data: categories, isLoading: isLoadingCategories } = useListCategories();

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Siva Motors Electric Scooter"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-6 tracking-wider uppercase">
                Siva Motors — Electric Vehicle Showroom
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
                Ride Smart. <br />
                <span className="text-gradient-primary">Ride Green.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl">
                Premium electric scooters from Eko Tejas and Venumotors — available now at our showroom in Vinukonda, Andhra Pradesh.
              </p>
              <p className="text-sm text-primary font-semibold mb-10">📍 Vinukonda, Palnadu, AP &nbsp;|&nbsp; 📞 +91 63003 12415</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/catalog"
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:scale-105 transition-all duration-300 text-center"
                >
                  Explore Models
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-foreground font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
                >
                  Book Test Ride
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Powerful Performance", desc: "High-voltage motors deliver instant torque for a smooth and confident ride on every road." },
              { icon: BatteryCharging, title: "Long Range", desc: "Lead acid battery options from 48V to 72V — ride up to 90 km on a single charge." },
              { icon: Leaf, title: "Zero Emissions", desc: "100% electric. No fuel, no fumes. Do your part for a cleaner environment every day." },
              { icon: ShieldCheck, title: "1 Year Warranty", desc: "All models come with a 1-year warranty on motor, controller, and battery for complete peace of mind." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-card border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Models</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Our top picks — high-range, high-performance electric scooters ready for a test ride.
              </p>
            </div>
            <Link
              href="/catalog"
              className="group flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View All Models
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {isLoadingBikes ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[400px] rounded-2xl bg-card animate-pulse border border-white/5" />
              ))}
            </div>
          ) : featuredBikes && featuredBikes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBikes.slice(0, 3).map((bike, idx) => (
                <motion.div
                  key={bike.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <BikeCard bike={bike} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-2xl border border-white/5">
              <p className="text-muted-foreground">No featured models available right now.</p>
            </div>
          )}
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-24 bg-card border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Brands We Carry</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Siva Motors is your authorised dealer for Eko Tejas and Venumotors electric scooters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!isLoadingCategories &&
              categories?.map((cat, idx) => (
                <Link key={cat.id} href={`/catalog?categoryId=${cat.id}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative h-[260px] rounded-3xl overflow-hidden cursor-pointer"
                  >
                    <img
                      src={cat.imageUrl || getPlaceholderImage(cat.name, "600x400")}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-display font-bold text-white mb-1">{cat.name}</h3>
                          <p className="text-white/70 line-clamp-1">{cat.description}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
