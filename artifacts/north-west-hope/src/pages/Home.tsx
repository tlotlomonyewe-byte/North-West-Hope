import { Link } from "wouter";
import { ArrowRight, Wrench, Smartphone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1800&auto=format" 
            alt="Cracked Phone" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-destructive px-4 py-1.5 rounded-full mb-4"
          >
            <span className="text-white font-bold tracking-widest text-sm uppercase">Special Offer!</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter"
          >
            COMBO <span className="text-primary drop-shadow-[0_0_15px_rgba(255,208,0,0.5)]">DEAL</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#00ff88] font-bold max-w-2xl mx-auto leading-tight"
          >
            SCREEN REPLACEMENT + FREE SCREEN PROTECTOR
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-[#25d366] text-black hover:bg-[#25d366]/90 font-bold text-lg rounded-full" data-testid="button-hero-whatsapp">
              <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary text-black hover:bg-primary/90 font-bold text-lg rounded-full" data-testid="button-hero-shop">
              <Link href="/shop">
                View Prices <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <Button asChild variant="outline" className="bg-[#1877f2]/10 border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2]/20 font-semibold">
              <a href="https://www.facebook.com/share/1JAx3hwvnT/" target="_blank" rel="noreferrer">Facebook</a>
            </Button>
            <Button asChild variant="outline" className="bg-[#ff0050]/10 border-[#ff0050]/30 text-[#ff0050] hover:bg-[#ff0050]/20 font-semibold">
              <a href="https://www.tiktok.com/@northwesthope04" target="_blank" rel="noreferrer">TikTok</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-primary py-4 overflow-hidden border-y border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-black font-black uppercase tracking-tight text-sm sm:text-base">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Same Day Repair</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Free Screen Protector</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Affordable Prices</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Quality Service</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Fast Repairs</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Our Services</h2>
            <div className="w-24 h-2 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">iPhone Repairs</h3>
              <p className="text-muted-foreground font-medium mb-6">Premium quality screens for all iPhone models. Professional installation included.</p>
              <div className="text-xl font-bold text-[#00ff88]">From R400</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Samsung Repairs</h3>
              <p className="text-muted-foreground font-medium mb-6">Original quality replacement screens for Samsung A-series and more.</p>
              <div className="text-xl font-bold text-[#00ff88]">From R250</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Screen Protectors</h3>
              <p className="text-muted-foreground font-medium mb-6">High-grade tempered glass and hydrogel protectors applied flawlessly.</p>
              <div className="text-xl font-bold text-primary">Just R19</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* R19 Deal Banner */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-black p-8 md:p-12 rounded-3xl border-2 border-primary relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-6">Get Protected for Only</h2>
              <div className="text-7xl md:text-9xl font-black text-primary drop-shadow-[0_0_10px_rgba(255,208,0,0.3)] mb-8">
                R19
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground font-bold mb-8">Professional Screen Protector Installation</p>
              <Button asChild size="lg" className="h-14 px-8 bg-primary text-black hover:bg-primary/90 font-bold text-lg rounded-full">
                <Link href="/contact">Visit Our Shop Today</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
