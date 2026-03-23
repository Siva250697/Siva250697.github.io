import { useState } from "react";
import { Phone, MapPin, X, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "916300312415";
const PHONE = "+91 63003 12415";
const ADDRESS = "22-2202, Kalava Katta Road, Seethaiah Nagar, Vinukonda, Palnadu, AP – 522647";

export function FloatingContact() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book a free test ride at Siva Motors, Vinukonda. Please share available slots.")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-white font-bold text-sm shadow-[0_4px_24px_rgba(249,115,22,0.5)] hover:brightness-110 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer select-none"
        >
          <Calendar className="w-4 h-4" />
          Book Test Ride
        </motion.div>
      </a>

      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="bg-card border border-white/10 rounded-2xl p-6 shadow-2xl w-80 mb-1"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Get in Touch</p>
                <h3 className="font-display font-bold text-2xl text-primary">
                  Siva Motors
                </h3>
              </div>
              <button
                onClick={() => setPopupOpen(false)}
                className="text-muted-foreground hover:text-white p-1 mt-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-5">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Call Us</p>
                  <p className="font-bold text-lg text-white group-hover:text-primary transition-colors leading-none">
                    {PHONE}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Visit Us</p>
                  <p className="text-sm text-white/90 leading-snug">{ADDRESS}</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to know more about electric scooters at Siva Motors.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setPopupOpen((o) => !o)}
        aria-label="Contact on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.55)] hover:shadow-[0_4px_36px_rgba(37,211,102,0.75)] hover:scale-110 transition-all duration-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          {popupOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="w-7 h-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
