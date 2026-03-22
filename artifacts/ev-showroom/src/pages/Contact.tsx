import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { useLocation, useSearch } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateInquiry, useListBikes } from "@workspace/api-client-react";
import { MapPin, Phone, Mail, CheckCircle2, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  bikeId: z.coerce.number().optional().nullable(),
  inquiryType: z.enum(["test_ride", "general", "pricing"], {
    required_error: "Please select an inquiry type",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialBikeId = searchParams.get("bikeId") ? Number(searchParams.get("bikeId")) : undefined;
  const initialType = searchParams.get("type") as ContactFormData["inquiryType"] | undefined;

  const [isSuccess, setIsSuccess] = useState(false);
  const { data: bikes } = useListBikes();
  const { mutateAsync: createInquiry, isPending } = useCreateInquiry();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: initialType || "test_ride",
      bikeId: initialBikeId || null,
    },
  });

  const inquiryType = watch("inquiryType");

  const onSubmit = async (data: ContactFormData) => {
    try {
      await createInquiry({ data });
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Failed to submit inquiry:", error);
      // Let standard error handling catch this (or show a toast if available)
    }
  };

  return (
    <Layout>
      <div className="min-h-[80vh] pt-32 pb-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's Get You <br/><span className="text-primary">Riding</span></h1>
              <p className="text-lg text-muted-foreground mb-12 max-w-md">
                Whether you want to schedule a test ride, request a custom quote, or just have questions about our electric bikes, our team is here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Showroom Location</h4>
                    <p className="text-muted-foreground">100 Electric Avenue<br/>Innovation District, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (800) 555-VOLT</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg mb-1">Email Support</h4>
                    <p className="text-muted-foreground">hello@voltride.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-primary/30 p-10 rounded-3xl text-center shadow-[0_0_50px_rgba(57,255,20,0.1)]"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Request Received!</h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Thank you for reaching out. A member of the VoltRide team will contact you shortly to confirm details.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-secondary hover:bg-white/10 font-semibold rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-white/5 p-8 md:p-10 rounded-3xl shadow-xl"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* Inquiry Type Toggle */}
                    <div className="grid grid-cols-3 gap-2 p-1 bg-secondary rounded-xl mb-8">
                      {[
                        { id: "test_ride", label: "Test Ride" },
                        { id: "pricing", label: "Pricing" },
                        { id: "general", label: "General" }
                      ].map(type => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setValue("inquiryType", type.id as any)}
                          className={`py-2 text-sm font-semibold rounded-lg transition-all ${
                            inquiryType === type.id 
                              ? "bg-background shadow-md text-primary" 
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name *</label>
                        <input 
                          {...register("name")}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email Address *</label>
                        <input 
                          {...register("email")}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <input 
                          {...register("phone")}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      
                      {inquiryType !== "general" && (
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Interested Model</label>
                          <select 
                            {...register("bikeId")}
                            className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                          >
                            <option value="">Any / Not sure yet</option>
                            {bikes?.map(bike => (
                              <option key={bike.id} value={bike.id}>{bike.name}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message *</label>
                      <textarea 
                        {...register("message")}
                        rows={4}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us what you're looking for..."
                      />
                      {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isPending ? (
                        <span className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Request
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
