import { Link } from "wouter";
import { getPlaceholderImage } from "@/lib/utils";
import type { Bike } from "@workspace/api-client-react";
import { ArrowRight, Battery, Gauge, Weight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WA_NUMBER = "916300312415";

export function BikeCard({ bike }: { bike: Bike }) {
  const imageUrl = bike.imageUrl || getPlaceholderImage(bike.name);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in the ${bike.name}. Could you please share the price and availability?`)}`;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(57,255,20,0.1)] flex flex-col h-full"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-secondary flex items-center justify-center">
        <img
          src={imageUrl}
          alt={bike.name}
          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {bike.isFeatured && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-foreground text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
          {bike.category?.name || "E-Bike"}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-2">
          <h3 className="font-display font-bold text-xl line-clamp-1">{bike.name}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
          {bike.shortDescription}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-white/5">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/50">
            <Battery className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs font-medium">{bike.rangeKm}km</span>
            <span className="text-[10px] text-muted-foreground">Range</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/50">
            <Gauge className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs font-medium">{bike.topSpeedKph}km/h</span>
            <span className="text-[10px] text-muted-foreground">Speed</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-secondary/50">
            <Weight className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs font-medium">{bike.weightKg}kg</span>
            <span className="text-[10px] text-muted-foreground">Weight</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link 
            href={`/bikes/${bike.id}`}
            className="w-full py-3 px-4 rounded-xl bg-secondary hover:bg-white/10 font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Ask Price on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
