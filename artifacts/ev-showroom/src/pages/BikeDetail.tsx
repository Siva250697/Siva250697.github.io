import { useParams, Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { useGetBike } from "@workspace/api-client-react";
import { formatPrice, getPlaceholderImage } from "@/lib/utils";
import { Battery, Gauge, Weight, Zap, CheckCircle2, ArrowLeft, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function BikeDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: bike, isLoading, error } = useGetBike(Number(id));

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen pt-24 pb-12 flex justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mt-20" />
        </div>
      </Layout>
    );
  }

  if (error || !bike) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-12 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl font-display font-bold mb-4">Bike Not Found</h1>
          <p className="text-muted-foreground mb-8">The model you're looking for doesn't exist or has been removed.</p>
          <Link href="/catalog" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl">
            Back to Catalog
          </Link>
        </div>
      </Layout>
    );
  }

  const imageUrl = bike.imageUrl || getPlaceholderImage(bike.name, "1200x800");

  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/catalog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Inventory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Image Gallery */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-card border border-white/5 relative group"
              >
                <img 
                  src={imageUrl} 
                  alt={bike.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {!bike.inStock && (
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
                    <span className="px-6 py-3 bg-destructive text-destructive-foreground font-bold rounded-full text-lg shadow-2xl tracking-widest uppercase">
                      Out of Stock
                    </span>
                  </div>
                )}
              </motion.div>
              
              {/* Optional smaller gallery images could go here if available */}
              {bike.galleryUrls && bike.galleryUrls.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {bike.galleryUrls.slice(0, 3).map((url, idx) => (
                    <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-card border border-white/5">
                      <img src={url} alt={`${bike.name} gallery ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <div className="mb-2">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                  {bike.category?.name}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{bike.name}</h1>
              <p className="text-2xl text-muted-foreground font-medium mb-6">{formatPrice(bike.price)}</p>
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                {bike.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                <div className="bg-card border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
                  <Battery className="w-6 h-6 text-primary mb-2" />
                  <span className="font-display font-bold text-lg">{bike.rangeKm}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">km Range</span>
                </div>
                <div className="bg-card border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
                  <Gauge className="w-6 h-6 text-primary mb-2" />
                  <span className="font-display font-bold text-lg">{bike.topSpeedKph}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">km/h Speed</span>
                </div>
                <div className="bg-card border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
                  <Zap className="w-6 h-6 text-primary mb-2" />
                  <span className="font-display font-bold text-lg">{bike.motorWatts}w</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Motor</span>
                </div>
                <div className="bg-card border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center">
                  <Weight className="w-6 h-6 text-primary mb-2" />
                  <span className="font-display font-bold text-lg">{bike.weightKg}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">kg Weight</span>
                </div>
              </div>

              {/* Features List */}
              {bike.features && bike.features.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-display font-bold text-xl mb-6">Key Features</h3>
                  <ul className="space-y-3">
                    {bike.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/contact?bikeId=${bike.id}&type=test_ride`}
                  className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                    bike.inStock 
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-[1.02]" 
                      : "bg-secondary text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  {bike.inStock ? "Book a Test Ride" : "Currently Unavailable"}
                </Link>
                <Link 
                  href={`/contact?bikeId=${bike.id}&type=pricing`}
                  className="flex-1 py-4 px-8 rounded-xl bg-card border border-white/10 font-bold text-lg flex items-center justify-center hover:bg-white/5 transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
