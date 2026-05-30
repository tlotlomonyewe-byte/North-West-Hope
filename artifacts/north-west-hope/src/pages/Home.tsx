import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Shield, Zap, Eye, Droplets, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import samsungImg from "@assets/1000501024_1780116301364.jpg";
import iphoneImg from "@assets/1000501026_1780116290670.jpg";

function Particle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedScreenProtector() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const particles = [
    { delay: 0,    x: "10%",  y: "80%" },
    { delay: 0.4,  x: "25%",  y: "70%" },
    { delay: 0.8,  x: "50%",  y: "85%" },
    { delay: 1.2,  x: "70%",  y: "75%" },
    { delay: 0.6,  x: "85%",  y: "65%" },
    { delay: 1.6,  x: "40%",  y: "90%" },
    { delay: 0.2,  x: "60%",  y: "60%" },
    { delay: 1.0,  x: "15%",  y: "55%" },
  ];

  return (
    <div ref={ref} className="relative flex items-center justify-center w-full max-w-sm mx-auto" style={{ minHeight: 340 }}>
      {/* Outer pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/20"
          animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.6, 0] }}
          transition={{ duration: 2.5, delay: i * 0.5, repeat: Infinity, ease: "easeOut" }}
          style={{ width: 180 + i * 30, height: 180 + i * 30 }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} delay={p.delay} x={p.x} y={p.y} />
      ))}

      {/* Phone frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        variants={{ visible: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-36 h-64 rounded-[2.2rem] border-[3px] border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center"
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black/60" />

        {/* AI shield animation sweeping across the screen */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent"
          animate={{ y: ["100%", "-100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
        />

        {/* Glass glint */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Shield icon in center */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], filter: ["drop-shadow(0 0 6px #ffd000)", "drop-shadow(0 0 20px #ffd000)", "drop-shadow(0 0 6px #ffd000)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield className="h-14 w-14 text-primary" strokeWidth={1.5} />
        </motion.div>

        {/* AI text */}
        <motion.div
          className="mt-2 text-[10px] font-black text-primary tracking-[0.3em] uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          Protected
        </motion.div>
      </motion.div>

      {/* Corner sparkles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute text-primary text-xl font-black select-none"
          style={{
            top: i < 2 ? "5%" : "80%",
            left: i % 2 === 0 ? "5%" : "80%",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 180, 360] }}
          transition={{ duration: 1.8, delay: i * 0.4, repeat: Infinity }}
        >
          ✦
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1800&auto=format"
            alt="Cracked Phone"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#ff0055] px-5 py-2 rounded-full shadow-[0_0_20px_rgba(255,0,85,0.5)]"
          >
            <span className="text-white font-black tracking-widest text-sm uppercase">Special Offer!</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter"
          >
            COMBO <span className="text-primary drop-shadow-[0_0_20px_rgba(255,208,0,0.6)]">DEAL</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#00ff88] font-black max-w-2xl mx-auto leading-tight"
          >
            SCREEN REPLACEMENT + FREE SCREEN PROTECTOR
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-[#25d366] text-white hover:bg-[#25d366]/90 font-black text-lg rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)]" data-testid="button-hero-whatsapp">
              <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 bg-primary text-black hover:bg-primary/90 font-black text-lg rounded-full shadow-[0_0_20px_rgba(255,208,0,0.4)]" data-testid="button-hero-shop">
              <Link href="/shop">
                View Prices <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4 pt-2"
          >
            <a href="https://www.facebook.com/share/1JAx3hwvnT/" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-[#1877f2]/20 border border-[#1877f2]/40 text-[#1877f2] font-bold text-sm hover:bg-[#1877f2]/30 transition-colors" data-testid="link-hero-facebook">Facebook</a>
            <a href="https://www.tiktok.com/@northwesthope04" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-[#ff0055]/20 border border-[#ff0055]/40 text-[#ff0055] font-bold text-sm hover:bg-[#ff0055]/30 transition-colors" data-testid="link-hero-tiktok">TikTok</a>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-primary py-5 overflow-hidden border-y-2 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-black font-black uppercase tracking-tight text-sm">
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Same Day Repair</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Free Screen Protector</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Affordable Prices</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Quality Service</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Fast Repairs</span>
          </div>
        </div>
      </section>

      {/* LCD Screens Showcase */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
            >
              Our <span className="text-primary">LCD Screens</span>
            </motion.h2>
            <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Samsung Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]"
            >
              <img src={samsungImg} alt="Samsung LCD Screens" className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-blue-600 px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-widest mb-3">Samsung</div>
                <h3 className="text-2xl font-black text-white mb-1">Samsung LCD Screens</h3>
                <p className="text-white/60 text-sm font-medium mb-4">A04, A05, A12, A125, A13 4G/5G, A16 4G/5G, A24, A53 5G</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00ff88]">From R250</span>
                  <Button asChild size="sm" className="bg-primary text-black font-black rounded-full px-4 hover:bg-primary/90 ml-auto" data-testid="button-samsung-shop">
                    <Link href="/shop">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* iPhone Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)]"
            >
              <img src={iphoneImg} alt="iPhone LCD Screens" className="w-full h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-zinc-600 px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-widest mb-3">iPhone</div>
                <h3 className="text-2xl font-black text-white mb-1">iPhone LCD Screens</h3>
                <p className="text-white/60 text-sm font-medium mb-4">iPhone 11 to 15 — all models including Pro & Pro Max</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#00ff88]">From R400</span>
                  <Button asChild size="sm" className="bg-primary text-black font-black rounded-full px-4 hover:bg-primary/90 ml-auto" data-testid="button-iphone-shop">
                    <Link href="/shop">Shop Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Animated Screen Protectors Section */}
      <section className="relative py-24 overflow-hidden bg-black border-t border-border">
        {/* Animated BG grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,208,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,208,0,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Moving glows */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-[#00ff88]/10 blur-[60px] pointer-events-none"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left: animated phone */}
            <AnimatedScreenProtector />

            {/* Right: content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                  AI-Grade Protection
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                  SCREEN <span className="text-primary">PROTECTORS</span>
                </h2>
                <div className="w-16 h-1.5 bg-primary rounded-full mt-4" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-white/60 text-base leading-relaxed font-medium"
              >
                Military-grade tempered glass that adapts to your screen. Bubble-free installation, scratch resistance, and crystal-clear clarity — protecting your phone like it was designed to.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Shield,   label: "9H Hardness",      sub: "Military grade" },
                  { icon: Eye,      label: "Crystal Clear",     sub: "99% transparency" },
                  { icon: Zap,      label: "Scratch Proof",     sub: "Nano-coating" },
                  { icon: Droplets, label: "Bubble Free",       sub: "Easy apply" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-black text-sm">{label}</div>
                      <div className="text-white/40 text-xs">{sub}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4 pt-2"
              >
                <div className="flex flex-col">
                  <span className="text-white/40 text-sm font-medium">Only</span>
                  <span className="text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(255,208,0,0.5)] leading-none">R19</span>
                  <span className="text-white/40 text-xs font-medium mt-1">FREE with every screen repair</span>
                </div>
                <Button asChild size="lg" className="ml-auto bg-primary text-black hover:bg-primary/90 font-black rounded-full px-6 shadow-[0_0_24px_rgba(255,208,0,0.3)]" data-testid="button-protector-whatsapp">
                  <a href="https://wa.me/27679785028" target="_blank" rel="noreferrer">
                    Order Now
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services quick view */}
      <section className="py-16 bg-[#050505] border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Smartphone, title: "iPhone Repairs", desc: "iPhone 11 through 15. All Pro & Pro Max models.", price: "From R400", color: "text-white/80" },
              { icon: Smartphone, title: "Samsung Repairs", desc: "A-series and more. Same-day turnaround.", price: "From R250", color: "text-blue-400" },
              { icon: Shield,     title: "Screen Protectors", desc: "Tempered glass. Free with every screen repair.", price: "Only R19", color: "text-primary" },
            ].map(({ icon: Icon, title, desc, price, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm font-medium mb-4 leading-relaxed">{desc}</p>
                <span className={`text-lg font-black ${color}`}>{price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
