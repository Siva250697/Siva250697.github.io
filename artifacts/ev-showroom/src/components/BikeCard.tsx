import { Link } from "wouter";
import { getPlaceholderImage } from "@/lib/utils";
import type { Bike } from "@workspace/api-client-react";
import { ArrowRight, Battery, Gauge, Zap, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WA_NUMBER = "916300312415";

export function BikeCard({ bike }: { bike: Bike }) {
  const imageUrl = bike.imageUrl || getPlaceholderImage(bike.name);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${bike.name} at Siva Motors, Vinukonda. Could you please share the price and availability?`)}`;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-400 hover:shadow-[0_12px_40px_rgba(57,255,20,0.12)] flex flex-col h-full"
    >
      {/* Image area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-secondary to-background flex items-center justify-center">
        <img
          src={imageUrl}
          alt={bike.name}
          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-600 ease-out"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {bike.isFeatured && (
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(57,255,20,0.5)]">
              ⭐ Featured
            </span>
          )}
          <span className="bg-background/80 backdrop-blur-md text-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
            {bike.category?.name || "E-Scooter"}
          </span>
        </div>

        {/* No DL badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> No DL Needed
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display font-bold text-xl mb-1.5 line-clamp-1 group-hover:text-primary transition-colors duration-300">
          {bike.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-5 flex-1 leading-relaxed">
          {bike.shortDescription}
        </p>

        {/* Specs strip */}
        <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-white/5">
          <div className="flex flex-col items-center p-2.5 rounded-xl bg-secondary/60 group-hover:bg-primary/8 transition-colors">
            <Battery className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs font-bold">{bike.rangeKm} km</span>
            <span className="text-[10px] text-muted-foreground">Range</span>
          </div>
          <div className="flex flex-col items-center p-2.5 rounded-xl bg-secondary/60 group-hover:bg-primary/8 transition-colors">
            <Gauge className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs font-bold">{bike.topSpeedKph} km/h</span>
            <span className="text-[10px] text-muted-foreground">Speed</span>
          </div>
          <div className="flex flex-col items-center p-2.5 rounded-xl bg-secondary/60 group-hover:bg-primary/8 transition-colors">
            <Zap className="w-4 h-4 text-primary mb-1" />
            <span className="text-xs font-bold">{bike.motorWatts}W</span>
            <span className="text-[10px] text-muted-foreground">Motor</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2.5">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_16px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle className="w-4 h-4" />
            Get Price on WhatsApp
          </a>
          <Link
            href={`/bikes/${bike.id}`}
            className="w-full py-3 px-4 rounded-xl bg-secondary/80 hover:bg-white/10 font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm group/btn"
          >
            View Full Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
